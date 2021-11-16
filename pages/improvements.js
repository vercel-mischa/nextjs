import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Improvements() {
  return (
      <main className={styles.main}>
        <div className={styles.grid} style={{justifyContent: 'left'}}>
          <h3>How could we improve or alter this familiarisation exercise?</h3>
              
            <p>
              <ul>
                <li>
                  Minor fix - On the redirect exercise, it links to a <a href="https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects">Support article section</a> that doesn&apos;t link directly to the correct section of the page for configuring redirects for <code>vercel.json</code>, using the link: <code>https://vercel.com/docs/configuration#project/redirects</code> rather than <code>https://vercel.com/docs/cli#project-configuration/redirects</code>
                </li>
                <li>
                  Overall, I enjoyed the broad variety of exercises included in the take home test.  The amount of tasks for gauging aptitude in various Customer Success Engineering responsibilities felt extremely effective. 
                </li>
              </ul>
            </p>
          </div>
        </main>
      )
}
