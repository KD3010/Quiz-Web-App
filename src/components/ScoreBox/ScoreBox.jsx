import styles from './styles.module.css'

import React from 'react'

const ScoreBox = ({score}) => {
  return (
    <div className={styles.score_box}>
        <div className={styles.score_card}>
            <h1 className={styles.score}>{score} / 12</h1>
        </div>
    </div>
  )
}

export default ScoreBox