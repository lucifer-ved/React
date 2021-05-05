import React, {useState } from 'react';

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="quextionbox-container">
            <div className="question">{question}</div>
            { answer.map((answer,id) => (
                <button key={id} className="answer-button" onClick={()=>{
                    setAnswer([answer]);
                    selected(answer);
                }}>
                    {answer}
                </button>
            ))}
        </div>
    )
}

export default QuestionBox;