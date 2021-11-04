import { saveEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

const contentTarget = document.querySelector(".journal-form")

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntries") {

// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "suspect": "Este's husband",

        // Make a new object representation of a note
        const newEntry = {
            entry: document.querySelector("#entry-text").value,
            date: document.querySelector("#date-text").value,
            concept: document.querySelector("#concept-text").value,
            mood: document.querySelector("#mood-text").value
            // Key/value pairs here
        }
        console.log(newEntry)
        document.querySelector("#date-text").value = ""
        document.querySelector("#concept-text").value = ""
        document.querySelector("#entry-text").value = ""
        document.querySelector("#mood-text").value = ""
        // Change API state and application state
        saveEntries(newEntry)
        .then(EntryListComponent) // Refresh your list of notes once you've saved your new one
    }
})

//Put some input fields and prompts here
export const JournalForm = () => {
    contentTarget.innerHTML = `
    <section class="journal-form">
    <h2 id="journal-heading">Daily Journal</h2>
        <form action="">
          <fieldset class="journal-date">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="date-text" />
          </fieldset>
          <fieldset class="journal-concepts">
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcepts" id="concept-text" />
          </fieldset>
          <fieldset class="journal-entry">
            <label for="journalEntry">Journal Entry</label>
            <textarea
              name="text"
              id="entry-text"
              cols="30"
              rows="4"
            ></textarea>
          </fieldset>
          <fieldset class="journal-mood">
            <label for="journalMood">Mood for the day</label>
            <select name="" id="mood-text">
              <option value="" id="mood-text" class="mood-placeholder" style="color:lightgray;">Select Mood</option>
              <option value="happy" id="mood-text">Happy</option>
              <option value="ok" id="mood-text">Frustrated</option>
              <option value="sad" id="mood-text">Sad</option>
            </select>
          </fieldset>
        </form>
        <button type="button" class="btn btn-light btn-outline-dark" id="saveEntries">
          <i class="bi bi-journal-check"></i>
          Record Journal Entry
        </button>
    </section>
    `
}