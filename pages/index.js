import Head from 'next/head'
import styles from '../styles/index.module.scss'

import { Header } from '../components/header';
import { Calculator}  from '../components/calculator';
import { useState, useContext } from 'react';
import { ThemeContext } from '../stores/ThemeStore';
import InputStore from '../stores/InputStore';

export default function Home() {
  const [themeState, themeDispatch] = useContext(ThemeContext);

  return (
    <div className={styles.app_wrapper + " " + styles["theme_" + themeState.theme]}>
      <Head>
        <title>Calculator App</title>
        <meta name="description" content="Calculator App" />
      </Head>
      
      <div className={styles.container}>
        <InputStore>
          <Header /> 
          <Calculator />
        </InputStore>
      </div>

      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded with ❤️ by <a href="https://lisanderlopez.com">Lisander Lopez</a>.
      </div>
    </div>
  )
}
