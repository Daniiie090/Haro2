import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] هذا لامر خاص بتحميل المقاطع على شكل مستند من يوتيوب*';
  await m.reply(`*_⏳جاري التحميل الان انتظر...⏳_*\n\n*◉ يمكنك ايضا التحميل من هذه الاوامر #يوتب ᴏ #play.2 ᴏ #yt2 ◉*`);
  try {
    const q = '128kbps';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    const cap = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *العنوان:* ${ttl}\n❏ *الحجم:* ${size}`.trim();
    await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 📥⌋—◉*\n❏ :العنوان:* ${n}\n❏ *الحجم:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] حدث خطأ اثناء التحميل *', m);
    }
  }
};
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta2$/i;
export default handler;
