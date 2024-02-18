import fs from 'fs';
const timeout = 60000;
const poin = 500;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, '*👆🏻 ╎ لا يزال هنالك لغز لم تتم الإجابة عليه*', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ 🦄 ╎ اللغز : *${json.question}*
*⏳ ╎ الوقت :* ${(timeout / 1000).toFixed(2)} ثانية
*🏆 ╎ جائزتك :* +${poin} Exp
`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `⏲️ ╎ انتهى الوقت!!\n🔰 ╎ الإجابة : *${json.response}*`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout)];
};
handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(لغز|الغاز|اللغز|الالغاز|لغوز)$/i;
export default handler;
