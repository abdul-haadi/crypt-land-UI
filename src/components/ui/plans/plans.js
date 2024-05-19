import React from 'react'
import styles from './plans.module.css'
import check from './check.png'

const Plans = ({title, plan, time, desc, list, index}) => {
    console.log({title});
  return (
    <div className={styles.planSection}>
        <div className={styles.planTitle}>
            {title}
        </div>
        <div className={styles.planPricing}>
            <div className={styles.price}>
                {plan}
            </div>
            <div className={styles.time}>
                {time}
            </div>
        </div>
        <div className={styles.planDesc}>
            {desc}
        </div>
        <div className={styles.featureList}>
            {
                list.map((val, index) =>{
                    return <span key={index} className={styles.listItem}><img src={check}></img>{val}</span>
                })
            }
        </div>
        <div className={styles.planBtn}>
            <button>Learn More</button>
        </div>
        
    </div>
  )
}

export default Plans