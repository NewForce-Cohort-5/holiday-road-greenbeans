import { useParks, getParks } from "./ParkProvider.js"
import { park } from "./Park.js";
import { parkSelect } from "./ParkSelect.js";

const contentTarget = document.querySelector("#parkPrintList")

export const parkList = (parkSelected) => {
    
     let parkHTML = "";

    getParks()
    .then(() => {
        let parkArray = useParks();

      if(parkSelected) {
          parkArray = parkArray.filter(singleParkObject => {
              return singleParkObject.fullName === parkSelected
          })
      }

        parkArray.forEach((singleParkObject) => {
            parkHTML += park(singleParkObject);
        })

        
        contentTarget.innerHTML = `<h1>Itinerary:</h1><div>${parkHTML}</div>`
    });
};
