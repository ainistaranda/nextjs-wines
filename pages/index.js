import Head from "next/head";
import Image from "next/image";
// import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ wines }) {
  // const [data, setData] = useState(wines);
  // useEffect(() => {
  //   fetch("https://api.sampleapis.com/wines/reds")
  //     .then((response) => response.json())
  //     .then((wines) => setData(wines))
  //     .catch((err) => console.error(err));
  //   console.log(data);
  // }, []);

// console.log(wines)

  return (
    <div className={styles.container}>
      <Head>
        <title>Ainis' Next.js app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>Spicy Grape Juice</p>

        <div className={styles.grid}>
          {wines.map((wine) => (
            <a
              key={wine.id}
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <img src={wine.image}></img>
              <h2>{wine.wine}</h2>
              <p>{wine.location}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://api.sampleapis.com/wines/reds");
  const wines = await response.json()

  return {
    props: { wines }
  }
}
