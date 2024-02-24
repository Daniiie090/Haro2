const dir = [
'https://telegra.ph/file/eb1c8a9a38b534ae036ca.jpg',
'https://telegra.ph/file/d1dbf48884d308d875cb6.jpg',
'https://telegra.ph/file/c16c0445e8d41eef9375d.jpg',
'https://telegra.ph/file/851af64a5f8e93178bb9d.jpg',
'https://telegra.ph/file/343f46587fc9bc8992220.jpg',
'https://telegra.ph/file/bf5c25af8bd93a545f69c.jpg',
'https://telegra.ph/file/1a43318cac7556d48ebf2.jpg',
'https://telegra.ph/file/4e63f9ed6f1d7d390b9d0.jpg',
'https://telegra.ph/file/c7db991907c1a8e65d0c3.jpg',
'https://telegra.ph/file/2e825747e113601f82f08.jpg',
'https://telegra.ph/file/786d689e525aefb054c4e.jpg',
'https://telegra.ph/file/c932a8ac14fb1e6bc94bc.jpg',
'https://telegra.ph/file/1a4b01b8f56589bb726f1.jpg',
'https://telegra.ph/file/40d93b7c1b1555bead11c.jpg',
'https://telegra.ph/file/1a4b01b8f56589bb726f1.jpg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['nw', 'نيوجينز'] 

export default handler 
 
