export const Eatery = (eateries)=> {
    return `
    <section class="eatery-card">
    
    <h3 id="business__name"> ${eateries.businessName}</h3>
    <p class="business__location"> ${eateries.city}, ${eateries.state}</p>
    <button type="button" class="btn btn-dark btn-outline-light" id="eateryButton">Details</button>
    <div id="eateryDetails" class="hidden">
    <p>${eateries.description}</p>
   <section class="icon-container">
    ${eateries.ameneties.wheelchairAccessible ? `<i class="fab fa-accessible-icon"></i>` : ""}
   ${eateries.ameneties.petFriendly ? `<i class="fas fa-dog"></i>` : ""}
   ${eateries.ameneties.wifi ? `<i class="fas fa-wifi"></i>` : ""}
   ${eateries.ameneties.diaperFacility ? `<i class="fas fa-baby"></i>` : ""}
   ${eateries.ameneties.playground ? `<i class="fas fa-child"></i>` : ""}
   ${eateries.ameneties.restrooms ? `<i class="fas fa-restroom"></i>` : ""}
   </section>
    </div>
    </section>
    `
}