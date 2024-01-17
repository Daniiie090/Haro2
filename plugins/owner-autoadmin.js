/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] مرحبا أيها المستخدم كيف حالك أنت بالفعل مشرف هذه المجموعة.*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'ارتقاء');
  } catch {
    await m.reply('*[❗] خطأ لا يمكن إعطاء المشرف*');
  }
};
handler.command = /^اضافة3$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
