export const Eatery = (eateries)=> {
    return `
    <section class="eatery-card">
    
    <h3 class="business__name"> ${eateries.businessName}</h3>
    <p class="business__location"> ${eateries.city}, ${eateries.state}</p>
    <button type="button" class="btn btn-dark btn-outline-light " id="eateryButton">Details</button>
    <div id="eateryDetails" class="hidden">
    <p>${eateries.description}</p>
   <ul>
    ${eateries.ameneties.wheelchairAccessible ? `<li>Wheelchair Accessible</li>` : ""}
   ${eateries.ameneties.petFriendly ? `<li>Pet Friendly</li>` : ""}
   ${eateries.ameneties.wifi ? `<li>wifi</li>` : ""}
   ${eateries.ameneties.diaperFacility ? `<li>Diaper Facility</li>` : ""}
   ${eateries.ameneties.playground ? `<li>Playground</li>` : ""}
   ${eateries.ameneties.restrooms ? `<li>Restrooms</li>` : ""}
   </ul>
    </div>
    </section>
    `
}