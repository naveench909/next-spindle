import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Feed from './feeds'



export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Spindle</title>
      </Head>
      <Feed className={styles.feedContainer} />
    </div>
  )
}
