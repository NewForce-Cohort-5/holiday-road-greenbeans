import { Eatery } from "./Eatery.js"
import { getEateries, useEateries } from "./EateryProvider.js"
import { EaterySelect } from "./EaterySelect.js";

const contentTarget = document.querySelector(".eatery-list")


  
  
//   export const EateryList = () => {
//     let eateryHTML = '';
//     getEateries()
//     .then(() => {
  
//       let allTheEateries = useEateries();
  
//       eateryHTML += `
//       <section class="eateries">
//       <h1>Eateries</h1>
//       <div class="eatery-list">
//   `;
  
//       allTheEateries.forEach(singleEatery => eateryHTML += Eatery(singleEatery));
  
//          eateryHTML += `
//          </div>
//          </section>
//          `
  
//       contentTarget.innerHTML = `
//       ${eateryHTML}`
  
//     });
//   };

//   const contentTarget = document.querySelector(".eatery-list");
// const selectEatery = document.querySelector("#EateriesSelect");



export const EateryList = (eateryFilter) => {

    contentTarget.innerHTML = "";

    getEateries()
    .then(() => {
        let eateryArray = useEateries();
    
    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    if (eateryFilter) {
        eateryArray = eateryArray.filter((singleEatery) => {
           return singleEatery ? singleEatery.city === eateryFilter.filtervalue && singleEatery.state === eateryArray.filtervalue : false;
        })
    }

    eateryArray.forEach((singleEatery) => {
        contentTarget.innerHTML += Eatery(singleEatery);
    });
    })
    
}




// Display all criminals when its navbar link is clicked
contentTarget.addEventListener("change", function () {
    document.querySelector('.filtersEateries').innerHTML = "";
    EaterySelect();
    EateryList();
})
