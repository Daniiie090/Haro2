import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

const dir = [
    'https://telegra.ph/file/c2e6086f2bf315ec67f05.mp4',
    'https://telegra.ph/file/ef0781fd1b90d1a1b8205.mp4',
    'https://telegra.ph/file/c49f3920d84501135fe1b.mp4',
];

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    const videoUrl = pickRandom(dir);
    const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
    const teks = `${pickRandom([`╭═══〘 ✯✯✯✯✯✯✯✯✯ ═●▬▬▬ஜƸ̵̡⁠Ӝ̵̨̄⁠Ʒஜ▬▬▬●
*❘╼╼𓏪 قائـمـة 📜 الاوامـر 𓏪╾╾❘*
── • ◈ • ──
*🎶✬⃝┇اهلا👋* ${taguser}
*🎶✬⃝┇أنـا اسـمـــي "ايزن*
*🎶✬⃝┇الـمطـــور* "Yone/The hunter"
*🎶✬⃝┇رقم المطور https://wa.me/963959649663
*🎶✬⃝┇رقم السينسي @${global.prems}
*🎶✬⃝┇*وقـــت الـعــمـل* ${uptime}
*🎶✬⃝┇التاريخ ${week}  ${date}
*🎶✬⃝┇ المستخدمين ${totalreg}
*🎶✬⃝┇عدد المستخدمين المسجلين ${rtotalreg}
*🎶✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*

*〄━━┋ ★الـأوامــر★ ┋━━〄*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

 *˼‏💠˹ قـسـم الـمـجـمـوعـات╿↶*
━ ── • ⟐ • ── ━
*✎╎📛 ⇠〘 .منشن 〙*    
*⏎* يمنشن جماعي لكل الاعضاء
*✎╎👤 ⇠〘 .مخفي 〙*    
*⏎* منشن وهمي
*✎╎🏷️ ⇠〘 .الجروب 〙*    
*⏎* يجيبلك معلومات الجروب كامله
*✎╎🧾 ⇠〘 مشرفين@ 〙*    
*⏎* يجيبلك قائمة المشرفين
*✎╎👻 ⇠〘 .الاشباح 〙*    
*⏎* يجيبلك الاعضاء اللي ما بتتفاعل
*✎╎🔄 ⇠〘 .رستر 〙*    
*⏎* يرستر او يعمل اعادة تعيين للينك الجروب
━ ── • ⟐ • ── ━
*˼‏🕌˹ قـسـم الدين╿↶*
━ ── • ⟐ • ── ━
*✎╎🌅 ⇠〘اذكار الصباح〙*    
*⏎* يجيبلك اذكار الصباح
*✎╎🌉 ⇠〘اذكار المساء〙*    
*⏎* يجيبلك اذكار المساء
*✎╎📕 ⇠〘قران〙*    
*⏎* يجيبلك ايه من قرأن كريم
*✎╎🗣️ ⇠〘 .حديث 〙*    
*⏎* البوت يرسل احاديث
*✎╎📖 ⇠〘 اسماء-الله 〙*    
*⏎  يأتي لك بأسماء الله الحسنى مع شرح الاسم
*✎╎🕋 ⇠〘 .ايه 〙*    
*⏎* اكتب رقم سوره وبعدها رقم الايه بس بصوت شيخ مختلف
━ ── • ⟐ • ── ━
*˼‏🔃˹ قـسـم التحويلات╿↶*
━ ── • ⟐ • ── ━
*✎╎🎴 ⇠〘 .ملصق 〙*    
*⏎* تحويل الصورة لملصق
*✎╎🎴 ⇠〘 .مد 〙*    
*⏎* تحويل الصورة لملصق دائري
*✎╎©️ ⇠〘 .سرقه 〙*    
*⏎* سرقة ملصق بحقوقك
*✎╎♻️ ⇠〘 .لصوره 〙*    
*⏎* تحويل الملصق لصورة
*✎╎🎞️ ⇠〘 .لفديو 〙*    يك
*⏎* تحويل الملصق المتحرك لفيديو
*✎╎📩 ⇠〘 .تليجراف 〙*    
*⏎* رفع الصور و الفديوهات الى تليجراف
*✎╎🐼 ⇠〘 .لكرتون 〙*    
*⏎* يحول صورك لكرتون مع تحويل الوجه لاستيكر
*✎╎🏮 ⇠〘 .لانمي 〙*    
*⏎* تحويل صورك لانمي بالذكاء الاصطناعي
*✎╎🎙️ ⇠〘 .انطق 〙*    
*⏎* تحويل النص الى كلام
*✎╎🎙️ ⇠〘.tm〙*
*⏎* لتحويل الفيديو الى مقطع صوتي
━ ── • ⟐ • ── ━
 *˼‏🔃˹ قـسـم الـتحميلات╿↶*
━ ── • ⟐ • ── ━
*✎╎🎦 ⇠〘 .تيك 〙*    
*⏎* ينزل فيديو من التيك توك بدون علامة مائية
*✎╎🎞️ ⇠〘 .فيديو 〙*    
*⏎* يحمل اي فيديو يوتيوب
*✎╎🎥⇠〘 .فديو 〙*
لتيحمل اي فيديوهات يوتيوب ب استخدام لينك
*✎╎🍥 ⇠〘 .انستا 〙*    
*⏎*يحملك فيديوهات من الانستا
*✎╎🎶 ⇠〘.play2〙*
*⏎* تحميل اي مقطع يوتيوب بل اسم بسرعة
*✎╎🎶 ⇠〘.play〙*ق
*⏎*يحملك اي اغنيه من يوتيوب بل اسم بسرعة ودقة
*✎╎🎶 ⇠〘سبوت 〙*
*⏎*ا امر خاص بتحميل من سبوتيفاي
*✎╎🎶 ⇠〘.yta2〙*
*⏎*هذا لامر للتحميل من يوتيوب على شكل مستند بدقة عالية
*✎╎🎶 ⇠〘.yta〙*
*⏎*امر بديل للتحميل على شكل صوت من يوتيوب عن طريق الرابط
*✎╎🎶 ⇠〘.ytv〙*
*⏎* خاص للتحميل من يوتيوب عن طريق رابط على شكل فيديو
*✎╎🎶 ⇠〘.يوتب〙*
*⏎*هذا لامر خاص في بحث اليوتيوب
*✎╎⬇️ ⇠〘 .تطبيق  〙*    
*⏎*يحمل برامج APK
*✎╎🖼️ ⇠〘 .صور 〙*    
*⏎*يحمل صور من تيك توك عن طريق لنك 
*✎╎🎶 ⇠〘.تويت〙*
*⏎* خاص بتحميل من تويتر
*✎╎🎶 ⇠〘.غوغل〙*
*⏎*خاص بتحميل من غوغل
━ ── • ⟐ • ── ━
 *˼‏🤖˹ قـسـم الـذكاء الاصطناعي╿↶*
━ ── • ⟐ • ── ━
*✎╎🤖 ⇠〘 .ايزن 〙*    
*⏎*  اسأل البوت اي سؤال
*✎╎👾 ⇠〘 .هارو 〙*    
*⏎* ذكاء اصطناعي جانبي أسأله اي سؤال
*✎╎👾 ⇠〘 .ياسو 〙*    
*⏎* ذكاء اصتناعي متطور
*✎╎👾 ⇠〘. تخيل〙*    
*⏎* يحول النص للكلام استخدم اللغة الانغليزية افضل
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب1 سؤال وإجابه╿↶*
━ ── • ⟐ • ── ━
 *✎╎☪️⇠〘.دين〙*    
 اسئلة دينية و اجابات
 *✎╎🪨 ⇠〘.العب〙*
*⏎* العب حجر ورق مقص مع البوت
*⏎* يسألك اسأله دينيه
*✎╎🔢 ⇠〘 .الرياضيات 〙*    
*⏎* يرسل لك اسألة رياضيات ب مستويات
*✎╎⚽ ⇠〘 .رياضه 〙*    
*⏎*يسألك اسأله عن كرة القدم
*✎╎🖋️⇠〘 .كت 〙*    
*⏎* لعبة كتابة للتسلية
*✎╎🏷️⇠〘 .فكك 〙*    
*⏎* يجيبلك كلمة تفككها
*✎╎🗂️ ⇠〘 .رتب 〙*    
*⏎* يجيبلك احرف مبعثرة وانت ترتبها
*✎╎🗝️ ⇠〘 .خمن 〙*    
*⏎* يوصفلك شخصية انمي وانت تحاول تخمنها
*✎╎🎭 ⇠〘 .ايموجي 〙*    
*⏎* احزر الشخصيه من الايموجي
*✎╎🗝️ ⇠〘 .انمي 〙*    
*⏎* يسألك اسألة انمي
*✎╎📷 ⇠〘 .عين 〙*    
*⏎* صور عيون لشخصيات انمي للتسليه
*✎╎🎭 ⇠〘 .احزر 〙*    
*⏎* البوت يرسل صور انمي للتسلية
*✎╎🌎 ⇠〘 .علم 〙*    
*⏎* احزر صورة العلم
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب2 العاب متطوره╿↶*
━ ── • ⟐ • ── ━
*✎╎🎲 ⇠〘 .نرد〙*    
*⏎*  يرسل نرد عشوائي
*✎╎🧞‍♂️ ⇠〘 .المارد 〙*    
*⏎* لعبة المارد الأزرق للتسليه
*✎╎🔰⇠〘 .تحدي 〙*    
*⏎* لعبة حجر ورقة مقص
*✎╎🎮 ⇠〘 .اكس او 〙*    
*⏎* لعبة اكس او
*✎╎🎮 ⇠〘 .تعدين〙*    
*⏎* تقوم بعمل تعدين ولبحث عن موارد
*✎╎🎮 ⇠〘  تعدين2 〙*    
*✎ تقوم بالتعدين بطريقة اخرى
*✎╎🎰⇠〘.رهان〙*  
*⏎*  راهن ب رقم من نقاتك لو خسرت بتخسرها
*✎╎🎮 ⇠〘 .غامر 〙*    
*⏎* لعبة مغامرة
*✎╎♟️ ⇠〘 .شطرنج〙*    
*⏎*  للعب لعبة الشطنرج
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب3 كتابه واسأله╿↶*
━ ── • ⟐ • ── ━
*✎╎❓ ⇠〘 .سؤال 〙*    
*⏎* اسئلة عشوائية للتسلية مع الاصدقاء
*✎╎📋 ⇠〘 .لو 〙*    
*⏎*لعبة لو خيروك للتسلية مع الاصدقاء
*✎╎🎫 ⇠〘 .تاج 〙*    
*⏎* البوت يقترحلك رقم منشن وانت تنمشنه
*✎╎🧩 ⇠〘 .فزوره 〙*    
*⏎* اسئلة فوازير للتسلية
*✎╎✅ ⇠〘 .صراحه 〙*    
*⏎* اسئلة وتجاوب عليها بصراحة
*✎╎🧩 ⇠〘 .حروف 〙*    
*⏎* يجيبلك حروف ل اسماء عشوائيه
*✎╎📢 ⇠〘 .مقولات 〙*    
*⏎* يجيبلك مقولات انمي
*✎╎🍀 ⇠〘 .نصيحه 〙*    
*⏎* البوت ينصحك نصيحة
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب4 العاب المنشن ╿↶*
━ ── • ⟐ • ── ━
*✎╎🔝 ⇠〘 .توب 〙*    
*⏎* يجيبك لك افضل 10 في القروب
*✎╎🧑‍🤝‍🧑 ⇠〘 .صداقه 〙*    
*⏎* يصادق اثنين عشوائي من الجروب 
*✎╎💍 ⇠〘 .ذكاء〙*    
*⏎* يقيس الذكاء
*✎╎💔 ⇠〘 .غباء 〙*    
*⏎* يقيس الغباء
✎╎ 👬🏼⇠〘 .رفيق 〙*    
⏎* يجيب توأمك الروحي
━ ── • ⟐ • ── ━
*˼‏🏛️˹ قـسـم البنك╿↶*
━ ── • ⟐ • ── ━
*✎╎📊 ⇠〘 .رانك 〙*    
*⏎* لمعرفة عدد مستواك ونقاتك في الفعاليات والماسك وبياناتك كلما تفاعلت مع البوت وتربح فعاليات وتتفاعل يرفع مستواك في تصنيفات
*✎╎🏦 ⇠〘 ليفل 〙*    
*⏎* يجيبلك حساب نقاط فعاليات البوت
*✎╎💰⇠〘.شراء〙*    
*⏎*  اذا اردت شراء لماس واكتب الكميه مثال .شراء 1
*✎╎🎁 ⇠〘 .يومي 〙*    
*⏎*  يعطيك هديه يوميه
*✎╎💱 ⇠〘 .تحويل 〙*    
*⏎*  لتحويل نقاتك الي شخص اخر
*✎╎📈 ⇠〘 .ليدر 〙*    
*⏎*  يجيب اكثر اشخاص ربحو نقاط من البوت
━ ── • ⟐ • ── ━
*˼‏🖼️˹ قـسـم الصور والايدت╿↶*
━ ── • ⟐ • ── ━
*✎╎💕 ⇠〘 .جوجيتسو 〙*    
*⏎* يجيبلك أيدت جوجيتسو
*✎╎🖼️ ⇠〘 .خلفيه 〙*    
*⏎* يرسل خلفيات انمي
*✎╎🐧 ⇠〘 .انميس 〙*    
*⏎* قائمة خلفيات لانمي
*✎╎👩‍❤️‍👨 ⇠〘 .طقم 〙*    
*⏎* يجيبلك طقم ولاد و بنات
*✎╎🧒 ⇠〘 .طقم2 〙*    
*⏎* يجيبلك صور اولاد 
*✎╎👧🏻 ⇠〘 .طقمي 〙*    
*⏎* يجيبلك طقم بنات
*✎╎🐈‍⬛ ⇠〘 .قط 〙*    
*⏎* صور لقطط عشوائية
*✎╎📹 ⇠〘 .ايدت 〙*    
*⏎* البوت يرسل ايدت انمي
━ ── • ⟐ • ── ━
*˼‏👥˹ قـسـم الاعـضــاء╿↶*
━ ── • ⟐ • ── ━
*✎╎📊⇠〘 .نسبه 〙*    
*⏎* يقيس لك نسبتك في الجروب
*✎╎🖼️ ⇠〘 .بروف 〙*    
*⏎*  يجبلك بياناتك
*✎╎👤 ⇠〘 .تسجيل 〙*    
*⏎*    لازم تسجل عشان بعض لاوامر 
*✎╎💫 ⇠〘 .زخرفه 〙*    
*⏎* زخرفة الكلمات للاسف انجليزي بس
*✎╎🔰 ⇠〘 .دمج 〙*    
*⏎* دمج الايموجي وتكوين ستيكر
*✎╎💭 ⇠〘 .تصميم 〙*    
*⏎* الحصول على تصميم من البوت
*✎╎🔍 ⇠〘 .بحث 〙*    
*⏎* البحث في غوغل
*✎╎👨🏻‍💻 ⇠〘 .المطور 〙*    
*⏎* يجيبلك رقم مطور البوت
*✎╎🎤 ⇠〘 .انطقي 〙*    
*⏎* ينطق صوت بلياباني
*✎╎🎙️ ⇠〘 .انطق 〙*    
*⏎* ينطق صوت عربي او انجليزي
*✎╎🎴 ⇠〘 .تقل 〙*    
*⏎* تحويل نقاط او الماس لشخص اخر 
━ ── • ⟐ • ── ━
*˼‏🖥️˹ قـسـم المطور╿↶*
━ ── • ⟐ • ── ━
*✎╎👑 ⇠〘 .بريم 〙*    
*⏎* يمكن للمطور فقط اعطاء صلاحيات لاستخدام البوت
*✎╎🚫 ⇠〘 .حظر 〙*    
*⏎* حظر الشات للبوت
*✎╎⭕ ⇠〘 .الغاء-الحظر 〙*    
*⏎* الغاء حظر الشات للبوت
*✎╎🔐 ⇠〘 .المحظورين 〙*    
*⏎*يجيبلك الارقام والشاتات المحظورة
*✎╎🌟 ⇠〘 .المميزين 〙*    
*⏎* الاشخاص البيرميوم
*✎╎⛔ ⇠〘 .بلوك 〙*    
*⏎* تخلي البوت يعمل لشخص بلوك
*✎╎✅ ⇠〘 .رفع-بلوك 〙*    
*⏎* يرفع البلوك عن المستخدم
*✎╎🚷 ⇠〘 .البلوكات 〙*    
*⏎* الأشخاص الواخدين بلوك من البوت
*✎╎⚠️ ⇠〘 .بان 〙*    
*⏎* حظر شخص من استخدام البوت
*✎╎🔓 ⇠〘 .رفع-بان 〙*    
*⏎* يرفع البان عن المستخدم
*✎╎🔛 ⇠〘 .انضم 〙*    
*⏎* البوت ينضم لجروبات عن طريق الرابط
*✎╎🔚 ⇠〘 .اخرج 〙*    
*⏎* البوت يخرج من الجروبات
*✎╎🚨 ⇠〘 .مهم 〙*    
*⏎* يعمل منشن خفي للمطور فقط 
*✎╎🎌 ⇠〘 .اعلان 〙*    
*⏎* يعلن المطور عن تحديثات البوت 
━ ── • ⟐ • ── ━
*˼‏ ⚠️˹ مـلاحــظــة╿↶*
╭ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╮
*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*
 ╰⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╯

*~.¸¸ ❝ GojoXBots❝ ¸¸.~*`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['اوامر'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }
