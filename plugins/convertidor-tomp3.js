import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[ تنبيه❗] قم بالرد على فيديو تريد تحويله لصوت/𝙼𝙿𝟹*`;
  const media = await q.download();
  if (!media) throw '*[❗تنبيه❗] 𝙻𝙾 حدث خطأ اثناء تحويله يمكن ان يكون طويل*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗تنبيه❗] 𝙻𝙾 حدث خطأ في الاتصال اثناء تحويله حاول لاحقا*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^t(m|a)$/i;
export default handler;
