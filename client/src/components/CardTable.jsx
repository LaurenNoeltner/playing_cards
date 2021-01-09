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
        // console.log(deck);
        shuffleDeck(deck);
        setShuffledDeck(deck);
        console.log(shuffledDeck);
        dealWar();
        // API.makeDeck().then((res) => {
        //     console.log(res.data);
        //     setShuffledDeck(res.data.cards);
        // }); 
    };

    
    const dealWar = () => {
        //just setting the halfway point of the deck
        let halfwayThruDeck = Math.floor(shuffledDeck.length / 2);

        let firstHalfDeck = shuffledDeck.slice(0, halfwayThruDeck);
        let secondHalfDeck = shuffledDeck.slice(halfwayThruDeck, shuffledDeck.length);
        setUserCards(firstHalfDeck);
        console.log(userCards);
        setComputerCards(secondHalfDeck);
        console.log(computerCards);
    };



    // const drawHands = (e) => {
    //     e.preventDefault();
    //     // API.getComputerHand().then((res) => {
    //     //     setComputerCards(res.data);
    //     //     console.log(res.data);

    //     // });
    //     API.getUserHand().then((res) => {
    //         setUserCards(res.data.cards);
    //         console.log(res.data);
    //     });
    // }

    // const playCard = (e) => {
    //     e.preventDefault();
    //     API.
    // }



    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12">
                    <button className="startBtn" onClick={getDeck}>Start Game</button>
                    {/* <button className="takeHandBtn" onClick={drawHands}>Get Hand</button> */}

                </div>
            </div>
            

            <div className="row">
                <div className="col-12 opponentDeck">
                    <img className="cardImage" src={cardBack} />
                </div>
            </div>
            <div className="row middleRow">
                <div className="col-4 opponentDrawnCard">
                    <img src="#" alt="computer_drawn_card" />
                </div>
                <div className="col-4 somethingBlock">
                    {/* Misc. Middle Area*/}
                    
                        {/* <button className="drawBtn" onClick={}>Draw! </button> */}
                </div>
                <div className="col-4 userDrawnCard">
                    {/* <img src={userCards[0].image} alt="user_drawn_card" /> */}
                    <img className="cardImage" src={userCardImg} />                    

                </div>
            </div>
            <div className="row userRow">
                
                <div className="col-12 userDeck">
                <img className="cardImage" src={cardBack} />

                </div>

            </div>
        </div>
    );
};

export default CardTable;