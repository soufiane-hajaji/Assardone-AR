var domain = window.location.hostname;
var passedDomain = domain.split(".").slice(-2).join(".");


var actualDomain = "bzoukasft.com"; 


if (passedDomain !== actualDomain) {

    document.documentElement.innerHTML = '';

    var message = document.createElement('div');
    message.innerHTML = 'عذرًا، هذا الدومين غير مصرح به.';
    document.body.appendChild(message);

}
