export const Eatery = (eateries)=> {
    return `
    <section class="eatery-card">
    <button type="button" class="btn btn-dark btn-outline-light " id="eateryButton">Deatils</button>
    <h3 class="business__name"> ${eateries.businessName}</h3>
    <p class="business__location"> ${eateries.city}, ${eateries.state}</p>
    <div id="eateryDetails" class="hidden">
    <p>${eateries.description}</p>
   <ul>
    ${eateries.ameneties.wheelchairAccessible ? `<li>Wheelchair Accessible</li>` : ""}
   <li>${eateries.petFriendly}</li>
   <li>${eateries.wifi}</li>
   <li>${eateries.diaperFacility}</li>
   <li>${eateries.playground}</li>
   <li>${eateries.restrooms}</li>
   </ul>
    </div>
    </section>
    `
}