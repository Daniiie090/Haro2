const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[❗] قم بالإشارة إلى شخص ما أو قم بالرد على رسالة أرسلها المستخدم الذي تريد حظره\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*[❗تنبيه❗] تم حظر هذا المستخدم بنجاح*\n*—◉ لن يستطيع المستخدم من استخدام اوامر البوت*');
};
handler.command = /^باند$/i;
handler.rowner = true;
export default handler;
