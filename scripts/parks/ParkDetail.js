


// export const detailButton = document.querySelector("#parkDetailButton")

// export const eventHub = document.querySelector("body")

 

export const detailButton = document.querySelector("body")
 
detailButton.addEventListener("click", clickEvent => {
    // Select the entire body tag
    if(clickEvent.target.id === "detailButtonPark"){
        
        document.querySelector("#parkDetailButton").classList.toggle("hidden") 
       
    }
    
  })
 
    