const handler = async (m, {conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
  const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fproducto = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? {remoteJid: '201033024135@s.whatsapp.net'} : {})}, message: {'productMessage': {'product': {'productImage': {'mimetype': 'image/jpeg', 'jpegThumbnail': imagen1}, 'title': `بيان رسمي للجروبات`, 'description': 'By 𝑺𝛩𝐾𝑈𝑁𝐴 & 𝑉𝐸𝑁𝛩𝑀', 'currencyCode': 'USD', 'priceAmount1000': '1000000000', 'retailerId': 'Ghost', 'productImageCount': 1}, 'businessOwnerJid': `0@s.whatsapp.net`}}};
  if (!m.quoted) throw `اعمل ريبلاي علي الرساله بامر *${usedPrefix + command}* لارسال الاشعار`;
  for (const id of groups) {
    await conn.sendMessage(id, {forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map((v) => v.id)}, {quoted: fproducto});
  }
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] الرساله اتبعتت الي ${groups.length} جروب*\n\n*_تنبيه_: من الممكن ان يكون هذا الامر به خطا ولا يتم ارساله لجميع الجروبات*`);
};
handler.help = ['bcgc2'];
handler.tags = ['owner'];
handler.command = /^(رساله)$/i;
handler.owner = true;
export default handler;
