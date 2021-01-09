import React, { useState, useEffect } from 'react';
import Header from "./Header";
// import API from "./utils/CardDeck";
import "../App.css";
import cardBack from "./utils/cardBack.jpg";

const CardTable = () => {
    const [deck, setDeck] = useState([]);
    const [shuffledDeck, setShuffledDeck] = useState([]);
    
    const [userCards, setUserCards] = useState([]);
    const [computerCards, setComputerCards] = useState([]);
    // const [userCardImg, setUserCardImg] = useState("");
    // const [computerCardImg, setComputerCardImg] = useState("");
    // const [userPlayedCard, setUserPlayedCard] = useState({});
    // const [computerPlayedCard, setComputerPlayedCard] = useState([]);

    // useEffect(() => {
    //     getDeck();
    // }, []);


    //establish connection to my JSON file in /public folder
    const getDeck = () => {

        fetch("./data.json").then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data, "first deck - unshuffled");
            // localStorage.setItem(data, JSON.stringify(data));
            // setDeck(JSON.parse(localStorage.getItem(data)));
            setDeck(data);
            // console.log(deck, "deck log");
            
        }).then(() => {
            console.log(deck, "deck log");
        }).catch(err => {
            console.log(err, "couldn't get deck");
        });
    };

    const randomize = (pile) => {
        
        let currentIndex = pile.length, tempValue, randomIndex;
        
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = pile[currentIndex];
            pile[currentIndex] = pile[randomIndex];
            pile[randomIndex] = tempValue;
        }
        return pile;
        
    };
    

    const shuffleDeck = () => {
        randomize(deck);
        setShuffledDeck(deck);
        console.log(shuffledDeck);
    };


    
   

    

    const dealWar = () => {
        //setting the halfway point of the deck
        let halfwayThruDeck = Math.floor(shuffledDeck.length / 2);
        //doing the real job
        let firstHalfDeck = shuffledDeck.slice(0, halfwayThruDeck);
        let secondHalfDeck = shuffledDeck.slice(halfwayThruDeck, shuffledDeck.length);
        setUserCards(firstHalfDeck);
        console.log(userCards);
        setComputerCards(secondHalfDeck);
        console.log(computerCards);
    };

    // const flipCard = () => {
    //     setUserPlayedCard(userCards[0]);
    //     console.log(userCards[0]);
    //     setComputerPlayedCard(computerCards[0]);
    //     console.log(computerPlayedCard);
    // }



    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12">
                    <button className="startBtn" onClick={getDeck}>Get Deck</button>
                    <button className="startBtn" onClick={shuffleDeck}>Shuffle</button>
                    <button className="startBtn" onClick={dealWar}>Deal Cards</button>
                    {/* <button className="startBtn" onClick={startGameWar}>Start Game</button>
                    <button className="startBtn" onClick={startGameWar}>Start Game</button> */}
                    {/* <button className="takeHandBtn" onClick={drawHands}>Get Hand</button> */}

                </div>
            </div>
            

            <div className="row opponentRow">
                <div className="col-6 opponentDeck">
                    <img alt="card_piles" className="cardImage" src={cardBack} />
                </div>
                <div className="col-6 opponentDrawnCard">
                    <img className="cardImage" alt="computer_drawn_card" src="#" />
                </div>
            </div>
            
            <div className="row userRow">
                
                <div className="col-6 userDeck">
                    <img alt="card_piles" className="cardImage" src={cardBack} />

                </div>
                <div className="col-6 userDrawnCard">
                    {/* <img src={userCards[0].image} alt="user_drawn_card" /> */}
                    <img className="cardImage" alt="user_drawn_card" src="#" />                    

                </div>

            </div>
        </div>
    );
};

export default CardTable;