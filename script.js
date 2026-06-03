// Globales
const contentRef = document.getElementById('content');

function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none');
}

// Local Storage
function getFromLocalStorage() {
    let myArray = JSON.parse(localStorage.getItem('data'));
    if (myArray != null) {
        data = myArray;
    }
}

function safeToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(data));
}

function init() {
    getFromLocalStorage();
    render();
}

function render() {
    for (let index = 0; index < data.length; index++) {
        const itemRef = document.getElementById(`item-${index}`);
        if (itemRef) {
            itemRef.innerHTML = getSliderItemRAIN(index);
            for (let i = 0; i < data[index].activities.length; i++) {
                itemRef.innerHTML += getActivityItemRAIN(index, i);
            }
            itemRef.innerHTML += getSliderItemFooterRAIN();
        }
    }
};
