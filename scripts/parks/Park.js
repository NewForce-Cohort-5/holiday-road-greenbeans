export const park = (parkObject) => {
    return`
    <section class="parkCard">
    <h3 class="fullName">${parkObject.fullName}</h3>
    <button class="Details">Details</button>
    </section>`
}

//need to add additional info- just using this to print