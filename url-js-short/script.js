const form = document.getElementById("url-form");
const longUrlInput = document.getElementById("long-url");
const shortUrlOutput = document.getElementById("short-url");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const longUrl = longUrlInput.value.trim();
  if (!longUrl) {
    alert("Lütfen bir URL girin.");
    return;
  }
  fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
    .then((response) => response.json())
    .then((data) => {
      const shortUrl = data.result.short_link;
      shortUrlOutput.innerHTML = `<a target="_blank">${shortUrl}</a>`;
    })
    .catch((error) => {
      console.error(error);
      alert("URL kısaltılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    });
});

// Label iiçindeki verileri kopyalama
function copyToClipboard() {
  var copyText = document.getElementById("short-url").innerText; // Kopyalanacak metni al
  navigator.clipboard.writeText(copyText); // Metni panoya kopyala
  //alert("Metin panoya kopyalandı: " + copyText); // Kullanıcıya bir bildirim göster
}

function yaziKopyala() {
	var yaziAlani = document.getElementById("short-url").innerHTML;
	navigator.clipboard.writeText(yaziAlani).then(function() {
		alert("Metin başarıyla kopyalandı.");
	}, function() {
		alert("Kopyalama işlemi başarısız oldu.");
	});
}