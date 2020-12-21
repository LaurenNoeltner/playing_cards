import React from 'react';
import Header from "./Header";
import API from "./utils/API";
import "../App.css";

const CardTable = () => {
    // const [] = useState({});
    const testAPI = (e) => {
        e.preventDefault();
        API.getShuffledDeck().then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div>
            <Header />
            <div className="row opponentRow">
                <div className="col-12">
                    Opponent Deck
                </div>
                <button className="apiTest" onClick={testAPI}>Test Me</button>
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
                
                <div className="col-6 userDeck">
                    User Deck
                </div>

            </div>
        </div>
    );
};

export default CardTable;