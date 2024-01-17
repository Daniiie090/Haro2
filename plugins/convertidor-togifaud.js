/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] الرجاء الرد على الفديو التي تريد تحويله gif مع صوت*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp)/.test(mime)) throw `*[❗] قم بالرد على فيديو ${mime} لتحويله ل gif دون صوت*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*قم بالرد على الملصق الذي تريد تحويله لفيديو*'}, {quoted: m});
};
handler.command = ['gi'];
export default handler;
