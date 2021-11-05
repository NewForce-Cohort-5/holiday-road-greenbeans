import {AttractionList} from "./AttractionList.js"
import { getAttraction, useAttraction } from "./AttractionProvider.js"

export const ADetailButton = document.querySelector("body")


ADetailButton.addEventListener("click", (eventObject) => {
const buttonID = eventObject.target.id.split("-")[1]
console.log(buttonID)

    if(buttonID){
        

       
        
        document.querySelector(`#DetailsID-${buttonID}`).classList.toggle("hiddenDetails")
       
    
    }
})
