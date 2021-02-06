import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);

  useEffect(() => {
    axios.get('/api/read')
    .then(res => {
      for(let i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        
      }
    })
  }, [])

  const handleBreakfast = () => {
    setBreakfast(!breakfast);
    
  }

  const handleDinner = () => {
    setDinner(!dinner);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Has Morris Been Fed?</title>
        <link rel="icon" href="/cat-solid.svg" />
      </Head>

      <div onClick={handleBreakfast} className={breakfast ? `${styles.green} ${styles.mealDiv}` : `${styles.red} ${styles.mealDiv}`}>
        <h1 className={styles.title}>BREAKFAST</h1>
      </div>
      <div onClick={handleDinner} className={dinner ? `${styles.green} ${styles.mealDiv}` : `${styles.red} ${styles.mealDiv}`}>
        <h1 className={styles.title}>DINNER</h1>
      </div>
    </div>
  )
}
