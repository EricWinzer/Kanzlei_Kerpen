// Globales
const contentRef = document.getElementById('content');

function init() {
    contentRef.innerHTML = '';
    contentRef.innerHTML += myHome()
};

function toggleDNone(id) {
    document.getElementById(id).classList.toggle(d_none)
};

function renderPlayground() {
    contentRef.innerHTML = '';
    contentRef.innerHTML += myPlayground()
};

function renderBusiness() {
    contentRef.innerHTML = '';
    contentRef.innerHTML += myBusiness()
};

function renderContact() {
    contentRef.innerHTML = '';
    contentRef.innerHTML += myContact()
};

var anis;

window.onload = function () {
    anis = document.querySelectorAll('.ani');
    for (var i = 0; i < anis.length; i++) {
        anis[i].style.MozAnimationPlayState = 'running';
        anis[i].style.webkitAnimationPlayState = 'running';
        anis[i].style.AnimationPlayState = 'running';
    }
}

function schalte() {
    for (var i = 0; i < anis.length; i++) {
        if (anis[i].style.webkitAnimationPlayState === 'running') {
            anis[i].style.webkitAnimationPlayState = 'paused';
        } else {
            anis[i].style.webkitAnimationPlayState = 'running';
        }
        if (anis[i].style.MozAnimationPlayState === 'running') {
            anis[i].style.MozAnimationPlayState = 'paused';
        } else {
            anis[i].style.MozAnimationPlayState = 'running';
        }
        if (anis[i].style.AnimationPlayState === 'running') {
            anis[i].style.AnimationPlayState = 'paused';
        } else {
            anis[i].style.AnimationPlayState = 'running';
        }
    }
}
