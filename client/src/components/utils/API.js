import axios from "axios";

const MAINURL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/shuffle/";

const dealURL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/draw/?count=26";

const userHandURL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/pile/userCards/add/?cards=AS,2S"
const computerHandURL = "https://deckofcardsapi.com/api/deck/xp50c80sluua/pile/computerCards/add/?cards=AS,2S"

export default {
  // makes new shuffled deck
  makeDeck: function () {
    return axios.get(MAINURL);
  },
  
  // draws cards first time 
  getComputerHand: function () {
      return axios.get(computerHandURL);
  },
  getUserHand: function () {
      return axios.get(userHandURL);
  },
  // play single card
  getShownCards: function () {
      return axios.get()
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
