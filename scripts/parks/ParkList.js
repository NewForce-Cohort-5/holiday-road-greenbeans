import { useParks, getParks } from "./ParkProvider.js"
import { park } from "./Park.js";

const contentTarget = document.querySelector("#parkFilter")

export const parkList = () => {
    getParks()
    .then(() => {
        let parkArray = useParks();

        let parkHTML = "";

        parkArray.forEach((singleParkObject) => {
            parkHTML += park(singleParkObject);
        })
        contentTarget.innerHTML = `<h2>National Parks</h2><div>${parkHTML}</div>`
    });
};
