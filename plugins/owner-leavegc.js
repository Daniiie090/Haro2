let handler = async (m, { conn, args, command }) => {
await m.reply('*وداعا ايها الحمقى  لم اكن استمتع هنا على اية حال! (ههه)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
