function getSliderItem(index) {
    return `<section class="card-wrapper" data-client="${index + 1}" onclick="schalte()">
            <object data="${data[index].imgSVG}" type="image/svg+xml">
              <!-- Fallback -->
              <img src="${data[index].imgPNG}" alt="${data[index].objectAlt}">
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
