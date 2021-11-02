import { parkList } from "./ParkList.js";
import { getParks, useParks } from "./ParkProvider.js";

const contentTarget = document.querySelector("#parkFilter")

export const parkSelect = () => {
    getParks()
    .then(() => {
        let parkArray = useParks();
        render(parkArray)
    })
}

const render = parkCollection => {
    contentTarget.innerHTML = `<h2>National Parks</h2><select class="dropDown" id="parkSelect">
    <option value="0">Please Select Park...</option>
    ${
        parkCollection.map(parkObject => {
            const parkType = parkObject.fullName
            return `<option>${parkType}</option>`
        })

    }
    </select>`
}


// const eventHub = document.querySelector("body")
// eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.id === "parkSelect") {
//         // Get the name of the selected officer
//         // const selectedOfficer = changeEvent.target.value

//         // Write your code here
//         parkList(changeEvent.target.value)
       
//     }
// })