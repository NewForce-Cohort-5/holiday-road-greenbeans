import { getItinerary, useItinerary } from "./ItineraryProvider.js"
import { Itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".print-itinerary")

export const itineraryList = () => {
  getItinerary()
  .then(() => {

    let allTheItineraries = useItinerary();

    let itineraryHTML = "";
   
    allTheItineraries.forEach((singleItinerary) => {

        itineraryHTML += Itinerary(singleItinerary);
    });

    contentTarget.innerHTML = `
    <h2>Itinerary</h2>
    ${itineraryHTML}`

  });
};