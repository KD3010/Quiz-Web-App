"use client"
import React from 'react'
import styles from './styles.module.css'
import {questions} from '../../statics'
import { useState } from 'react'

const QuestionBox = ({setScore, setTotalAttempted}) => {

    const [index, setIndex] = useState(0);

  return (
    <div className={styles.question_box}>

        <div className={styles.questionAnswer}>
            <span>
                <span className={styles.large_text}>Question {index + 1}</span>
                /{questions.length}. {questions[index].question}
            </span>
            <div className={styles.answerContainer}>
                {questions[index].answers.map(((answer, ind) => <button 
                className={styles.answerBtn}
                key={ind} 
                value={ind}
                onClick={(e) => {
                    if(e.target.value == questions[index].correctIndex) {
                        e.target.classList.remove(styles.unattempted)
                        e.target.classList?.remove(styles.wrong)
                        e.target.classList.add(styles.correct);
                        setScore(prevScore => prevScore + 1)
                    } else {
                        e.target.classList.remove(styles.unattempted)
                        e.target.classList.add(styles.wrong)
                    }
                    
                    setTimeout(() => {
                        setIndex(prevInd => prevInd + 1)
                        e.target.classList.add(styles.unattempted)
                        setTotalAttempted(prevNum => prevNum + 1)
                    }, 500)
                }}>
                    {ind+1}. &nbsp; {answer}</button>))}
            </div>
        </div>
    </div>
  )
}

export default QuestionBox