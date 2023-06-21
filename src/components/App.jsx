'use client'
import styles from '../app/page.module.css'
import React from 'react'
import { useState } from 'react'
import QuestionBox from './QuestionBox/QuestionBox'
import ScoreBox from './ScoreBox/ScoreBox'

const App = () => {

  const [totalAttempted, setTotalAttempted] = useState(0)
  const [score, setScore] = useState(0);

  if(totalAttempted < 12) return (
    <div className={styles.main}>
        <QuestionBox setScore={setScore} setTotalAttempted={setTotalAttempted}/>
        <ScoreBox score={score} />
    </div>
  )

  if(totalAttempted >= 12) return (
    <div className={styles.main}>
      <h1>Thank You for attempting the quiz</h1>
      <h2>Your score is {`${score}`}</h2>
    </div>
  )
}

export default App