"use client";

import SiteShell, { SITE_CSS, SiteFont } from "../components/SiteShell";

const CONTACT_CSS = `
  .page-hero {
    padding: clamp(5rem, 10vw, 9rem) 0 clamp(3rem, 6vw, 5rem);
    background: var(--ink);
    color: var(--pearl-white);
    text-align: center;
  }
  .page-hero .eyebrow { color: var(--warm-sand); }
  .page-hero .display { font-size: clamp(4rem, 9vw, 8.5rem); }
  .page-hero p {
    max-width: 560px;
    margin: 2rem auto 0;
    color: var(--light-sand);
    font-size: 1.06rem;
  }

  .contact-section { padding: clamp(5rem, 10vw, 9rem) 0 5rem; background: var(--golden-cream); }
  .contact-top { display: grid; grid-template-columns: 1.4fr .6fr; gap: 5rem; align-items: end; }
  .contact-section .display { font-size: clamp(3.6rem, 8vw, 8rem); }
  .contact-details { display: grid; gap: 1rem; }
  .contact-details a, .contact-details address { font-style: normal; font-size: 1rem; }
  .contact-details strong { display: block; margin-bottom: .18rem; color: var(--muted); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; }

  .contact-map {
    width: 100%;
    aspect-ratio: 16/6;
    border: 0;
    display: block;
    filter: grayscale(20%) contrast(95%);
  }

  .contact-form-section {
    padding: clamp(5rem, 9vw, 8rem) 0;
    background: var(--pale-sand);
  }
  .contact-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
  }
  .form-intro .display { font-size: clamp(2.8rem, 5.5vw, 5rem); margin-bottom: 1.5rem; }
  .form-intro p { color: var(--muted); max-width: 420px; }

  .contact-form { display: grid; gap: 1.25rem; }
  .form-group { display: grid; gap: .45rem; }
  .form-label { font-size: .76rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
  .form-input, .form-textarea, .form-select {
    width: 100%;
    padding: .85rem 1rem;
    border: 1px solid var(--line);
    border-radius: 3px;
    background: var(--pearl-white);
    font: inherit;
    font-size: .96rem;
    color: var(--ink);
    outline: none;
    transition: border-color .25s ease;
    appearance: none;
  }
  .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: var(--warm-sand); }
  .form-textarea { resize: vertical; min-height: 130px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-submit {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    padding: 1rem 2rem;
    background: var(--ink);
    color: var(--pearl-white);
    border: 1px solid var(--ink);
    border-radius: 3px;
    font: inherit;
    font-size: .82rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background .25s, color .25s;
    margin-top: .5rem;
  }
  .form-submit:hover, .form-submit:focus-visible {
    background: transparent;
    color: var(--ink);
  }

  .visit-section { padding: clamp(5rem, 9vw, 8rem) 0; background: var(--ink); color: var(--pearl-white); }
  .visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .visit-section .display { font-size: clamp(3rem, 6vw, 5.8rem); margin-bottom: 2rem; }
  .visit-section p { color: var(--light-sand); max-width: 420px; }
  .visit-details { display: grid; gap: 2rem; margin-top: 3rem; }
  .visit-detail strong { display: block; color: var(--warm-sand); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; margin-bottom: .35rem; }
  .visit-detail a { font-style: normal; color: var(--pearl-white); font-size: 1.05rem; transition: color .2s; }
  .visit-detail a:hover { color: var(--golden-cream); }
  .visit-detail address { font-style: normal; color: var(--light-sand); font-size: 1.05rem; line-height: 1.6; }
  .visit-map-wrap {
    aspect-ratio: 4/5;
    overflow: hidden;
    border-radius: 4px;
  }
  .visit-map-wrap iframe { width: 100%; height: 100%; border: 0; filter: grayscale(30%); }

  @media (max-width: 860px) {
    .contact-top, .contact-form-grid, .visit-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .visit-map-wrap { aspect-ratio: 16/9; }
  }
`;

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name").value;
    const phone = form.querySelector("#phone").value;
    const interest = form.querySelector("#interest").value;
    const message = form.querySelector("#message").value;
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:hello@adloom.marketing?subject=Alder%20and%20Form%20Website%20Enquiry&body=${body}`;
  }

  return (
    <>
      <SiteFont />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + CONTACT_CSS }} />
      <SiteShell>
        {/* Hero */}
        <section className="page-hero">
          <div className="shell">
            <p className="eyebrow">Begin a custom project</p>
            <h1 className="display">Let's make it yours.</h1>
            <p>
              A furniture and interiors concept by Adloom. Start a conversation about the design or your next website.
            </p>
          </div>
        </section>

        {/* Contact details */}
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-top">
              <div className="reveal">
                <p className="eyebrow">Begin a custom project</p>
                <h2 className="display" id="contact-title">Let's make it yours.</h2>
              </div>
              <div className="contact-details reveal"><a href="mailto:hello@adloom.marketing"><strong>Email Adloom</strong>hello@adloom.marketing</a><a href="https://wa.me/918848085560" target="_blank" rel="noopener noreferrer"><strong>WhatsApp</strong>+91 88480 85560</a><p>Alder &amp; Form · A portfolio concept</p></div>
            </div>
          </div>
        </section>

        {/* Enquiry form */}
        <section className="contact-form-section" aria-labelledby="form-title">
          <div className="shell">
            <div className="contact-form-grid">
              <div className="form-intro reveal">
                <p className="eyebrow">Send an enquiry</p>
                <h2 className="display" id="form-title">Tell us about your project.</h2>
                <p>
                  Send enquiry opens your email app with a draft addressed to Adloom. This portfolio concept does not accept furniture orders or payments.
                </p>
              </div>
              <form className="contact-form reveal" onSubmit={handleSubmit} >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your name</label>
                    <input id="name" name="name" type="text" className="form-input" placeholder="Full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input id="phone" name="phone" type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="interest" className="form-label">I'm interested in</label>
                  <select id="interest" name="interest" className="form-select">
                    <option value="">Select a category</option>
                    <option value="living">Living room furniture</option>
                    <option value="dining">Dining table &amp; chairs</option>
                    <option value="bedroom">Bedroom furniture</option>
                    <option value="wardrobe">Wardrobes &amp; TV units</option>
                    <option value="interior">Complete interior design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your space, style preferences, and timeline…"
                  />
                </div>
                <button type="submit" className="form-submit" id="enquiry-submit">
                  Send enquiry →
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="visit-section"><div className="shell visit-grid"><div className="reveal"><p className="eyebrow">Designed with intention</p><h2 className="display">An idea for considered living.</h2><p>Alder &amp; Form explores the meeting of natural materials, thoughtful proportions and a quieter way of living. A furniture brand imagined as a complete digital experience.</p></div><img className="reveal" src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=85&w=1200" alt="Warm, considered living room interior" loading="lazy" /></div></section>
      </SiteShell>
    </>
  );
}
