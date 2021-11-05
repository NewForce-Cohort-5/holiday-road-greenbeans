let attraction = []

//going to list the attraction data
export const useAttraction = () => {
    return attraction.slice()
}

//going to get the attractions data from the api
export const getAttraction = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(dirtyAttraction => dirtyAttraction.json())  
        .then(
            cleanAttraction => {
                attraction = cleanAttraction
        } )      
    
}