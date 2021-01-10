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
    const [userCardImg, setUserCardImg] = useState("");
    const [computerCardImg, setComputerCardImg] = useState("");
    const [userPlayedCard, setUserPlayedCard] = useState([]);
    const [computerPlayedCard, setComputerPlayedCard] = useState([]);
    const [userPlayedValue, setUserPlayedValue] = useState(Number);
    const [computerPlayedValue, setComputerPlayedValue] = useState(Number);
    const [resultText, setResultText] = useState("");

    // useEffect(() => {
    //     handleNewDeck();
    //     shuffleDeck();
    //     dealWar();
    // }, []);


    //establish connection to my JSON file in /public folder
    const getDeck = () => {
        
        fetch("./data.json").then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data, "first deck - unshuffled");
            const newDeck = data;
            // localStorage.setItem(data, JSON.stringify(data));
            // setDeck(JSON.parse(localStorage.getItem(data)));
            setDeck(newDeck);
            // console.log(deck, "deck log");
            
        }).catch(err => {
            console.log(err, "couldn't get deck");
        });
    };

    const handleNewDeck = (e) => {
        e.preventDefault();
        getDeck();
        console.log(deck, "deck");
    };
    //shuffle function for any array of cards
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
    
    //handles the whole shuffle
    const shuffleDeck = (e) => {
        e.preventDefault();
        const randomDeck = randomize(deck);
        setShuffledDeck(randomDeck);
        console.log(randomDeck, "randomDeck");
        // console.log(shuffledDeck, "shuffledDeck");
    };

    //split deck in 2 and assign each player their cards
    const dealWar = (e) => {
        e.preventDefault();
        //setting the halfway point of the deck
        let halfwayThruDeck = Math.floor(shuffledDeck.length / 2);
        //doing the real job
        let firstHalfDeck = shuffledDeck.slice(0, halfwayThruDeck);
        let secondHalfDeck = shuffledDeck.slice(halfwayThruDeck, shuffledDeck.length);
        setUserCards(firstHalfDeck);
        // console.log(userCards, "userCards");
        setComputerCards(secondHalfDeck);
        // console.log(computerCards, "computerCards");
    };

    const showFirstCardImg = () => {
        setUserCardImg(userCards[0].image);
        setComputerCardImg(computerCards[0].image);
    };
    const handleComparison = () => {
        if (userPlayedValue > computerPlayedValue) {
            setResultText("You Win!");
        } else if (userPlayedValue < computerPlayedValue) {
            setResultText("You Lose!");
        } else {
            setResultText("Draw!");
        };
    };

    const flipCard = () => {
        setUserPlayedCard(userCards[0]);
        console.log(userCards[0]);
        setComputerPlayedCard(computerCards[0]);
        console.log(computerCards[0]);
        setComputerPlayedValue(computerCards[0].value);
        setUserPlayedValue(userCards[0].value);
        showFirstCardImg();
        handleComparison();
    }



    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12">
                    <button className="startBtn" onClick={handleNewDeck}>Get Deck</button>
                    <button className="startBtn" onClick={shuffleDeck}>Shuffle</button>
                    <button className="startBtn" onClick={dealWar}>Deal Cards</button>
                    {/* <button className="startBtn" onClick={startGameWar}>Start Game</button>
                    <button className="startBtn" onClick={startGameWar}>Start Game</button> */}
                    {/* <button className="takeHandBtn" onClick={drawHands}>Get Hand</button> */}

                </div>
            </div>
            

            <div className="row opponentRow">
                <div className="col-6 opponentDeck">
                    <p className="computerInfo">Cards in their hand: {computerCards.length}</p>
                    <img alt="card_piles" className="cardImage" src={cardBack} />
                </div>
                <div className="col-6 opponentDrawnCard">
                    <p className="drawnComputerCard">Value: {computerPlayedValue}</p>
                    <img className="cardImage" alt="computer_drawn_card" src={computerCardImg} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p id="resultText">{resultText}</p>
                </div>
            </div>
            
            <div className="row userRow">
                
                <div className="col-6 userDeck">
                    
                    <img alt="card_piles" className="cardImage" src={cardBack} onClick={flipCard} />
                    <p className="userInfo"> Cards in my hand: {userCards.length}</p>
                </div>
                <div className="col-6 userDrawnCard">
                    {/* <img src={userCards[0].image} alt="user_drawn_card" /> */}
                    <img className="cardImage" alt="user_drawn_card" src={userCardImg} />                    
                    <p className="drawnUserCard">Value: {userPlayedValue}</p>
                </div>

            </div>
        </div>
    );
};

export default CardTable;