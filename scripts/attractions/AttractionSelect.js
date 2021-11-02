import {AttractionList} from "./AttractionList.js"
import { getAttraction, useAttraction } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionsFilter")

export const AttractionSelect = () => {
    
    getAttraction()
    .then(() => {
    const bizarraries = useAttraction()
    render(bizarraries)
})
}
const render = AttractionCollection => {       
        
          
    contentTarget.innerHTML = `
        <select class="dropdown" id="AttractionSelect">
            <option value="0">Please select an attraction...</option>
            ${AttractionCollection.map((AttractionObject) => {
                const attractionName = AttractionObject.name
                return `<option>${attractionName}</option>`
            })}
        </select>
    `
}


// his won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {


    if(eventObject.target.id === "AttractionSelect"){
        console.log("You selected an attraction")
        console.log("This is the attraction that was selected: ", eventObject.target.value)
        AttractionList(eventObject.target.value)
        //event that is listening for is crimeSelect and this line of code lets it know to only pull things from the CrimList that match the value that was selcted
    }
})