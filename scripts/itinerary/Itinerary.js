export const Itinerary = (itinerary) => {
    return `
    <section class="itinerary-card">
    <p class="park">${itinerary.park}</p>
    <p class="eatery">${itinerary.eatery}</p>
    <p class="attraction">${itinerary.attraction}</p>
    `
}