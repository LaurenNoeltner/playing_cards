import React, { useState } from 'react';
import Header from "./Header";
import API from "./utils/API";
import "../App.css";
import cardBack from "./utils/cardBack.jpg";

const CardTable = () => {
    const [shuffledDeck, setShuffledDeck] = useState([]);
    const [userCards, setUserCards] = useState([]);
    const [computerCards, setComputerCards] = useState([]);

    const getDeck = (e) => {
        e.preventDefault();
        API.makeDeck().then((res) => {
            console.log(res.data);
            setShuffledDeck(res.data.cards);
        }); 

    };

    const drawHands = (e) => {
        e.preventDefault();
        API.getComputerHand().then((res) => {
            setComputerCards(res.data.cards);
            console.log(res.data);

        });
        API.getUserHand().then((res) => {
            setUserCards(res.data.cards);
            console.log(res.data);
        });
    }

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
                    <button className="takeHandBtn" onClick={drawHands}>Get Hand</button>

                </div>
            </div>
            

            <div className="row">
                <div className="col-12 opponentDeck">
                    <img className="cardBackImage" src={cardBack} />
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
                    user card                    

                </div>
            </div>
            <div className="row userRow">
                
                <div className="col-12 userDeck">
                <img className="cardBackImage" src={cardBack} />

                </div>

            </div>
        </div>
    );
};

export default CardTable;