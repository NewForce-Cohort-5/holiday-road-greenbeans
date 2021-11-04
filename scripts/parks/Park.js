export const park = (parkObject) => {
    return`
    <section class="parkCard">
    <button type="button" id="detailButtonPark" class="btn btn-dark btn-outline-light">Details</button>
    <h3 class="fullName">Park: ${parkObject.fullName}</h3>
    <div class="state">City and State: ${parkObject.addresses[1].city}, ${parkObject.addresses[1].stateCode}</div>
    
    <div class="hidden"
    id="parkDetailButton"><h3>Park Details</h3>
    <div class="description">Description: ${parkObject.description}</div>
    <div class="description">Description: ${parkObject.url}</div>
    <div class="description">Contacts: ${parkObject.contacts.phoneNumbers[0].phoneNumber}</div>
    </div>
    </section>`
}

//need to add additional info- just using this to print
// ${eateries.ameneties.restrooms ? `<li>Restrooms</li>` : ""}