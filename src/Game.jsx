import "./Game.css"
import { useState } from "react";
import Result from "./Result";

function Game({ questions, correct, setCorrect, step, setStep }) {
    console.log(questions);
    
    const percentage = Math.round((step / questions.length) * 100);
    
    function onClickVariant(index) {
        console.log("step:", step, "index:", index);
        if (index === questions[step].correct) {
            setCorrect(correct + 1);
        }
        setStep(step + 1);
    }

    return (
        <div className="Game">
            {step < questions.length ? (
                <>
                    <div className="progress" style={{ width: '50%', backgroundColor: 'white' }}>
                        <div className="progress__inner" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <h1>{questions[step].title}</h1>
                    <ul>
                        {questions[step].variants.map((variant, index) => (
                            <li key={index} onClick={() => onClickVariant(index)}>
                                {variant}
                            </li>
                        ))}
                    </ul>
                </>
            ) : <Result correct={correct} questions={questions} />}
        </div>
    );
}

export default Game;