import {AttractionList} from "./AttractionList.js"
import { getAttraction, useAttraction } from "./AttractionProvider.js"

export const ADetailButton = document.querySelector("body")


ADetailButton.addEventListener("click", (eventObject) => {


    if(eventObject.target.id === "AttractionButton"){
        

       
        
        document.querySelector("#DetailsID").classList.toggle("hiddenDetails")
       
    
    }
})
