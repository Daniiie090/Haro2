const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `*[❗] قم بالاشارة الى شخص.تريد ازالة منه التميز*`;
  if (!user) throw `*[❗] لم يتم العثور على المستخدم في قاعدة البيانات*`;
  if (user.premiumTime = 0) throw '*[❗] المستخدم ليس مستخدمًا متميزًا*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `*[❗] @${who.split`@`[0]} تمت ازالة المستخدم من التميز اصبح شخصاً عادياً*`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(ازل)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
