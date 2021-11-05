import { itineraryList } from "./ItineraryList.js"
import { saveItinerary } from "./ItineraryProvider.js"


const contentTarget = document.querySelector(".saved-itinerary")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {
        
        const newItinerary = {
            
            park: document.querySelector("#parkSelect").value,
            bizarre: document.querySelector("#AttractionSelect").value,
            eatery: document.querySelector("#eaterieSelect").value
        }
        console.log(newItinerary)
        
        // document.querySelector("#park-name").value = ""
        // document.querySelector("#name-biz").value = ""
        // document.querySelector("#eateryName").value = ""
        saveItinerary(newItinerary)
        .then(itineraryList)
    }
})
  export const ItineraryForm = () => {
    contentTarget.innerHTML = `
    <form>
    <input id="saveIntinerary"
    type="button" class="btn btn-dark btn-outline-light"
    value="Save Itenerary">
    </form>
    `;
  }
  