import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);

  //Runs on load
  useEffect(() => {
    axios.get('/api/read')
    .then(res => {
      for(let i = 0; i < res.data.length; i++) {
        const today = new Date().toDateString();
        const entryDate = new Date(res.data[i].lastUpdated)
        console.log(entryDate.toDateString());
        //Goes through the array and sets the states.
        if(res.data[i].meal === 'Breakfast') {
          if(today !== entryDate) {
            setBreakfast(false);
          } else {
            setBreakfast(res.data[i].fed);
          }
        } else if(res.data[i].meal === 'Dinner') {
          if(today !== entryDate) {
            setDinner(false);
          } else {
            setDinner(res.data[i].fed);
          }
        }
      }
    })
  }, [])

  const handleBreakfast = () => {
    setBreakfast(!breakfast);
    axios.post('/api/update?meal=Breakfast')
    .then(res => {
      console.log(res);
    })
  }

  const handleDinner = () => {
    setDinner(!dinner);
    axios.post('/api/update?meal=Dinner')
    .then(res => {
      console.log(res);
    })
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
