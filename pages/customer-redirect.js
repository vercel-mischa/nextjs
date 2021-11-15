import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Customer_Redirect() {
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <h3>A customer writes in to the Helpdesk asking &quot;How do I do a redirect from /hello-vercel to https://vercel.com?&quot;</h3>
            <p><i>In a couple of paragraphs, how do you respond?</i></p>
            <p>Hello &lt;CUSTOMER_NAME&gt;,</p><br />
            <p>Thank you for writing in to Vercel Support!</p><br />
            <p>In order to create a redirect from <code>/hello-vercel</code> to <code>https://vercel.com</code>, there are two options.  
            1) If you&apos;re using a Next.js project, you can follow the according <a href="https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#next.js-redirects">documentation</a> and edit your <code>next.config.js</code> configuration file in the root of your Vercel project to include the redirect such as the following code block:
              <pre>{`
                module.exports = {
                  async redirects() {
                    return [
                      {
                        source: '/hello-vercel',
                        destination: 'https://vercel.com',
                        permanent: true,
                      },
                    ]
                  },
                }
              `}</pre>
             2) For all other use-cases, you can follow the according <a href="https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#other-redirects">documentation</a> and edit your <code>vercel.json</code> configuration file in the root of your Vercel project to include the redirect such as the following code block:
                <pre>{`
                  {
                    &quot;redirects&quot;: [
                      { 
                        &quot;source&quot;: &quot;/hello-vercel&quot;,
                        &quot;destination&quot;: &quot;https://vercel.com&quot;, 
                        &quot;permanent&quot;: true
                      }
                    ]
                  }
                `}</pre>
             </p><br />
             <p>We appreciate you for writing into Vercel Support, &lt;CUSTOMER_NAME&gt;.  If you have any questions please don&apos;t hesitate to reach out!</p><br />
             <p>Best regards,</p><br />
             <p>Michael Lee</p>
             <p>Customer Success Engineer</p>
             <p>Vercel</p>
          </div>
        </main>
      )
}
