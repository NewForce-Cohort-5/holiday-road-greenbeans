import { Eatery } from "./Eatery.js"
import { getEateries, useEateries } from "./EateryProvider.js"
import { EaterySelect } from "./EaterySelect.js";


const contentTarget = document.querySelector("#eateryPrintList")



export const EateryList = (eaterySelected) => {
  let eateryHTML = '';
  getEateries()
  .then(() => {

    let eateryArray = useEateries();


if(eaterySelected){
    eateryArray = eateryArray.filter(eateryObj => {
        return eateryObj.businessName === eaterySelected
    })
}

eateryArray.forEach((eateryObj) => {
 eateryHTML += Eatery(eateryObj)   
});
  
    contentTarget.innerHTML += `
    <section class="eateries">
    <h2>Eateries:</h2>
    <div class="eatery-list flex-container">${eateryHTML}</div>
    </section>
    `

  });
};