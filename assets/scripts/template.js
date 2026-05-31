function getTemplateRAIN(index) {
    return '<section class="card-wrapper ani" data-client=${index + 1} onclick="schalte()"> \
          <object data=${data[index].imgSVG} type="image/svg+xml"> \
            <!-- Fallback --> \
            <img src=${data[index].imgPNG} \
         alt=${data[index].objectAlt}> \
          </object> \
          <h2 class="card-title">Tätigkeitsfelder <span>nach Schwerpunkt</span></h2> \
          <div class="card-body"> \
            <p><strong>${data[index].activities[0].area}</strong> ${data[index].activities[0].descriptionShort}</p> \
            <p><strong>${data[index].activities[1].area}</strong> ${data[index].activities[1].descriptionShort}</p> \
            <p><strong>${data[index].activities[2].area}</strong> ${data[index].activities[2].descriptionShort}</p> \
            <p><strong>${data[index].activities[3].area}</strong> ${data[index].activities[3].descriptionShort}</p> \
          </div> \
        </section>';
}
