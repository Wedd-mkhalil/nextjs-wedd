import { useState } from "react";
import Head from "next/head";
import { useGuest } from "../context/GuestContext";

export default function RSVP() {
  const guest = useGuest();
  const [submitted, setSubmitted] = useState(false);
  const [coming, setComing] = useState("");
  const [plusOne, setPlusOne] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // No persistence — API hook-in later
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rsvp-page">
        <div className="thank-you">
          <h2>Thank you!</h2>
          <p>We&apos;ve received your response and can&apos;t wait to see you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rsvp-page">
      <Head>
        <title>RSVP — Our Wedding</title>
      </Head>
      <h1>RSVP</h1>
      <p className="guest-greeting">Hi {guest.name}, will you join us?</p>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Are you coming?</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="coming"
                value="yes"
                checked={coming === "yes"}
                onChange={() => setComing("yes")}
              />
              Yes, I&apos;ll be there
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="coming"
                value="no"
                checked={coming === "no"}
                onChange={() => setComing("no")}
              />
              Sorry, I can&apos;t make it
            </label>
          </div>
        </div>

        {coming === "yes" && (
          <div className="form-group">
            <label>Will you bring a plus one?</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="plusOne"
                  value="yes"
                  checked={plusOne === "yes"}
                  onChange={() => setPlusOne("yes")}
                />
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="plusOne"
                  value="no"
                  checked={plusOne === "no"}
                  onChange={() => setPlusOne("no")}
                />
                No
              </label>
            </div>
          </div>
        )}

        <button type="submit" className="btn" disabled={!coming}>
          Submit
        </button>
      </form>
    </div>
  );
}
