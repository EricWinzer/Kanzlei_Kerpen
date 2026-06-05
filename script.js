// Globales
const contentRef = document.getElementById('content');

function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none');
}

// Local Storage
function safeToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(data));
}

function getFromLocalStorage() {
    let myArray = JSON.parse(localStorage.getItem('data'));
    if (myArray != null) {
        data = myArray;
        safeToLocalStorage();
    }
}
function init() {
    getFromLocalStorage();
    render();
}

function render() {
    renderSlider();
    renderCards();
}


function renderSlider() {
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

        itemRef.innerHTML = html;
    }
}
function renderCards() {
    for (let index = 0; index < data.length; index++) {

        const cardRef = document.getElementById(`card-${index}`);

        if (!cardRef) continue;

        let html = '';

        for (let activityIndex = 0; activityIndex < data[index].activities.length; activityIndex++) {

            html += getCardItem(index, activityIndex);

            const descriptions =
                data[index].activities[activityIndex].description || [];

            for (let descIndex = 0; descIndex < descriptions.length; descIndex++) {
                html += getCardBodyparts(
                    index,
                    activityIndex,
                    descIndex
                );
            }

            html += getCardFooter();
        }

        cardRef.innerHTML = html;
    }
}
