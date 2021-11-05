
import { settings } from "../Settings.js"

let parks = []

export const useParks = () => {
    return parks.slice()
    }

    export const getParks = () => {
        return fetch(settings.npsKey)
        .then(dirtyParks => dirtyParks.json())
        .then (cleanParks => {
            console.table(cleanParks)
            parks = cleanParks.data
        })
    }


    