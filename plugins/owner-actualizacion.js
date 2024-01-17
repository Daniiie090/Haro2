// adartado por mario (Aka: un ladrón de código)

import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = ''; 
const owner = 'BrunoSobrino';
const repo = 'TheMystic-Bot-MD';
const handler = async (m, {conn, text, usedPrefix, command}) => {
 conn.sendMessage(m.chat, {text: `*[❗] تم تفعيل الأمر بنجاح، وسنقوم بإعلامك عند حدوث أي تغيير   رسمي.*`}, {quoted: m});  
try {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url, author: { login } } = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        previousCommitUser = login
        conn.sendMessage(m.chat, {text: `*[❗] ¡تم تحديث المستودع!*\n*- مخزن:* ${html_url}\n*- رسالة الالتزام:* ${message}\n*- Commit por:* ${login}`}, {quoted: m});
      }
    } catch (error) {
      console.error(error)
      m.reply('*[❗] خطأ في التحقق من المستودع*');
    }
  }
  setInterval(checkRepoUpdates, 6000);
} catch (e) {
m.reply(e)
}
};
handler.command = /^(نب|اكش)/i;
handler.rowner = true;
export default handler;
