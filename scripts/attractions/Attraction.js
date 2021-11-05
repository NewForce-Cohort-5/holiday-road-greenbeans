export const attractionCard = (Object) => {
    return `
        <section class = "attractionsCard">
                <h3>${Object.name}</h3>
                <p>State: ${Object.state}</p>
                <p>City: ${Object.city}</p>
                <button class="button" id="AttractionButton-${Object.id}">Details</button>
                <div id="DetailsID-${Object.id}" class = "hiddenDetails">                
                <div class="description">Description: ${Object.description}</div>
                ${Object.ameneties.souvenirs ? `<li>Souvenirs</li>` : ""}
                ${Object.ameneties.restrooms ? `<li>Restrooms</li>` : ""}
                

                
                </div>
    `
}