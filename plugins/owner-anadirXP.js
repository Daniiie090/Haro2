import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗تنبيه❗] قم بالاشارة الى المستخدم @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗تنبيه❗] أدخل مقدار الخبرة التي تريد إضافتها*';
  if (isNaN(txt)) throw '*[❗تنبيه❗] ارقام فقط!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*[❗تنبيه❗] الحد الادنى لتحويل الخبرة هية 1*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *اضافة خبرة*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`);
};
handler.command = ['تحويل2', 'addexp'];
handler.rowner = true;
export default handler;
