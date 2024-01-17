const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `*[❗] قم بالإشارة إلى شخص ما أو قم بالرد على رسالة خاصة به*\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '*[❗] المستخدم لديه 0 انذارات*';
  user.warn -= 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} 𝚂𝙴 𝙻𝙴 𝚀𝚄𝙸𝚃𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰\n*ADVERTENCIAS ${user.warn}/3*`, null, {mentions: [who]});
};
handler.command = /^(unwa|delwarn|الغاء انذار|deladvertencia|delwarning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
