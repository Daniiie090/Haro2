import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn }) => {
  
  let vid = 'https://telegra.ph/file/9953943f2c9d22e34844d.mp4 ';
  let stiker = await createSticker(false, img, '', author, 20)
  
  m.reply(stiker)
};
handler.customPrefix = /^(تست)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality }
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
