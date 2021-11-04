export const attractionCard = (Object) => {
    return `
        <section class = "attractionsCard">
                <h3>${Object.name}</h3>
                <p>State: ${Object.state}</p>
                <p>City: ${Object.city}</p>
                <button class="button btn btn-dark btn-outline-light" id="AttractionButton" >Details</button>
                <div id="DetailsID" class = "hiddenDetails">                
                <div class="description">Description: ${Object.description}</div>
                ${Object.ameneties.souvenirs ? `<li>Souvenirs</li>` : ""}
                ${Object.ameneties.restrooms ? `<li>Restrooms</li>` : ""}
                

                
                </div>
    `
}