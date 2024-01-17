const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] هذه مجموعة نشطة ليس لديها اشباح :D*`, m);
  m.reply(`*[ ⚠ الاشباح الغير متفاعلين ⚠ ]*\n\n*المجموعة:* ${await conn.getName(m.chat)}\n*عدد اعضاء المجموعة:* ${sum}\n\n*[ 👻 الاشباح الذين لا يتكلمون  👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحظة:البوت يحسب الناس التي لا تتفاعل منذ دخوله للمجموعة *`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|ساي)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
