const handler = async (m, {command, usedPrefix, text}) => {
  const which = command.replace(/ايل/i, '');
  if (!text) throw `*[تنبيه] المستخدم ${usedPrefix}قائمة${which} لعرض القائمة*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*[❗تنبيه❗] '${text}' *غير مسجل في قائمة الرسائل*`;
  delete msgs[text];
  m.reply(`*[❗تنبيه❗] 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 '${text}'*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'del' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^ايل(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
