export const attractionCard = (Object) => {
    return `
        <section class = "attractionsCard">
                <h3>${Object.name}</h3>
                <p>State: ${Object.state}</p>
                <p>City: ${Object.city}</p>
                <button class="button" id="AttractionButton">Details</button>
                <div id="DetailsID" class = "hiddenDetails">                
                <div class="description">Description: ${Object.description}</div>
                

                
                </div>
    `
}