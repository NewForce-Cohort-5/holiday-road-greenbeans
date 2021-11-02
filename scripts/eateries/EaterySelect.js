
import { useEateries, getEateries } from "./EateryProvider.js";
import { EateryList } from "./EateryList.js";

const contentTarget = document.querySelector(".filtersEateries");
const eventHub = document.querySelector("aside");

export const EaterySelect = () => {
    getEateries()
    .then(() => {
        const food = useEateries();
        render(food);
    })
}

eventHub.addEventListener("change", (eateryObj) => {
    if(eateryObj.target.id === "eateriesSelect"){
        EateryList(eateryObj.target.value);

      
        
        
    }
})

const render = (eateryCollection) => {
    contentTarget.innerHTML = `
    
        <select class="dropdown" id="eateriesSelect">
            <option value="0">Please select a city and state...</option>
            ${
                eateryCollection.map((eateries) => {
                    const eateryCity = eateries.city;
                    const eateryState = eateries.state;
                     return `<option>${eateryCity}, ${eateryState}</option>`
                })
            }
        </select>
       
    `
}