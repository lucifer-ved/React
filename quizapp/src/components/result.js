import React from 'react';

const Result = ({score, playAgain }) =>{
    return(
    <div className="result-container">
        <div className='score'>You scored {score} / 5 correct answers !</div>
        <button className="play-again-button" onClick={playAgain}> Play Again!</button>
    </div>
    )
}

export default Result;