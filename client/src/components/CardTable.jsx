import React, { useState } from 'react';
import Header from "./Header";
// import API from "./utils/CardDeck";
import "../App.css";
import cardBack from "./utils/cardBack.jpg";

const CardTable = () => {
    const [shuffledDeck, setShuffledDeck] = useState([]);
    const [deck, setDeck] = useState([]);
    const [userCards, setUserCards] = useState([]);
    const [computerCards, setComputerCards] = useState([]);
    const [userCardImg, setUserCardImg] = useState("");

    


    
    //establish connection to my JSON file in /public folder
    const getDeck = (e) => {
        e.preventDefault();

        fetch("./data.json").then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            setDeck(data);
            setUserCardImg(data[0].image)
            // console.log(data);
            
        }).catch(err => {
            console.log(err + "couldn't get deck")
        });
        shuffleDeck(deck);
        setShuffledDeck(deck);
        console.log(shuffledDeck);
        // dealWar();
        // API.makeDeck().then((res) => {
        //     console.log(res.data);
        //     setShuffledDeck(res.data.cards);
        // }); 
    };

    const shuffleDeck = (deck) => {
        
        let currentIndex = deck.length, tempValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = tempValue;
        }
        return deck;
    };

    const dealWar = () => {
        //just setting the halfway point of the deck
        let halfwayThruDeck = Math.floor(shuffledDeck.length / 2);
        //doing the real job
        let firstHalfDeck = shuffledDeck.slice(0, halfwayThruDeck);
        let secondHalfDeck = shuffledDeck.slice(halfwayThruDeck, shuffledDeck.length);
        setUserCards(firstHalfDeck);
        console.log(userCards);
        setComputerCards(secondHalfDeck);
        console.log(computerCards);
    };

    //Initiates game
    const startGameWar = (e) => {
        getDeck(e);
        dealWar();
    };





    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12">
                    <button className="startBtn" onClick={startGameWar}>Start Game</button>
                    {/* <button className="takeHandBtn" onClick={drawHands}>Get Hand</button> */}

                </div>
            </div>
            

            <div className="row opponentRow">
                <div className="col-6 opponentDeck">
                    <img className="cardImage" src={cardBack} />
                </div>
                <div className="col-6 opponentDrawnCard">
                    <img src="#" alt="computer_drawn_card" />
                </div>
            </div>
            
            <div className="row userRow">
                
                <div className="col-6 userDeck">
                    <img className="cardImage" src={cardBack} />

                </div>
                <div className="col-6 userDrawnCard">
                    {/* <img src={userCards[0].image} alt="user_drawn_card" /> */}
                    <img className="cardImage" src={userCardImg} />                    

                </div>

            </div>
        </div>
    );
};

export default CardTable;