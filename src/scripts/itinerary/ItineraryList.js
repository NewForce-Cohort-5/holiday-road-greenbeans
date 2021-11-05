import { getItinerary, useItinerary, saveItinerary } from "./ItineraryProvider.js"
import { Itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".print-itinerary")

export const ItineraryList = () => {
  getItinerary()
  .then(() => {

    let allTheItineraries = useItinerary();

    let itineraryHTML = "";
   
    allTheItineraries.forEach((singleItinerary) => {

        itineraryHTML += Itinerary(singleItinerary);
    });

    contentTarget.innerHTML += `
    <div class="grid-box">
    <h2>Itinerary</h2>
    ${itineraryHTML}</div>`

  });
};

const newDestination = document.querySelector("body")



newDestination.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {

        const destination = {
            park: document.querySelector("#fullName").innerHTML,
            attraction: document.querySelector("#attraction-name").innerHTML,
            eatery: document.querySelector("#business__name").innerHTML

        }
        console.log(destination)
        saveItinerary(destination)
        .then(ItineraryList)

    }
})