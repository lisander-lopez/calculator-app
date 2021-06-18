import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

import { Header } from '../components/header';
import { Calculator}  from '../components/calculator';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator App</title>
        <meta name="description" content="Calculator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header /> 
      <Calculator />

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded with ❤️ by <a href="https://lisanderlopez.com">Lisander Lopez</a>.
      </div>
        
    </div>
  )
}
