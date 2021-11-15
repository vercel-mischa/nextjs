import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Common_Problems() {
  return (
      <main className={styles.main}>
        <div className={styles.grid} style={{justifyContent: 'left'}}>
          <h3>What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</h3>
              
            <p>
              Based on the top <a href="https://github.com/vercel/vercel/discussions/categories/help?discussions_q=sort%3Atop+category%3AHelp">GitHub Help-categorized Discussions</a>, <a href="https://github.com/vercel/vercel/issues?q=is%3Aissue+sort%3Acomments-desc+">GitHub Issues</a>, <a href="https://vercel.com/support">Vercel Support articles</a>, and other public discussions such as <a href="https://stackoverflow.com/questions/tagged/vercel?tab=Votes">Stack Overflow</a> the common problems a Vercel customer can encounter may differ depending on the type of functional change that the customer is attempting to drive at their point of adoption and usage of Vercel.<br />
              One example via the <a href="https://vercel.com/support">Vercel Support articles</a> page, a potential (free) or new customer looking to onboard onto Vercel may be worried about downtime when switching over their DNS to Vercel&apos;s Nameservers.  When I previously worked at a company where DNS questions would frequently arise via Support, this was a symptom of an instance where the customer onboarding experience could be improved whether it is through the Vercel UX itself or through Proof of Concept conversations.  A short-term resolution here, if we are anticipating a non-downward trend of volume of these inquiries, would be to spend some initial time upfront to create a ticket macro response or text-expander script that fully addresses the customer&apos;s concerns with guided steps to perform this change while mitigating downtime, linking to the aforementioned <a href="https://vercel.com/support/articles/zero-downtime-migration-for-dns">Vercel Support article</a>.  A long-term resolution here would be to include this as part of the new user experience when a user creates an account on Vercel and begins using it, as well as including this as part of early POC conversations with potential customers.  Another long-term resolution that may completment the previous recommendation would be to introduce auto-suggested Vercel Support articles when a customer is writing out a ticket request for Support.<br />
            </p>
          </div>
        </main>
      )
}
