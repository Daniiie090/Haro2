const toxicRegex = /كسمك|عرص|خول|متناك|منتاك|شرموط|منيك|كسختك|كتفم|فك/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*[❗] ' + `${user.warn == 1 ? `Hola @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, decir la palabra "${isToxic}" está prohibido en este grupo. Advertencia: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`*[❗] مرحبا صديقي @${m.sender.split`@`[0]}, الشتم ممنوع هنا واذا فعلتها مرة اخرى سيتم طردك وشكرا تأدب.*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
