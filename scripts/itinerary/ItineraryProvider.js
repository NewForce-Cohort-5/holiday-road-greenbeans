let itinerary = []


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useItinerary = () => {
    return itinerary.slice();
  
}

export const getItinerary = () => {
    return fetch("http://localhost:8088/itineraries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(destination => {
            itinerary  = destination 
            // What should happen when we finally have the array?
        })
}

export const saveItinerary = vacation => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vacation)
    })
    .then(getItinerary) // After we add a note, get them all again so our new note appears in our collection
  }
