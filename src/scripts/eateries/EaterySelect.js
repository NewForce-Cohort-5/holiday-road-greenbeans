
import { useEateries, getEateries } from "./EateryProvider.js";
import { EateryList } from "./EateryList.js";

const contentTarget = document.querySelector("#filtersEateries");
const eventHub = document.querySelector("body");

export const EaterySelect = () => {
    getEateries()
    .then(() => {
        const food = useEateries();
        render(food);
    })
}

eventHub.addEventListener("change", (eateryObj) => {
   
        
        
        if(eateryObj.target.id === "eateriesSelect"){
            console.log("You Selected something")
            console.log("Your Selection is: ", eateryObj.target.value)
            EateryList(eateryObj.target.value)
        }
        
    
})

const render = (eateryCollection) => {
    contentTarget.innerHTML = `
    
        <select class="dropdown" id="eateriesSelect">
            <option value="0">Please select an Eatery...</option>
            ${
                eateryCollection.map((eateries) => {
                    const eateryName = eateries.businessName;
                     return `<option>${eateryName}</option>`
                })
            }
        </select>
       
    `
}