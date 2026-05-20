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
