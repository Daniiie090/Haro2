import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ ═●▬▬▬ஜƸ̵̡⁠Ӝ̵̨̄⁠Ʒஜ▬▬▬●
*❘╼╼𓏪 قائـمـة 📜 الاوامـر 𓏪╾╾❘*
── • ◈ • ──
*🎶✬⃝┇اهلا👋* ${taguser}
*🎶✬⃝┇أنـا اسـمـــي "ايزن*
*🎶✬⃝┇الـمطـــور* "Gojo/senseiXᎯᎽᎯᏁᎯᏦᏫᎫᎥ"
*🎶✬⃝┇ رقم المطور @${global.suittag}
*🎶✬⃝┇رقم السينسي @${global.prems}
*🎶✬⃝┇*وقـــت الـعــمـل* ${uptime}
*🎶✬⃝┇التاريخ ${week}  ${date}
*🎶✬⃝┇ المستخدمين ${rtotal}
*🎶✬⃝┇عدد المستخدمين المسجلين ${rtotalreg}
*🎶✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*
┏━━━━━━━━━━━━━━━━┓
┃ *< معلومات المستخدم />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ المستوى:* ${level}
┣ *🧰 الخبرة:* ${exp}
┣ *⚓ الرتبة:* ${role}
┣ *💎 الألماس:* ${limit}
┣ *👾 عملات غوجو:* ${money}
┣ *🪙 توكين:* ${joincount}
┣ *🎟️ مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛
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
*✎╎🧾 ⇠〘 المشرفين@ 〙*    
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
*✎╎📖 ⇠〘 .سوره 〙*    
*⏎  اكتب رقم السوره وبعدها رقم الايه يجيبلك الايه مثال .سوره 2 255
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
*✎╎🎞️ ⇠〘 .لفديو 〙*    
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
*✎╎🎶 ⇠〘.play〙*
*⏎*يحملك اي اغنيه من يوتيوب بل اسم بسرعة ودقة
*✎╎🎶 ⇠〘.play.2  〙*
*⏎*الامر خاص بتحميل من يوتيوب عن طريق رابط او اسم والرقم واحد بدل اثنان لتحميل صوت بدل مقطع
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
*✎╎🤖 ⇠〘 .غوجو 〙*    
*⏎*  اسأل البوت اي سؤال
*✎╎👾 ⇠〘 .ايانو 〙*    
*⏎* ذكاء اصطناعي جانبي أسأله اي سؤال
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

*~.¸¸ ❝ GojoXBots❝ ¸¸.~*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }

conn.sendFile(m.chat, 'https://file.io/vT8PSQr6XBV7', 'sticker.webp', '', m, { asSticker: true });

}; 

handler.command = /^(menu|a|memu|memú|اوامر|info|comandos|allmenu|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
