import React from 'react';
import Header from "./Header";

const CardTable = () => {
    return (
        <div>
            <Header />
            <div className="row opponentRow">
                <div className="col-12">
                    <div className="opponentCard">
                        opponent card
                    </div>
                </div> 
            </div>
            <div className="row middleRow">
                <div className="col-6 drawnCard">
                    Drawn card
                </div>
                <div className="col-6 cardDeck">
                    Card Deck
                </div>
            </div>
            <div className="row userRow">
                <div className="col-12">
                    User Card
                </div>
            </div>
        </div>
    );
};

export default CardTable;