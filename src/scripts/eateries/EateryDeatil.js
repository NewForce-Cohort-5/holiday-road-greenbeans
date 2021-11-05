export const deatilButton = document.querySelector("body")




deatilButton.addEventListener("click", (eateryObj) => {

    if(eateryObj.target.id === "eateryButton"){
     
    document.querySelector("#eateryDetails").classList.toggle("hidden")
    }
})


