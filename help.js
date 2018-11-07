const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
client.on('ready', () => {
  console.log(`Help Commands Is Enabled`);
});


client.on("message", message => {
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
:radio_button: Mars Bot Help :


<~>~<~>~<~>~<~>~<~>~<~>
$admin ~> مساعدة ادارية
<~>~<~>~<~>~<~>~<~>~<~>
$public ~> مساعد عامة
<~>~<~>~<~>~<~>~<~>~<~>
$games ~> مساعدة حول الاعاب
<~>~<~>~<~>~<~>~<~>~<~>

-
$premium-info ~> معلومات حول النسخة المدفوعة
**`)
   message.channel.sendEmbed(embed)
    
   }
}); 
client.on("message", message => {
 if (message.content === "$public") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
      __Public Commands__
$infobot
معلومات حول البوت :robot: 
-
$serverinfo
معلومات حول السيرفر :computer:
-
$hinfo
معلومات حولك او حول شخص اخر :minidisc: 
-
$meminfo
معلومات حول الاعضاء :floppy_disk:
-
$avatar
صورة شخص او روبوت في السيرفر :mountain: 
-
$myprems
اضهار جميع الخصائص المتاحة لديك :dvd: 
-
$rmsg
اعادة ارسال الرسالة التي كتبتها :compression: 
-
$serimg
اضهار صورة السيرفر :night_with_stars: 
-
$roca
ارسال جميع اسماء الرومات و الرتب المتواجدة في السيرفر :metro: 
-
$inv
لدعوة البوت الى سيرفرك :trackball: 
-
$support
للحصول على رابط سيرفر العم الفني :gear: 
-
$role 
لاعطاء رتب :gear: 
-
$roleremove
لسحب رتبة :gear: 

==> Created By Kaser#1118
**`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$admin") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
      __Adminstrator Commands__
$ban 
حضر شخص من السيرفر :pick: 
-
$kick
طرد شخص من السيرفر :hammer: 
-
$cm
حذف الرسال من الروم
$cc
قفل الكتباة في الروم :alarm_clock: 
-
$oc 
فتح الكتابة في الروم :timer: 
-
$at
انشاء روم كتابي :bookmark_tabs: 
-
$av
انشاء روم صوتي :microphone2: 
-
$smu
اسكات شخص عن الكتابة :closed_book: 
-
$cmu
ارجاء الشخص الى الكتابة :book: 
-
$rac
حذف جميع الرومات :no_entry: 
-
$rar
حذف جميع الرتب :name_badge: 

==> Created By Kaser#1118
**`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$games") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      __Games Commands__
$fkk 
لعبة فكك :musical_keyboard: 
-
$vi
لعبة اسرع كتابة :speech_balloon: 
-
$sar
لعبة صراحة :octagonal_sign: 
-
$3i
لعبة عقاب :vertical_traffic_light: 
-
[Other Games Comming.../العاب اخرى قادمة...]

==> Created By Kaser#1118
`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$premium-info") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      __Premium Info__
-توفر خاصية الاغاني بجودة عالية
-توفر خاصية الرابط
-توفر خاصية الترجمة
-توفر خاصية الذعم الفني السريع
-توفر خاصية الترحيب
-توفر خاصية منع نشر الروابط
-توفر خاصية عذم السب
-توفر خاصية الروبوتات الافتاضية (بمعنى عدة اليات مساعدة للسيرفر الخاص بك) المساعدة
-توفر خاصية انشاء غرف مساعدة مخفية تضهر للشخص الذي يريد المساعدة فقط
-عذم قدرة اذخال اي شخص الالي الى السيرفر غير

جميع هذه الخصائص تكون متوفرة في النسخة المدفوعة من الاي
للحصول على النسخة المدفوعة يرجى التواصل مع
Kaser#1118 / <@506034854043975681>
`)
   message.channel.sendEmbed(embed)
    
   }
});

client.login(settings.token);
