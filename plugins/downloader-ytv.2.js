import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] هذا لامر خاص بتحميل يوتيوب فديو بدقة  على شكل مستند360*';
  await m.reply(`*_⏳ جاري التحميل...⏳_*\n\n*◉ ييمكنك التحميل من هنا ايضا#يوتب ᴏ #play.2 ᴏ #yt2 ◉*`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *العنوان:* ${ttl}\n❏ *الحجم:* ${size}`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *العنوان:* ${n}\n❏ *الحجم:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] حدث خطأ*', m);
    }
  }
};
handler.command = /^yt2|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
