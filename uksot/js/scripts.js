// Modal write us

var link  = document.querySelector('.write-us a');
var popup = document.querySelector('.modal-write-us');
var close = popup.querySelector('.modal-close');
var yourName = popup.querySelector('[name="name"]');
var email = popup.querySelector('[name="email"]');
var text = popup.querySelector('[name="text"]');
var form = popup.querySelector('form');
var storageName = localStorage.getItem('yourName');
var storageMail = localStorage.getItem('email');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-show');

  if (storageName && storageMail) {
    yourName.value = storageName;
    email.value = storageMail;
    text.focus();
  }
  else {
    yourName.focus();
  }
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(event) {
  if (!(yourName.value && email.value && text.value)) {
    event.preventDefault();
    popup.classList.add('modal-error');
  }
  else {
    localStorage.setItem('yourName', yourName.value);
    localStorage.setItem('email', email.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if(popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

// Slider

var slides = document.querySelectorAll('.slider input[type="radio"]');
var length = slides.length;

function change () {
  if (length) {
    var currentSlide = document.querySelector('.slider input[type="radio"]:checked');
    var next = parseInt(currentSlide.value, 10) + 1;
    if (next > length) {
      next = 1;
    }
    var slide = document.querySelector('.slider input[type="radio"]:nth-child('+next+')');
    slide.checked = 'checked';
  }
}

var fiveSecChangeSlide = setInterval(change, 5000);
// clearInterval(fiveSecChangeSlide);

// Map

// Google
/*function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(45.039400,38.969252),
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image = './img/marker.png';
  var myLatLng = new google.maps.LatLng(45.038723,38.973100);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);*/

//Yandex
ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map('map-canvas', {
    center: [45.039400,38.969252],
    zoom: 17,
    controls: ['zoomControl']
  });

  myPlacemark = new ymaps.Placemark([45.038723,38.973100], {},{
    iconLayout: 'default#image',
    iconImageHref: './img/marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-120,-180]
  });

  myMap.geoObjects.add(myPlacemark);
}
