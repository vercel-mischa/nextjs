import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Learn() {
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <h3>What do you want to learn, or do more of, at work?</h3>
            <p>I want to learn and do more engineering related work, whether that&apos;s developing and improving tools alongside the Engineering team, engineering solutions for customers, or creating new tools in order to improve the experience not only for Customer Success, but to overall improve the experience for all involved stakeholders in the customer experience.  Creating tooling that enables automation and self-service workflows and/or reducing the amount of manual work or one-off scripting greatly improves the day to day experience for all stakeholders involved in the customer experience, allowing more value to be added from the overhead that was freed up due to the success of the engineering work completed.</p>
          </div>
        </main>
      )
}
