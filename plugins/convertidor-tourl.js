import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[❗𝐈𝐍𝐅𝐎❗] قم بالرد على صورة او فيديو لتحويلها لرابط*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*هاهو رابط ملفك:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|تل)$/i;
export default handler;
