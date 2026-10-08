"use client";

import SiteShell, { SITE_CSS, SiteFont } from "../components/SiteShell";

const CUSTOMISATION_CSS = `
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

  .craft { padding: clamp(5rem, 10vw, 9rem) 0; background: var(--ink); color: var(--pearl-white); }
  .craft-grid { display: grid; grid-template-columns: 1fr 1.45fr; gap: 8vw; align-items: end; }
  .craft .display { font-size: clamp(3rem, 6vw, 6rem); }
  .craft-copy { max-width: 600px; }
  .craft-copy > p { color: var(--light-sand); }
  .craft-points { margin-top: 3rem; border-top: 1px solid rgba(248, 248, 255, .2); }
  .craft-point { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid rgba(248, 248, 255, .2); }
  .craft-point span:last-child { color: var(--warm-sand); }

  .process { padding: clamp(5rem, 10vw, 9rem) 0; background: var(--pale-sand); }
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    counter-reset: step;
  }
  .process-step {
    counter-increment: step;
    padding: 2.5rem 2rem;
    background: var(--pearl-white);
    border-radius: 4px;
    position: relative;
  }
  .process-step::before {
    content: "0" counter(step);
    display: block;
    color: var(--warm-sand);
    font-size: .76rem;
    letter-spacing: .14em;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .process-step h3 { margin: 0 0 .75rem; font-family: var(--serif); font-size: clamp(1.6rem, 2.5vw, 2.4rem); font-weight: 400; line-height: 1.05; }
  .process-step p { margin: 0; color: var(--muted); font-size: .95rem; line-height: 1.65; }

  .project-image {
    min-height: 78svh;
    display: grid;
    place-items: end start;
    padding: 5vw;
    color: var(--pearl-white);
    background:
      linear-gradient(180deg, transparent 30%, rgba(10, 10, 8, .65)),
      url("https://images.unsplash.com/photo-1547822280-d923f07fffbd?auto=format&fit=crop&q=88&w=2200") center / cover no-repeat;
  }
  .project-image .display { max-width: 870px; font-size: clamp(3rem, 7vw, 7rem); }

  .materials { padding: clamp(5rem, 9vw, 8rem) 0; background: var(--golden-cream); }
  .materials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-top: 3rem;
  }
  .material-card { position: relative; overflow: hidden; aspect-ratio: 3/4; }
  .material-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s ease; }
  .material-card:hover img { transform: scale(1.05); }
  .material-label {
    position: absolute;
    inset: auto 0 0;
    padding: 2.5rem 1.5rem 1.5rem;
    color: var(--pearl-white);
    background: linear-gradient(transparent, rgba(10,10,8,.7));
    font-family: var(--serif);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
  }

  @media (max-width: 860px) {
    .craft-grid { grid-template-columns: 1fr; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .materials-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 560px) {
    .process-grid { grid-template-columns: 1fr; }
  }
`;

export default function CustomisationPage() {
  return (
    <>
      <SiteFont />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + CUSTOMISATION_CSS }} />
      <SiteShell>
        {/* Hero */}
        <section className="page-hero">
          <div className="shell">
            <p className="eyebrow">Premium customisation</p>
            <h1 className="display">Designed around real living.</h1>
            <p>
              We consider the room, daily use and visual balance before shaping each piece.
              The result is furniture that feels at home from the first day.
            </p>
          </div>
        </section>

        {/* Craft principles */}
        <section className="craft" id="customisation" aria-labelledby="craft-title">
          <div className="shell craft-grid">
            <div className="reveal">
              <p className="eyebrow">Premium customisation</p>
              <h2 className="display" id="craft-title">Designed around real living.</h2>
            </div>
            <div className="craft-copy reveal">
              <p>
                We consider the room, daily use and visual balance before shaping each piece.
                The result is furniture that feels at home from the first day.
              </p>
              <div className="craft-points">
                <div className="craft-point"><span>Space planning</span><span>01</span></div>
                <div className="craft-point"><span>Material and finish selection</span><span>02</span></div>
                <div className="craft-point"><span>Made-to-measure detailing</span><span>03</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="reveal">
              <p className="eyebrow">How it works</p>
              <h2
                className="display"
                id="process-title"
                style={{ fontSize: "clamp(3rem,6vw,5.8rem)" }}
              >
                From idea to installation.
              </h2>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <h3>Consultation</h3>
                <p>
                  We start by understanding your space, lifestyle and preferences through a
                  detailed one-on-one discussion around your room, references and requirements.
                </p>
              </div>
              <div className="process-step reveal">
                <h3>Design &amp; materials</h3>
                <p>
                  Our team proposes layouts, dimensions and material combinations — timber
                  species, edge profiles, finishes and upholstery — tailored to your vision.
                </p>
              </div>
              <div className="process-step reveal">
                <h3>Crafting</h3>
                <p>
                  Every piece is handcrafted in our workshop. We regularly update you on
                  progress, and you're welcome to visit and inspect at any stage.
                </p>
              </div>
              <div className="process-step reveal">
                <h3>Delivery &amp; fitting</h3>
                <p>
                  We handle professional delivery and on-site installation, ensuring each
                  piece is perfectly placed and fitted within your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-bleed image */}
        <div
          className="project-image reveal"
          role="img"
          aria-label="Tailored wardrobe interior by Alder & Form"
        >
          <h2 className="display">
            Storage made architectural.
          </h2>
        </div>

        {/* Materials */}
        <section className="materials" aria-labelledby="materials-title">
          <div className="shell">
            <div className="reveal">
              <p className="eyebrow">Natural materials</p>
              <h2
                className="display"
                id="materials-title"
                style={{ fontSize: "clamp(3rem,6vw,5.8rem)" }}
              >
                The finest timbers.
              </h2>
            </div>
            <div className="materials-grid reveal">
              <div className="material-card">
                <img
                  src="https://images.unsplash.com/photo-1609861296587-fd53634b0800?auto=format&fit=crop&q=88&w=900"
                  alt="Teak wood grain texture"
                  loading="lazy"
                />
                <div className="material-label">Teak</div>
              </div>
              <div className="material-card">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=88&w=900"
                  alt="Sheesham rosewood grain"
                  loading="lazy"
                />
                <div className="material-label">Sheesham</div>
              </div>
              <div className="material-card">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=88&w=900"
                  alt="Premium engineered wood panels"
                  loading="lazy"
                />
                <div className="material-label">Engineered wood</div>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
