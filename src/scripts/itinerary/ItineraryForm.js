import { ItineraryList } from "./ItineraryList.js"
import { saveItinerary } from "./ItineraryProvider.js"


const contentTarget = document.querySelector(".saved-itinerary")

  export const ItineraryForm = () => {
    contentTarget.innerHTML = `
    <section>
    <button id="saveItinerary"
    class="btn btn-dark btn-outline-light">Save Itinerary</button>
    </section>
    `;
  }
  