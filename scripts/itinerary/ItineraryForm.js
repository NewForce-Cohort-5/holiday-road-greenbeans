import { AttractionList } from "../attractions/AttractionList.js"
import { EateryList } from "../eateries/EateryList.js"
import { itineraryList } from "./ItineraryList.js"
import { saveItinerary } from "./ItineraryProvider.js"


const contentTarget = document.querySelector(".saved-itinerary")

// Handle browser-generated click event in component
window.onload = () => {
    const clickEvent = document.querySelector('#saveItinerary');
  
    // Handler function for saving a note
   
    clickEvent.addEventListener("click", event => {
      if (event.target.id === "saveItinerary") {
  
        event.preventDefault();
  
        // Convert the date from it's default value
        const itineraryDate = new Date(document.querySelector('#-date').value).toLocaleDateString('en-US');
        
        const newItinerary = {
          date: itineraryDate,
          park: document.querySelector('#itinerary-park').value,
          eatery: document.querySelector('#itinerary-eatery').value,
          attraction: document.querySelector('#itinerary-attraction').value,

        }
  
        // Clear form values after creating form body data
        document.querySelector('#itinerary-date').value = '';
        document.querySelector('#itinerary-park').value = '';
        document.querySelector('#itinerary-eatery').value = '';
        document.querySelector('#itinerary-attraction').value = '';

  
  
  
        // If any of the form values are empty then display where valid information is needed
        if (newItinerary.date === 'Invalid Date' || newItinerary.park === '' || newItinerary.eatery === '' || newItinerary.attraction === '') {
          alert('Please enter valid values')
  
        // Otherwise we can go ahead and make this a new note
        } else {
  
  
  
          saveItinerary(newItinerary)
          .then(itineraryList)

        //   .then(parkList)
        //   .then(EateryList)
        //   .then(AttractionList);
        }
      }
    });
  }
  
  export const ItineraryForm = () => {
    contentTarget.innerHTML = `
    <form>
    <input id="saveIntinerary"
    type="button"
    value="Save Itenerary">
    </form>
    `;
  }
  