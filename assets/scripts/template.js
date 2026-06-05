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

function getCardItem(clientIndex, activityIndex) {
    return `
        <div class="card-wrapper" data-columns="1">
            <div class="card" data-client="${clientIndex + 1}">
                <h3 class="card-title">
                    ${data[clientIndex].activities[activityIndex].area}
                </h3>
                <p class="card-description">
                    ${data[clientIndex].activities[activityIndex].descriptionShort}
                </p>
    `;
}

function getCardBodyparts(clientIndex, activityIndex, descIndex) {
    return `
        <div class="card-bodyparts">
            <p>
                ${data[clientIndex]
            .activities[activityIndex]
            .description[descIndex]
            .text}
            </p>
        </div>
    `;
}

function getCardFooter() {
    return `
            </div>
        </div>
    `;
}
