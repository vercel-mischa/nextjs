import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Customer_Custom_Domain() {
  return (
      <main className={styles.main}>
        <div className={styles.grid} style={{justifyContent: 'left'}}>
          <h3>A customer writes in to the Helpdesk stating &quot;I have a custom domain which I purchased at GoDaddy and I want to use it on my project&quot;. In a couple of paragraphs, how do you respond?</h3>
              
            <p>Hello &lt;CUSTOMER_NAME&gt;,<br /><br />
              Thank you for writing in to Vercel Support!<br />
            </p>
            <p>In order to use a custom domain from a third-party registrar for your Vercel project, you can <a href="https://vercel.com/docs/concepts/projects/custom-domains#adding-a-domain">configure this in various ways via your Vercel dashboard</a> that best meets your functional use-case.</p>
            <ol>
              <li>
                <b>Selecting Your Project</b> - On the <a href="https://vercel.com/dashboard)">dashboard</a>, pick the project to which you would like to assign your domain.
              </li>
              <li>
                <b>Navigating to Domain Settings</b> - Once you have selected the project of your choice, click on the Settings tab.  Then, select the Domains menu item.
              </li>
              <li>
                <b>Entering Your Chosen Domain</b> - From the Domains page, enter the domain you wish to add to the project. 
              </li>
              <li>
                <b>Configuring the Domain</b> - Once the domain has been added, you will be presented with different methods for configuring it, depending on whether it is an <i>apex domain</i> (e.g. example.com) or <i>subdomain</i> (e.g. docs.example.com).

                  <i>Apex domains</i> can be configured with a <i>A</i> record, while <i>subdomains</i> can be configured with a <i>CNAME</i> record. Both domain types can also be configured using the <i>Nameservers</i> method.
                  <ul>
                    <li><b>Apex Domains</b> - You can configure <i><a href="https://vercel.com/docs/concepts/projects/custom-domains">apex domains</a></i> either with a <i>A</i> record or through the <i>Nameservers</i> method.</li>
                    <li><b>Subdomains</b> - You can configure <i><a href="https://vercel.com/docs/concepts/projects/custom-domains#subdomains">subdomains</a></i> either with a <i>CNAME</i> record or through the <i>Nameservers</i> method.</li>
                    <li><b>Vercel Nameservers</b> - When selecting the Nameservers method of configuration for either <i><a href="https://vercel.com/docs/concepts/projects/custom-domains#apex-domains">apex domains</a></i> or <i><a href="https://vercel.com/docs/concepts/projects/custom-domains#subdomains">subdomains</a></i>, you will be provided with the Vercel nameservers to copy and use with your registrar.</li>
                  </ul>
              </li>
              <li>
                <b>Domain Configured</b> - Once the domain has been configured, the card status will change to reflect this.
              </li>
            </ol>
            <p>We appreciate you for writing into Vercel Support, &lt;CUSTOMER_NAME&gt;.  If you have any questions please don&apos;t hesitate to reach out!</p><br />
            <p>
              Best regards,<br />
              Michael Lee<br />
              Customer Success Engineer<br />
              Vercel<br />
            </p>
          </div>
        </main>
      )
}
