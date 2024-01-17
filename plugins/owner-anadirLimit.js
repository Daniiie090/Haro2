import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗تنبيه❗] ضع علامة على مستخدم باستخدام @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗تنبيه❗] أدخل كمية الماس التي تريد إضافتها *';
  if (isNaN(txt)) throw '*[❗تنبيه❗] الرمز غير مدعوم بالأرقام فقط !*';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '*[❗تنبيه❗] 𝙴𝙻 الحد الأدنى لعدد الماس المراد إضافته هو𝟷*';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`≡ *💎 اضافة*
┌──────────────
▢ *المجموع:* ${dmt}
└──────────────`);
};
handler.command = ['تحويل', 'addd', 'dard', 'dardiamantes'];
handler.rowner = true;
export default handler;
