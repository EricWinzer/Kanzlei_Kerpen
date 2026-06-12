// Globales
const contentRef = document.getElementById('content');

function openOverlay(clientIndex, activityIndex) {
    const activity = data[clientIndex].activities[activityIndex];
    document.getElementById('overlay-area').textContent = activity.area;
    const items = activity.description
        ? activity.description.map(d => `<li>${d.text}</li>`).join('')
        : `<li>${activity.descriptionShort}</li>`;
    document.getElementById('overlay-description').innerHTML = items;
    document.getElementById('card-overlay').classList.remove('d_none');
}

function closeOverlay() {
    document.getElementById('card-overlay').classList.add('d_none');
}

function schalte(clickedPosition) {
    const slider = document.querySelector('.slider');
    const anim = slider.getAnimations()[0];
    if (!anim) return;

    const DURATION = 20000;
    const QUANTITY = parseInt(getComputedStyle(slider).getPropertyValue('--quantity')) || 3;

    const currentTime = ((anim.currentTime % DURATION) + DURATION) % DURATION;
    const currentDeg = (currentTime / DURATION) * 360;
    const targetDeg = ((clickedPosition - 1) / QUANTITY) * 360;
    const delta = (targetDeg - currentDeg + 360) % 360;

    if (delta < 2) {
        anim.pause();
        return;
    }

    const targetTime = (currentTime + (delta / 360) * DURATION) % DURATION;
    anim.pause();

    let startReal = null;
    function animate(now) {
        if (!startReal) startReal = now;
        const animElapsed = (now - startReal) * 4;
        if (animElapsed >= (delta / 360) * DURATION) {
            anim.currentTime = targetTime;
        } else {
            anim.currentTime = (currentTime + animElapsed) % DURATION;
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

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
