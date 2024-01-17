import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "*[❗] اكتب نص للبحث عن تطبيقات في متجر الالعاب*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*🔍 البحث:* ${v.title}
       *✍️ المطور:* ${v.developer}
       *💸 السعر:* ${v.priceText}
       *📈 التحميلات:* ${v.scoreText}
        *⛓️ الرابط:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(ستور)$/i;
export default handler;
