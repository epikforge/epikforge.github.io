const params = new URLSearchParams(window.location.search);
let input = document.querySelector('input[name="m"]');
let params_m = params.get('m');
if(input && params_m) input.value = params_m;

function delay(callback, ms) {
    var timer = 0;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

let zip = document.querySelector('input[data-zip]');
let city = document.querySelector('input[data-city]');
if(zip && city) {
    let country = zip.getAttribute('data-country');
    if(country === null) country = 'hu';
    // add event listener with delay
    zip.addEventListener('input', delay(function(e) {
        let zip = e.target.value;
        let url = 'https://api.zippopotam.us/' + country + '/' + zip;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.places && data.places.length > 0) {
                    city.value = data.places[0]['place name'];
                }
            });
    }, 500),500);
}
var smoothscroll = require('smoothscroll-polyfill');
smoothscroll.polyfill();

// on click of an anchor, add event listener
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        let href = a.getAttribute('href');
        if(href.startsWith('#')) {
            let target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            window.location.href = href;
        }
    });
});