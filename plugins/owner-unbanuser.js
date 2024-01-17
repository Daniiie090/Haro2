const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗تنبيه❗] قم بمنشنه الشخص*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗تنبيه❗] قم بمنشنة الشخص*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*[❗تنبيه❗] تم الغاء حظر المستخدم\n*—◉ يمكنه الان استخدام الاوامر*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^de$/i;
handler.rowner = true;
export default handler;
