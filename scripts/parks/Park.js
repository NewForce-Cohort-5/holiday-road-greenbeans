export const park = (parkObject) => {
    return`
    <section class="parkCard">
    <button type="button" class="btn btn-dark btn-outline-light ">Details</button>
    <h3 class="fullName">${parkObject.fullName}</h3>

    </section>`
}

//need to add additional info- just using this to print