export const Itinerary = (itinerary) => {
    return `
    <section class="itinerary-card">
    <p class="itinerary__park">${itinerary.park}</p>
    <p class="itinerary__eatery">${itinerary.eatery}</p>
    <p class="itinerary__attraction">${itinerary.attraction}</p>
    <p class="itinerary__date">${itinerary.date}/p>
    `
}