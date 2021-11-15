import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Technical_Article() {
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <h3>Which technical article, guide or lightning talk left the biggest positive impression on you? Why?</h3>
            <p><i>Ideally, this article would not be associated Vercel or web development, by the way!</i></p>
            <p>The technical article and video pair that comes to mind that left the biggest positive impression on me is <a href="https://netflixtechblog.com/netflix-at-velocity-2015-linux-performance-tools-51964ddb81cf">Netflix at Velocity 2015: Linux Performance Tools</a>, which is paired with a two-part video recording from Brendan Gregg&apos;s talk at the O&apos;Reilly Velocity Conference in 2015, <a href="https://www.youtube.com/watch?v=FJW8nGV4jxY">here</a> and <a href="https://www.youtube.com/watch?v=zrr2nUln9Kk">here</a>.  The reason for why this left the biggest positive impression on me is because it fully detailed how to effectively enable yourself to become proficient in Linux performance engineering on a workflow which is on the same level as engineers at Netflix.  Utilizing the USE methodolgy of Linux performance troubleshooting and engineering, I&apos;ve been able to succeed in my roles historically, working in the Tech industry.</p>
          </div>
        </main>
      )
}
