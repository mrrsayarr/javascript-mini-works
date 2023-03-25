// Saat 
function saatGuncelle() {
  var simdi = new Date();
  var saat = simdi.getHours();
  var dakika = simdi.getMinutes();
  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  var zaman = saat + ":" + dakika;
  document.getElementById("saat").innerHTML = zaman;
}

// Her saniye gerçek zamanı güncelle
setInterval(saatGuncelle, 1000);




