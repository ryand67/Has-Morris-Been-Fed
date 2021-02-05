import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);

  const handleBreakfast = () => {
    setBreakfast(!breakfast);
  }

  const handleDinner = () => {
    setDinner(!dinner);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
