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
            itemRef.innerHTML = getSliderItem(index);
            for (let i = 0; i < data[index].activities.length; i++) {
                itemRef.innerHTML += getActivityItem(index, i);
            }
            itemRef.innerHTML += getSliderItemFooter();
        }

        let html = getSliderItem(index);

        for (let i = 0; i < data[index].activities.length; i++) {
            html += getActivityItem(index, i);
        }

        html += getSliderItemFooter();

        console.log(html);

        itemRef.innerHTML = html;
        console.log(itemRef.outerHTML);
    }
}
