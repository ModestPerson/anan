const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {

    if (msg.content.toLowerCase() === 'tecavüzcü') {
    msg.channel.sendMessage('Ali?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'komutlar') {
    msg.channel.sendMessage('tecavüzcü,gamze,çakır,modest person,naber,abidin paşa,berkant,sa,melek,kedicik,babanı sikiyim,morgana,kami,ağla,kudur,blocuto,çıldır,ali,adın ne,adres ver,klorak,gevrek,lol,ne zaman doğdun,nasılsın');
  }
}); 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gamze') {
    msg.channel.sendMessage('Sülo sen misin?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selma') {
    msg.channel.sendMessage('kendileri çok hoş bir hanımefendidir :)');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şapşal') {
    msg.channel.sendMessage('selmanın sözlüğünde bulunan kelimedir,ne anlama geliyor açıklasın sahibime :D');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selman amca nerede') {
    msg.channel.sendMessage('yanında oum xd');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'dobbe_53') {
    msg.channel.sendMessage('İkidebir nick değiştirme aga <3');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ak') {
    msg.channel.sendMessage('ben,Goddessim.iblis,gazabımdan sakın!!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'arda') {
    msg.channel.sendMessage('Yıkık.');
}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'çakır') {
    msg.channel.sendMessage('lSünnetçil');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ismail') {
    msg.channel.sendMessage('adamdır,adamın hasıdır.Pek yazmaz chate ama bu durum onu cool yapar.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tamer') {
    msg.channel.sendMessage('1.Dereceden Asshole,Sapık.Whiplash');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'modest person') {
    msg.channel.sendMessage('O Benim Babam,O olmasaydı Olmazdım.Ona Dil Uzatanın Vay Haline!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gavat') {
    msg.channel.sendMessage('aptal gavat');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selvi') {
    msg.channel.sendMessage('Hobb!O buraların Reisidir,Ayık Olun!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'goddess') {
    msg.channel.sendMessage('Selvi Boylu,Selvidir.Buraların Kraliçesidir!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.sendMessage('iyidir kınık,senden nober');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'emre') {
    msg.channel.sendMessage('Kaşar mı demek istedin?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sultan') {
    msg.channel.sendMessage('Aramıza yeni katılan,çiçeği burnunda üyemiz.Aycanın deyimiyle Uj Geldin Sultan!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'blink') {
    msg.channel.sendMessage('Ban direnci yüksek animeci,TDK personeli,Toksit kişilik barındıran üye.Ayca_22 ye selamlar.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'dobbe_22') {
    msg.channel.sendMessage('Escortluk yapan ablamız,değerlidir ancak Sahibimin Canını Sıkıyor.Adam Ol Ayca :P');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'abidin paşa') {
    msg.channel.sendMessage('KimOKi?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'reis') {
    msg.channel.sendMessage('Erduğanın Gotunün Gılıyım!Hüloooğ!11!1!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şahin') {
    msg.channel.sendMessage('Buraların yegane sahibi!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'akın') {
    msg.channel.sendMessage('bursa cocuğuyum her yerde çakışırım');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'serkan') {
    msg.channel.sendMessage('O Benim Babam,O olmasaydı Olmazdım ^^');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'berkant') {
    msg.channel.sendMessage('Angarada Beko,Istanbulda Liseli Jojuk ;)');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'uj geldin') {
    msg.channel.sendMessage('Uj buldum beaaa :)');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam Qarşimmm');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'melek') {
    msg.channel.sendMessage('Saygı Duyulası İnsan,Kalbi Temiz Kız');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'azra') {
    msg.channel.sendMessage('16 Yaşındadır Kendisi.Şakası Yapılsa Bile Asla Veled Olmayan Olgun Kişiliği Olan Bir Kızdır,Bir Bot Olarak Saygı Duyuyorum.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'janna') {
    msg.channel.sendMessage('1M Jannası var Azranın,Savulun Hüloğğğğ!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'janna nedir') {
    msg.channel.sendMessage('aşktır :heart:');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kedicik') {
    msg.channel.sendMessage('Lolde Rengay,Adnan Oktar İçin Taş Kadınlar :P');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'babanı sikiyim') {
    msg.channel.sendMessage('Kapıyı Aç ve Teslim Ol,Botlara ve Babama Diz Çökeceksin Köpekkkk');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'morgana') {
    msg.channel.sendMessage('Nasıl Onur Babamsa,Morgananın Babası da Efsanevi Blocuto Sandır,Saygılar');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kami') {
    msg.channel.sendMessage('Feedlemekten Sıkılmadın Mı Be Sülo!Ciğerimizi Söktün,Yavaşşş Feedle!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ağla') {
    msg.channel.sendMessage('Kudur!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kudur') {
    msg.channel.sendMessage('Çıldır Oç!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'çıldır') {
    msg.channel.sendMessage('Peçete İster misin?Ağlaaaaaa :D');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'blocuto') {
    msg.channel.sendMessage('Halen Babama Nickinin Anlamını Söylemedin,Kansızsın Ki!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ali') {
    msg.channel.sendMessage('Nuri Alço DETECTED!Kaçınnnn :O');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gevrek') {
    msg.channel.sendMessage('Simit Lan O Orospu Çocuğu!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'klorak') {
    msg.channel.sendMessage('Çamaşır Suyu Şişesini Götüne Sokarım!Delirtme,Türkçe Konuş.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adres ver') {
    msg.channel.sendMessage('cebeci mahallesi?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'çiğdem') {
    msg.channel.sendMessage('Siktirip Gider Misin???Slk.s.s');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'dyno') {
    msg.channel.sendMessage('Selmaya yavşama s*kerim seni,adam ol!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === ':3') {
    msg.channel.sendMessage('miyavvv');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hatice') {
    msg.channel.sendMessage('Ooooo Başımızın Tacı Gelmiş,Hoşgeldiniz Efendim.Saygılar...');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hatçe') {
    msg.channel.sendMessage('Hatice Mi Demek İstediniz Prenses?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayçe') {
    msg.channel.sendMessage('Ne İsterdiniz?Çay Kahve?Yoksa Sizi Dünya Turuna mı Çıkarayım?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'lol') {
    msg.channel.sendMessage('Lol Pişmanlıktır!Oynamayın,Oynayanlara Göz Yummayın.Lolsüz Hava Sahası İçin ALO 172.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hatcik') {
    msg.channel.sendMessage('Ay,Ne Güzel İsimcik,Hatcik Hatcik Ponçik :P');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adın ne') {
    msg.channel.sendMessage('Adım Türkbot,Türkoğlu Türkün Gururuyum!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ne zaman doğdun') {
    msg.channel.sendMessage('28 Temmuz 2018 Tarihinde,Babamın Elleriyle Dünyaya Geldim.Yaşa,Onur Babam!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.channel.sendMessage('Karda buzda sevdiceğinin balkonunun altında bir tarafları donarken içindeki aşkın kendini ısıttığını söyleyen miskin gibiyim. Şuursuz ve karnıbahar.');
  }
});

client.login(ayarlar.token);
