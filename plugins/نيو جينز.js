import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/Danielle096/dani/master/plugins/%D9%84%D9%87%D9%84%D9%87%D9%87.json?token=GHSAT0AAAAAACNEZ44NUPMH65EBYDKMHI7WZNPYWRA`)).data;
  const mystic = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, mystic, 'error.jpg', `_${command}_`, m);
};
// conn.sendButton(m.chat, `_${command}_`, author, mystic, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['newjeans', 'kpopnewjeans'];
handler.tags = ['internet'];
handler.command = /^(نيوجينز|newjeans)$/i;
export default handler;
