

//  SHOW ALERT BUTTON 
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

// toast mesajını gösteren fonksiyon
function showToast() {
    var toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
}

// sağ tık menüsü event listener'ı
document.addEventListener('contextmenu', function (event) {
    // sağ tık yapıldığında showToast() fonksiyonunu çağır
    showToast();
    event.preventDefault(); // varsayılan sağ tık menüsünü engelle
});

// toast için gerçek zaman
function printRealTime() {
    var now = new Date();
    document.getElementById("real-time").innerHTML = now.toLocaleString();
}

// Her saniye gerçek zamanı güncelle
setInterval(printRealTime, 1000);