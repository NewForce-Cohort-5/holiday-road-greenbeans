export const Eatery = (eateries)=> {
    return `
    <section class="eatery-card">
    <h3 class="business__name"> ${eateries.businessName}</h3>
    <p class="business__location"> ${eateries.city}, ${eateries.state}</p>
    </section>
    `
}