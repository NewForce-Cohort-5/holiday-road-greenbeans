export const Eatery = (eateries)=> {
    return `
    <section class="eatery-card">
    <button type="button" class="btn btn-dark btn-outline-light ">Deatils</button>
    <h3 class="business__name"> ${eateries.businessName}</h3>
    <p class="business__location"> ${eateries.city}, ${eateries.state}</p>
    </section>
    `
}