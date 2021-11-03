import { getAttraction, useAttraction } from "./AttractionProvider.js" ;
import {attractionCard} from "./Attraction.js"
import { AttractionSelect } from "./AttractionSelect.js";

const contentAttraction = document.querySelector(".attractionsFilter")

export const AttractionList = (attractionSelected) => {
    getAttraction()
    .then(() => {
  
      let AttractionArray = useAttraction();  
      let AttractionHTML = "" ;

  
  if(attractionSelected){
    
    AttractionArray = AttractionArray.filter(singleAttractionInLoop => {
      return singleAttractionInLoop.name === attractionSelected
    
    })

  }
        AttractionArray.forEach((attractionSelected) => {
  
            AttractionHTML += attractionCard(attractionSelected);
  
      })
  
      contentAttraction.innerHTML = `${AttractionHTML}`
  
    });
  };

  
  