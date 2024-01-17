const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const textpremERROR = `*[❗𝐈𝐍𝐅𝐎❗] لاضافة شخص الل قائمة المميزين قم بمنشنته او رد على رسالته*\n\n*—◉ مثال:*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*◉ ${usedPrefix + command} 1 رسالة له>*`;
  if (!who) return m.reply(textpremERROR, null, {mentions: conn.parseMention(textpremERROR)});

  const user = global.db.data.users[who];
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  // let name = await conn.getName(who)
  const name = await '@' + who.split`@`[0];

  const ERROR = `*[❗] تنبيه ${'@' + who.split`@`[0]} لم يتم العثور على المستخدم في قاعدة بياناتي `;
  if (!user) return m.reply(ERROR, null, {mentions: conn.parseMention(ERROR)});

  const segundos10 = 10 * 1000; // 10 segundos en milisegundos
  const hora1 = 60 * 60 * 1000 * txt; // 1 hora
  const dia1 = 24 * hora1 * txt; // 1 día
  const semana1 = 7 * dia1 * txt; // 1 semana
  const mes1 = 30 * dia1 * txt; // 1 mes
  const now = Date.now();

  if (command == 'مميز' || command == 'userpremium') {
    if (now < user.premiumTime) user.premiumTime += hora1;
    else user.premiumTime = now + hora1;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000; // tiempo restante en segundos
    const textprem1 = `*🎟️ مستخدم مميز جديد!!!*\n\n*✨ المستخدم: ${name}*\n*🕐 وقت: ${txt} يوم(ar)*\n*📉 متبقي: ${timeLeft} ساعة*`;
    m.reply(textprem1, null, {mentions: conn.parseMention(textprem1)});
  }

  if (command == 'مميز2' || command == 'userpremium2') {
    if (now < user.premiumTime) user.premiumTime += dia1;
    else user.premiumTime = now + dia1;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000 / 60 / 60; // tiempo restante en horas
    const textprem2 = `*🎟️ مستخدم مميز جديد!!!*\n\n*✨ المستخدم: ${name}*\n*🕐 وقت: ${txt} يوم(ar)*\n*📉 متبقي: ${timeLeft} ساعة*`;
    m.reply(textprem2, null, {mentions: conn.parseMention(textprem2)});
  }

  if (command == 'مميز3' || command == 'userpremium3') {
    if (now < user.premiumTime) user.premiumTime += semana1;
    else user.premiumTime = now + semana1;
    user.premium = true;
    formatTime(user.premiumTime - now).then((timeleft) => {
      const textprem3 = `*🎟️ مستخدم مميز!!!*\n\n*✨ المستخدم: ${name}*\n*🕐 وقت: ${txt} اسبوع(ar)*\n*📉 متبقي: ${timeleft}*`;
      m.reply(textprem3, null, {mentions: conn.parseMention(textprem3)});
    });
  }

  if (command == 'مميز4' || command == 'userpremium4') {
    if (now < user.premiumTime) user.premiumTime += mes1;
    else user.premiumTime = now + mes1;
    user.premium = true;
    formatTime(user.premiumTime - now).then((timeleft) => {
      const textprem4 = `*🎟️ مستخدم مميز!!*\n\n*✨ المستخدم: ${name}*\n*🕐 وقت: ${txt} شهر(ar)*\n*📉 متبقي: ${timeleft}*`;
      m.reply(textprem4, null, {mentions: conn.parseMention(textprem4)});
    });
  }
};
handler.help = ['addprem [@user] <days>'];
handler.tags = ['owner'];
handler.command = ['مميز', 'userpremium', 'مميز2', 'userpremium2', 'userpremium3', 'مميز3', 'userpremium4', 'مميز4'];
handler.group = true;
handler.rowner = true;
export default handler;

async function formatTime(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let timeString = '';
  if (days) {
    timeString += `${days} يوم${days > 1 ? 'ar' : ''} `;
  }
  if (hours) {
    timeString += `${hours} ساعة${hours > 1 ? 'ar' : ''} `;
  }
  if (minutes) {
    timeString += `${minutes} دقيقة${minutes > 1 ? 'ar' : ''} `;
  }
  if (seconds) {
    timeString += `${seconds} ثانية${seconds > 1 ? 'ar' : ''} `;
  }
  return timeString.trim();
}
