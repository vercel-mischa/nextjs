import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Favorite() {
  return (
    <main className={styles.main}>
        <div className={styles.grid}>
          <h3>Least Favorite Tasks</h3>
              <ol>
                <li>Respond to 50+ support requests via email every day</li>
                  <p>The number itself is a non-issue, the ideal here would be to reduce the number of trending support requests through better public facing documentation/content, succesful customer onboardings and regular syncs, proactive incident management practices, transparent roadmaps/changelogs/etc., and other ways of ensuring that customers are able to be self sufficient and setup for self success.</p>
                <li>Work with engineering teams during incidents and provide updates to internal and external stakeholders</li>
                  <p>This task item in and of itself is not a huge issue given that all involved incident stakeholders are in agreement for how incidents are managed.  Without operational best practices in play, such as on-call and backup rotations, contingency plans, approved status update communications (internal and external), etc. a small service incident can become disastrous for customers due to the incident being mismanaged.</p>
                <li>Create video tutorials to help teach users a specific feature or use case</li>
                  <p>Videos are great for product demos but can cause confusion if the observed in the video does not match actual customer interaction with the product.  For products in active development, it can be challenging to create full-length videos that depict exactly how a customer would use a specific feature for their use-case the more complex or the more steps a feature requires.  The videos themselves are generally not difficult to create, but in my experience depending on the situation that calls for it, has limited value add.  This isn&apos;t to say that video content is completely moot, because when done correctly for a use-case that is a right fit, video content can have plenty of mileage.</p>
                <li>Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites</li>
                  <p>While community engagement can be good for brand visibility and transparency, generally is not the most effective time spent if the ultimate end-goal is customer acquisition, account upselling/expansion, or customer success in general.  Social media engagement can be good to spread news of approved upcoming changes/releases of product features/functionality, so this task item is not completely ineffective.</p>
                <li>Help resolve billing issues for customers</li>
                  <p>Historically, Customer Success/Support in my experience hasn&apos;t handled billing issues and while I don&apos;t mind raising billing issues with the Accounts or Billing Support specialized team, outside of ensuring the appropriate service license/entitlements are in place, I would generally forward this with the team that is specialized in handling billing related issues.  Customer Success, while not completely unrelated from supporting billing issues, I would emphasize the scope of Customer Success to be on helping the customer become successful with their usage of Vercel&apos;s product offerings.</p>
               </ol>
          </div>
        </main>
     )
}
