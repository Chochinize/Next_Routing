import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
    <title> Martins List | AND FRIENDS</title>
    <meta name='keywords' content='ninjas'/>
    </Head>
    <div >
      <h1 className={styles.title}>My Name</h1>
      <p className={styles.text}>Some dummy text</p>

      <Link href='/martinpage'><a className={styles.btn}>See All of the Listing</a></Link>
    </div>
    </>
  )
}
