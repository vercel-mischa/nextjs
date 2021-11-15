import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <h3>Favorite Tasks</h3>
          <ol>
            <li>Work with the product team to develop a new feature based on feedback from customers</li>
              <p>It is essential to understand that cultivating an agile feedback loop from the customer to Engineering, Product, and Design through Customer Success will help drive value to customers quicker.  This task item is at the core of customer success, ensuring that not only are we keeping up with product-market fit, but staying ahead of it.  This is exciting for me as someone who has worked with customers for the greater part of my 8 years working in Tech, to be able to help not only steer, but spearhead the direction in which such technologies are driving toward.</p>
            <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
              <p>Much related to the previous bullet point, one of the most important reasons for why a customer would write in is because they care enough about the product they are using to give feedback on it.  While many corporations see Customer Success/Support as a cost center, what they fail to understand that irreplaceable value can be driven from customer interactions.  As users of the product, customers inherently already have a stakehold in it and naturally they would want their experience with the product to become a greater value-add.  This serves an opportunity to involve customers who are a right fit to become partners in the conversation to improve our product.</p>
            <li>Work with people to figure out if Vercel is suitable for their use case</li>
              <p>Working with potential customers to understand product fit is not only an opportunity for customer acquisition through Proof of Concepts, and determining whether or not Vercel as a product in its current offering will set them up for success, but also an opportunity to better understand opportunities for product growth and development roadmap prioritization as well for Engineering, Product, and Design.  A failed POC is not necessarily a negative thing in working with potential customers, as it avoids the likelihood of churn but can also opens a potential opportunity to succeed in the future as the product offering grows.  Setting potential customers up for success allows Vercel to grow with the customer as a partner and include customers who are a right fit, into product conversations that make sense for it.</p>
            <li>Write and maintain support articles and docs pages</li>
              <p>Technical writing is crucial not only public facing, but internally as well.  Without good, up-to-date documentation, that is written in a way meant for the audience to digest it, it is much easier for POCs, customers, and other stakeholders to get lost in using the product.  Setting up good technical writing guidelines and pipelines will allow involved stakeholders to not only become more self-sufficient, but also give an opportunity to contribute towards improving articles and documentation.</p>
            <li>Help train and onboard new support teammates</li>
              <p>Training and onboarding new support teammates through developing high quality training material, onboarding curriculum, and individual development plans will not only allow for the company to scale alongside product and customer growth by ensuring high quality customer engagement and the opportunity to succeed in driving value back to customers, but also setting up new teammates to succeed and grow within the company as well.  Onboarding new teammates is one of the most crucial periods in an employee&apos;s tenure at a company, and ensuring that we&apos;re showing them the same passion in their onboarding and training experience that we expect to see in them after will create the kind of atmosphere that Vercel&apos;s values are built on.</p>
          </ol>
        </div>
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
