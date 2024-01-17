const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
    // conn.readMessages([m.key])
    await m.reply('*[ ⚠ ] إعادة تشغيل البوت...*\n\n*—◉ يرجى الانتظار لحظة لاستخدام البوت مرة أخرى، فقد يستغرق الأمر بضع دقائق.*');
    process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['ريستارد', 'reiniciar'];
handler.rowner = true;
export default handler;
