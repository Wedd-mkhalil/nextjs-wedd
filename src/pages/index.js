import Head from "next/head";
import Link from "next/link";
import { wedding } from "../data/wedding";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Wedding</title>
      </Head>
      <section className="hero">
        <h1>We&apos;re Getting Married</h1>
        <p className="subtitle">We can&apos;t wait to celebrate with you</p>
      </section>

      <section className="details">
        <div className="details-card">
          <h2>Save the date</h2>
          <p className="date">{wedding.date}</p>
          <p className="time">{wedding.time}</p>
          <p className="venue">{wedding.venueName}</p>
          <p className="address">
            {wedding.fullAddress}
          </p>
        </div>
      </section>

      <div className="cta-wrap">
        <Link href="/rsvp" className="btn">
          RSVP
        </Link>
      </div>
    </>
  );
}
