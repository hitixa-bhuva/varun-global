// whatsapp
function redirectToWhatsApp() {
    var phoneNumber = "+919081813238";
    var message = ""; 
    var url =
      "https://api.whatsapp.com/send?phone=" +
      encodeURIComponent(phoneNumber) +
      "&text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  }
  