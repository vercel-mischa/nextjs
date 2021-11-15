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
        <h1 className={styles.title}>
          Welcome to Michael Lee&apos;s Customer Success Engineer Take Home Test (Vercel)!
        </h1>

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
