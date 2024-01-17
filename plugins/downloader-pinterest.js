import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ابحث عن محتوى تريد تحميله صورا من بينترست ${usedPrefix + command} Naksu*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*خطأ تحقق غير متوقع*
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(بين)$/i;
export default handler;
