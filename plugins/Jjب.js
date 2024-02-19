import fs from 'fs'
let timeout = 20000
let poin = 125

let handler = async (m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '👆🏻 ╎ لا يزال هنالك لغز لم تتم الإجابة عليه❌ ❯', conn.tekateki[id][0])
throw false
}
  
  let tekateki = await (await fetch('https://raw.githubusercontent.com/miku-655/RTXZY-MD/pro/plugins/%D9%84%D8%BA%D8%B2.json')).json()
  let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `📜 ╎ اللغز ${json.question}
*⏳ ╎ الوقت ${(timeout / 1000).toFixed(2)} ثــانــيــه
*🫔 ╎ الجائزة↞ ${poin} نقاط┇
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['Miku Bot']
handler.tags = ['Miku Bot']
handler.command = /^(لغز)$/i
export default handler
