const params = new URLSearchParams(window.location.search);
let input = document.querySelector('input[name="m"]');
let params_m = params.get('m');
if(input && params_m) input.value = params_m;

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