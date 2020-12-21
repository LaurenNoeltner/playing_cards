import axios from "axios";

const URL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/shuffle/";

const dealURL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/draw/?count=26";


export default {
  // GETS new deck that is pre-shuffled
  getShuffledDeck: function () {
    return axios.get(URL);
  },
  // Put: Draws cards first time into piles
  getComputerHand: function () {
      return axios.get(dealURL);
  },
  getUserHand: function () {
      return axios.get(dealURL);
  }
  
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
