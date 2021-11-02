import { getAttraction, useAttraction } from "./AttractionProvider.js" ;
import {attractionCard} from "./Attraction.js"
import { AttractionSelect } from "./AttractionSelect.js";

const contentAttraction = document.querySelector(".attractionsFilter")

export const AttractionList = (attractionSelected) => {
    getAttraction()
    .then(() => {
  
      let AttractionArray = useAttraction();  
      let AttractionHTML = "" ;

  // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
  if(attractionSelected){
    
    AttractionArray = AttractionArray.filter(singleAttractionInLoop => {
      return singleAttractionInLoop.bizarraries === attractionSelected
    // write the condition here to filter for criminals whose crime matches the convictionFilter value
    // the line above is to go through and filter the array through the convictions of the criminals to match the selected item crimeSelected
    })

  }
        AttractionArray.forEach((attractionSelected) => {
  
            AttractionHTML += attractionCard(attractionSelected);
  
      })
  
      contentAttraction.innerHTML = `Something ${AttractionHTML}`
  
    });
  };

  
  