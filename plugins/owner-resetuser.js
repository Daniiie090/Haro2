ضconst handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `*[❗] تنسيق مستخدم غير معروف.  قم بالرد على رسالة أو قم بوضع علامة على مستخدم أو أدخل رقم المستخدم الخاص بك.*`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `*[❗] تنسيق مستخدم غير معروف.  قم بالرد على رسالة أو قم بوضع علامة على مستخدم أو أدخل رقم المستخدم الخاص بك.*`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `*[❗] المستخدم @${userNumber} لم يتم العثور عليه في قاعدة البيانات الخاصة بي.*`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `*[❗] جميع بيانات المستخدم @${userNumber} في قاعدة البيانات تم حذفها.*`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(restablecerdatos|حوذف|resetuser)$/i;
handler.rowner = true;
export default handler;
