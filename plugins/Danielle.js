import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn }) => {
  
  let img = 'https://telegra.ph/file/0769a160b0dd4846bfdf7.png ';
  let packName = 'Naksu/The killer';
  let authorName = 'Yone/The hunter';
  let quality = 20;
  let sticker = await createSticker(false, img, packName, authorName, quality);
  
  conn.sendMessage(m.chat, sticker, MessageType.sticker, { quoted: m });
};

handler.customPrefix = /^(b)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality }
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
