let eateries = []

export const useEateries = () => {
    return eateries.slice()
}





export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedEateries => {
            console.table(parsedEateries)
            eateries = parsedEateries
        }
    )
    
}

export const getEateriesDetails = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedEateries => {
            console.table(parsedEateries)
            eateries = parsedEateries.ameneties
        }
    )
    
}