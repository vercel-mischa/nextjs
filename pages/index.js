import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Lee - Customer Success Engineer Take Home Test</title>
        <meta name="description" content="Michael Lee - Customer Success Engineer Take Home Test (Vercel)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/favorite">
                <a>Favorite Tasks</a>
              </Link>
            </li>
            <li>
              <Link href="/least-favorite">
                <a>Least Favorite Tasks</a>
              </Link>
            </li>
            <li>
              <Link href="learn">
                <a>What do you want to learn, or do more of, at work?</a>
              </Link>
            </li>
            <li>
              <Link href="technical-article">
                <a>Which technical article, guide or lightning talk left the biggest positive impression on you? Why?</a>
              </Link>
            </li>
            <li>
              <Link href="vercel">
                <a>Go to vercel.com!</a>
              </Link>
            </li>
            <li>
              <Link href="customer-redirect">
                <a>How to apply a redirect with my Vercel project?</a>
              </Link>
            </li>
            <li>
              <Link href="customer-custom-domain">
                <a>How to apply a custom domain with my Vercel project?</a>
              </Link>
            </li>
            <li>
              <Link href="common-problems">
                <a>What is a common customer problem?</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
