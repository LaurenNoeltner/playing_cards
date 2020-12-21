import React, { useState } from 'react';
import Header from "./Header";
import API from "./utils/API";
import "../App.css";

const CardTable = () => {
    const [deckID, setDeckID] = useState("");

    const getDeck = (e) => {
        e.preventDefault();
        API.getShuffledDeck().then((res) => {
            console.log(res.data);
            console.log(res.data.deck_id);
        }); 
    }
    const dealHand = (e) => {
        e.preventDefault();
        API.getComputerHand().then((res) => {
            console.log(res.data);
        });
        API.getUserHand().then((res) => {
            console.log(res.data);
        });
    }

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12">
                    <button className="startBtn" onClick={getDeck}>Start Game</button>
                </div>
            </div>
            

            <div className="row">
                <div className="col-12 opponentDeck" onClick={dealHand}>
                    Opponent Deck
                </div>
            </div>
            <div className="row middleRow">
                <div className="col-4 opponentDrawnCard">
                    Opponent's Drawn card
                </div>
                <div className="col-4 somethingBlock">
                    Misc.
                </div>
                <div className="col-4 userDrawnCard">
                    User's Drawn Card
                </div>
            </div>
            <div className="row userRow">
                
                <div className="col-12 userDeck">
                    User Deck
                </div>

            </div>
        </div>
    );
};

export default CardTable;