import axios from "axios";

const URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

export default {
  // Gets all tasks
  getShuffledDeck: function () {
    return axios.get(URL);
  },
  
  // Gets the tasks with the given id
//   getTaskById: function (id) {
//     return axios.get("/api/tasks/" + id);
//   },
//   // Deletes the task with the given id
//   deleteTask: function (id) {
//     return axios.delete("/api/tasks/" + id);
//   },
//   // Saves a task to the database
//   saveTask: function (taskData) {
//     return axios.post("/api/tasks", taskData);
//   },
//   putPoints: function (id, pointData) {
//     return axios.put("/api/points/:id", pointData);
//   },
};

// get deck
// shuffle deck

// deal 2 equal piles each consisting of half of deck
// draw top card from each pile
// determine winner of hand
// winner of hand gets both cards added to the BOTTOM of their pile
// when one of the player's pile has 0 cards, they lose
// reshuffle deck
// re-deal cards
