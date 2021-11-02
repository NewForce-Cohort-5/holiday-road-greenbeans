let parks = []

export const useparks = () => {
    return parks.slice()
    }

    export const getParks = () => {
        return fetch("https://developer.nps.gov/api/v1/parks?api_key=O3K5fR1F3SpqJUoCdSyx27vCGS7Fk6DYqobuiSM4")
        .then(dirtyParks => dirtyParks.json())
        .then (cleanParks => {
            parks = cleanParks
        })
    }