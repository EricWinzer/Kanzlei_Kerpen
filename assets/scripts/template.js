function getSliderItem(index) {
    return `<section class="slider-wrapper" data-client="${index + 1}" onclick="schalte()">
            <object data="${data[index].imgSVG}" type="image/svg+xml">
              <!-- Fallback -->
              <img src="${data[index].imgPNG}" alt="${data[index].objectAltFirst}" "${data[index].objectAltSecond}">
            </object>
            <h2 class="card-title">Tätigkeitsfelder <span>nach Schwerpunkt</span></h2>
            <div class="card-body">`;
}

function getActivityItem(clientIndex, activityIndex) {
    return `<p><strong>${data[clientIndex].activities[activityIndex].area}</strong> ${data[clientIndex].activities[activityIndex].descriptionShort}</p>`;
}

function getSliderItemFooter() {
    return `</div>
            </section>`;
}

function getCardItem(index) {
    return `<div class="card-wrapper" data-columns="1"> /
        <div class="card" data-client="3"> /
            <h3 class="card-title">${data[index].objectAltFirst}<br>${data[index].objectAltSecond}</h3>/
                <p class="card-description">${data[index].activities[0].area}</p>/`;
}

function getCardBodyparts(index, descriptionIndex) {
    return `<div class="card-bodyparts">/
                        <p>${data[index].activities[index].description[descriptionIndex].text}</p> /
                    </div >/
            </div > `;
}

function getCardFooter(index) {
    return `</div >/
            </div > `;
}
