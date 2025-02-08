import React from "react";
import Que from "./Que";
import { useState } from "react";
import Quizcss from "./Quiz.css"
function Quiz() {

    const questions = [
        {
            question: "what is react",
            Options: ["css", "js", "php", "react libray"],
            answer: "react libary"
        }
        ,


        {
            question: "what is 2+2",
            Options: ["3", "4", "56", "6"],
            answer: "4"

        },
        {
            question: "what is 3+2",
            Options: ["5", "4", "56", "6"],
            answer: "5"

        }
    ]
    // use hook krungi q ki meko meri value ko update krna h ....hooks ka use

    const [currentQuestionindex, setcurrentQuestionindex] = useState(0);
    const [currentAnswer, setcurrentAnswer] = useState(null);
    const [score,setscore] = useState(0);
    const handleclick = (Options) => {
        setcurrentAnswer(Options)
        if(Options === questions[currentQuestionindex].answer){
            setscore(score+3)
        }
    }
    const handleNextQuestion = () => {
        setcurrentQuestionindex(currentQuestionindex + 1);
        setcurrentAnswer(null);
       
    }


    return (
        <div> {
            currentQuestionindex < questions.length ? <div>
                <Que question={questions[currentQuestionindex].question}
                    Options={questions[currentQuestionindex].Options} handleclick={handleclick} currentAnswer={currentAnswer} />

                <button disabled={currentAnswer === null} className={currentAnswer === null ? "button-disable" : "button"} onClick={handleNextQuestion}>Next Question</button>
            </div> :<div>your score is {score}</div>
        }

        </div>
    )
}

export default Quiz;