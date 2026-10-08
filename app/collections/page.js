"use client";

import { useEffect } from "react";
import SiteShell, { SITE_CSS, SiteFont } from "../components/SiteShell";

const COLLECTIONS_CSS = `
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

  .arrivals { padding: clamp(5rem, 9vw, 8rem) 0; overflow: hidden; background: var(--pearl-white); }
  .arrivals-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.6rem; }
  .arrivals-head .display { font-size: clamp(3rem, 6vw, 5.8rem); }
  .arrivals-controls { display: flex; gap: .65rem; }
  .arrivals-button { width: 48px; height: 48px; border: 1px solid var(--line); border-radius: 50%; color: var(--ink); background: transparent; cursor: pointer; transition: background .25s, color .25s; }
  .arrivals-button:hover, .arrivals-button:focus-visible { color: var(--pearl-white); background: var(--ink); }
  .arrivals-window { overflow: hidden; width: 100%; padding: 30px 0; margin: -30px 0; }
  .arrivals-track { display: flex; gap: 24px; transition: transform .55s cubic-bezier(.22,.61,.36,1); will-change: transform; align-items: center; }
  .arrival-card {
    flex: 0 0 calc((100% - 48px) / 3);
    width: calc((100% - 48px) / 3);
    max-width: calc((100% - 48px) / 3);
    min-width: 0;
    position: relative;
    background: var(--pearl-white);
    border-radius: 8px;
    transition: transform .6s cubic-bezier(.22,.61,.36,1), filter .6s ease, opacity .6s ease, box-shadow .6s ease;
    transform: scale(0.95);
    opacity: 0.5;
    filter: blur(3px) saturate(0.4);
    z-index: 1;
  }
  .arrival-card.is-center {
    transform: scale(1.06) translateY(-12px);
    opacity: 1 !important;
    filter: blur(0px) saturate(1) !important;
    box-shadow: 0 24px 48px -12px rgba(23, 23, 19, 0.25);
    z-index: 10;
  }
  .arrival-card:not(.is-center):hover { opacity: 0.75; filter: blur(1.5px) saturate(0.7); }
  .arrival-card img { aspect-ratio: 4 / 5; object-fit: cover; background: var(--pale-sand); border-radius: 8px 8px 0 0; }
  .arrival-card-body { display: grid; grid-template-columns: 1fr auto; gap: .75rem; padding: 1.25rem 1.1rem; border-bottom: 1px solid var(--line); }
  .arrival-card h3 { margin: 0; font-family: var(--serif); font-size: clamp(1.6rem, 2.2vw, 2.25rem); font-weight: 400; line-height: 1.05; }
  .arrival-card p { grid-column: 1 / -1; margin: 0; color: var(--muted); font-size: .86rem; }
  .arrival-tag { align-self: start; padding: .28rem .55rem; border: 1px solid var(--line); border-radius: 999px; font-size: .66rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; white-space: nowrap; }
  .arrivals-progress { height: 3px; margin-top: 2.5rem; background: var(--light-sand); border-radius: 999px; overflow: hidden; }
  .arrivals-progress span { display: block; width: 100%; height: 100%; background: var(--ink); border-radius: 999px; transition: transform .55s cubic-bezier(.22,.61,.36,1); transform-origin: left; will-change: transform; }

  .collection-grid { padding: clamp(5rem, 9vw, 8rem) 0; background: var(--golden-cream); }
  .section-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 3rem; }
  .section-head .display { font-size: clamp(3rem, 6vw, 5.8rem); }
  .collection-list { border-top: 1px solid var(--line); }
  .collection-item { border-bottom: 1px solid var(--line); }
  .collection-item:first-child { border-top: 1px solid var(--line); }
  .collection-summary {
    list-style: none;
    display: grid;
    grid-template-columns: 90px 1fr auto;
    align-items: center;
    gap: 2rem;
    min-height: 118px;
    padding: 1.1rem 0;
    cursor: pointer;
  }
  .collection-summary::-webkit-details-marker { display: none; }
  .collection-summary::after { content: "+"; display: grid; place-items: center; width: 46px; aspect-ratio: 1; border: 1px solid currentColor; border-radius: 50%; font-size: 1.35rem; }
  .collection-item[open] .collection-summary::after { content: "−"; }
  .collection-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding: 0 0 3rem 90px; }
  .collection-detail img { aspect-ratio: 16 / 10; object-fit: cover; }
  .collection-detail-copy { display: flex; flex-direction: column; justify-content: center; max-width: 470px; }
  .collection-detail-copy h3 { margin: 0 0 1rem; font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.7rem); font-weight: 400; line-height: 1; }
  .collection-detail-copy p { color: var(--muted); margin: 0; }
  .category-number { color: var(--warm-sand); font-size: .76rem; letter-spacing: .12em; }
  .category-name { font-family: var(--serif); font-size: clamp(2rem, 4vw, 4rem); line-height: 1; }
  .collection-bullets {
    list-style: none;
    padding: 0;
    margin: 1.25rem 0 0;
    display: grid;
    gap: .65rem;
  }
  .collection-bullets li {
    position: relative;
    padding-left: 1.35rem;
    font-size: .95rem;
    color: var(--muted);
    line-height: 1.5;
  }
  .collection-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: -1px;
    color: var(--warm-sand);
    font-size: 1.15rem;
  }

  .month { display: grid; grid-template-columns: 1.16fr .84fr; min-height: 760px; }
  .month-image { min-height: 620px; background: url("/product-month.jpg") center / cover no-repeat; }
  .month-copy {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(3rem, 7vw, 7rem);
    background: var(--warm-sand);
  }
  .month-copy .display { font-size: clamp(3.5rem, 6vw, 6.5rem); }
  .month-copy p { max-width: 500px; }
  .month-details { display: grid; gap: .8rem; padding-top: 1.5rem; border-top: 1px solid rgba(23, 23, 19, .35); }
  .month-detail { display: flex; justify-content: space-between; gap: 1rem; font-size: .86rem; }
  .month-detail span:first-child { text-transform: uppercase; letter-spacing: .12em; font-weight: 600; }

  @media (max-width: 860px) {
    .arrivals-head { align-items: start; flex-direction: column; }
    .arrival-card { flex-basis: 84%; }
    .collection-detail { grid-template-columns: 1fr; padding-left: 0; }
    .collection-summary { grid-template-columns: 50px 1fr auto; gap: 1rem; }
    .section-head { align-items: start; flex-direction: column; }
    .month { grid-template-columns: 1fr; }
    .month-image { min-height: 65svh; }
  }
`;

const ARRIVALS_HTML = `
  <section class="arrivals" id="featured-collections" aria-labelledby="arrivals-title">
    <div class="shell">
      <div class="arrivals-head reveal">
        <div>
          <p class="eyebrow">Featured furniture</p>
          <h2 class="display" id="arrivals-title">Collections</h2>
        </div>
        <div class="arrivals-controls" aria-label="Collections carousel controls">
          <button class="arrivals-button arrivals-prev" type="button" aria-label="Previous collection">←</button>
          <button class="arrivals-button arrivals-next" type="button" aria-label="Next collection">→</button>
        </div>
      </div>
      <div class="arrivals-window reveal" aria-roledescription="carousel" aria-label="Featured furniture collections">
        <div class="arrivals-track">
          <article class="arrival-card is-center">
            <img src="https://images.unsplash.com/photo-1662733853648-329a0d258be4?auto=format&fit=crop&q=88&w=1200" alt="Sculpted wooden coffee table" loading="lazy">
            <div class="arrival-card-body"><h3><a href="/collections/nesting-table">Sculpted Coffee Table ↗</a></h3><span class="arrival-tag">Collection</span><p>Custom dimensions · Made to order</p></div>
          </article>
          <article class="arrival-card">
            <img src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=88&w=1200" alt="Premium living room furniture" loading="lazy">
            <div class="arrival-card-body"><h3><a href="/collections/living">Living Room Collection ↗</a></h3><span class="arrival-tag">Collection</span><p>Premium concept · Custom finish</p></div>
          </article>
          <article class="arrival-card">
            <img src="https://images.unsplash.com/photo-1547822280-d923f07fffbd?auto=format&fit=crop&q=88&w=1200" alt="Custom wardrobe interior" loading="lazy">
            <div class="arrival-card-body"><h3><a href="/collections/wardrobe">Tailored Wardrobe ↗</a></h3><span class="arrival-tag">Collection</span><p>Made to measure · Custom storage</p></div>
          </article>
          <article class="arrival-card">
            <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=88&w=1200" alt="Handcrafted dining table and chairs" loading="lazy">
            <div class="arrival-card-body"><h3><a href="/collections/dining">Dining Table Collection ↗</a></h3><span class="arrival-tag">Collection</span><p>Designed for your space · Made to order</p></div>
          </article>
          <article class="arrival-card">
            <img src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=88&w=1200" alt="Artisan wooden side table" loading="lazy">
            <div class="arrival-card-body"><h3><a href="/collections/side-tables">Side Table Series ↗</a></h3><span class="arrival-tag">Collection</span><p>Refined details · Custom material</p></div>
          </article>
        </div>
        <div class="arrivals-progress" aria-hidden="true"><span style="transform: scaleX(0.2);"></span></div>
      </div>
    </div>
  </section>
`;

const COLLECTION_SERVICES_HTML = `
  <section class="collection-grid" id="collection" aria-labelledby="collection-title">
    <div class="shell">
      <div class="section-head reveal">
        <div>
          <p class="eyebrow">Services &amp; expertise</p>
          <h2 class="display" id="collection-title">What we offer</h2>
        </div>
        <p>Click an offering to see more details and craftsmanship.</p>
      </div>
      <div class="collection-list">
        <details class="collection-item reveal" name="collection">
          <summary class="collection-summary"><span class="category-number">01</span><span class="category-name">Custom Interior Design</span></summary>
          <div class="collection-detail">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=88&w=1600" alt="Custom interior design by Alder & Form" loading="lazy">
            <div class="collection-detail-copy">
              <h3>Spaces shaped around your life.</h3>
              <p>Tailored interior woodwork and spatial layouts crafted specifically for your home, balancing aesthetic harmony, circulation, and purposeful functionality.</p>
              <ul class="collection-bullets">
                <li>handcrafted furniture pieces</li>
                <li>custom dimensions tailored to your architecture</li>
                <li>cohesive styling across living, dining, and bedroom spaces</li>
              </ul>
            </div>
          </div>
        </details>
        <details class="collection-item reveal" name="collection">
          <summary class="collection-summary"><span class="category-number">02</span><span class="category-name">Artisan Craftsmanship</span></summary>
          <div class="collection-detail">
            <img src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&q=88&w=1600" alt="Artisan woodworking craftsmanship" loading="lazy">
            <div class="collection-detail-copy">
              <h3>Handcrafted quality with timeless precision.</h3>
              <p>Every Alder & Form piece reflects dedication to craftsmanship. From material selection to finishing details, our artisans ensure each product embodies quality, durability, and timeless design.</p>
              <ul class="collection-bullets">
                <li>handcrafted furniture pieces</li>
                <li>premium natural materials</li>
                <li>meticulous finishing details</li>
              </ul>
            </div>
          </div>
        </details>
        <details class="collection-item reveal" name="collection">
          <summary class="collection-summary"><span class="category-number">03</span><span class="category-name">Lifestyle Collection</span></summary>
          <div class="collection-detail">
            <img src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=88&w=1600" alt="Alder & Form lifestyle furniture collection" loading="lazy">
            <div class="collection-detail-copy">
              <h3>Curated essentials for everyday living.</h3>
              <p>A distinctive range of living, dining, and bedroom furniture designed to elevate daily rituals with understated luxury, ergonomic comfort, and lasting presence.</p>
              <ul class="collection-bullets">
                <li>signature living &amp; dining furniture</li>
                <li>sculpted coffee tables &amp; accent pieces</li>
                <li>tailored wardrobes, TV units &amp; cots</li>
              </ul>
            </div>
          </div>
        </details>
        <details class="collection-item reveal" name="collection">
          <summary class="collection-summary"><span class="category-number">04</span><span class="category-name">Professional Client Support</span></summary>
          <div class="collection-detail">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=88&w=1600" alt="Professional furniture design and consultation" loading="lazy">
            <div class="collection-detail-copy">
              <h3>Seamless guidance from concept to installation.</h3>
              <p>Our design team assists you through every stage—from initial consultations and material sampling to precise fabrication, timely delivery, and on-site setup.</p>
              <ul class="collection-bullets">
                <li>one-on-one consultation with our crafters</li>
                <li>timber, finish, and upholstery selection guidance</li>
                <li>direct delivery &amp; professional on-site installation</li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
`;

const MONTH_HTML = `
  <section class="month" id="product-month" aria-labelledby="month-title">
    <div class="month-image" role="img" aria-label="Sculpted nesting fluted coffee table in natural wood and stone"></div>
    <div class="month-copy">
      <div class="reveal">
        <p class="eyebrow">Product of the month</p>
        <h2 class="display" id="month-title">The sculpted nesting table</h2>
      </div>
      <div class="reveal">
        <p>A dual-tier centrepiece combining solid handcrafted timber with a fluted tambour drum. Customise the diameter, edge profile and finish to complement your living room.</p>
        <div class="month-details">
          <div class="month-detail"><span>Category</span><span>Nesting coffee tables</span></div>
          <div class="month-detail"><span>Craft</span><span>Solid wood &amp; fluted detailing</span></div>
          <div class="month-detail"><span>Finish</span><span>Made to preference</span></div>
          <div class="month-detail"><span>Size</span><span>Custom</span></div>
        </div>
      </div>
    </div>
  </section>
`;

export default function CollectionsPage() {
  useEffect(() => {
    let arrivalsTimer;
    let arrivalsTimeout;

    const arrivals = document.querySelector(".arrivals-window");
    if (!arrivals) return;

    const arrivalsTrack = arrivals.querySelector(".arrivals-track");
    const originalArrivalCards = [...arrivals.querySelectorAll(".arrival-card")];
    const arrivalsProgress = arrivals.querySelector(".arrivals-progress span");
    const arrivalsPrevious = document.querySelector(".arrivals-prev");
    const arrivalsNext = document.querySelector(".arrivals-next");
    const numOriginal = originalArrivalCards.length;

    if (arrivalsTrack && !arrivalsTrack.querySelector('[aria-hidden="true"]')) {
      originalArrivalCards.slice().reverse().forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        arrivalsTrack.prepend(clone);
      });
      originalArrivalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        arrivalsTrack.append(clone);
      });
    }

    const arrivalCards = arrivalsTrack ? [...arrivalsTrack.querySelectorAll(".arrival-card")] : [];
    let centerIndex = numOriginal;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function getTrackIndex() {
      const isMobile = window.innerWidth <= 860;
      return isMobile ? centerIndex : centerIndex - 1;
    }

    function arrivalStep() {
      if (!arrivalCards.length || !arrivalsTrack) return 0;
      const first = arrivalCards[0];
      const gap = parseFloat(getComputedStyle(arrivalsTrack).gap) || 24;
      return first.offsetWidth + gap;
    }

    function updateArrivalsProgress() {
      if (!arrivalsProgress || !numOriginal) return;
      const logicalIndex = ((centerIndex % numOriginal) + numOriginal) % numOriginal;
      const progressWidth = (logicalIndex + 1) / numOriginal;
      arrivalsProgress.style.transform = `scaleX(${progressWidth})`;
    }

    function updateArrivalCardStates() {
      if (!arrivalCards.length) return;
      arrivalCards.forEach((card, i) => {
        card.classList.toggle("is-center", i === centerIndex);
      });
    }

    function jumpTo(index) {
      if (!arrivalsTrack) return;
      centerIndex = index;
      arrivalsTrack.style.transition = "none";
      arrivalsTrack.style.transform = `translateX(-${getTrackIndex() * arrivalStep()}px)`;
      updateArrivalCardStates();
      updateArrivalsProgress();
      void arrivalsTrack.offsetWidth;
    }

    function positionArrivals(animate = true) {
      if (!arrivalsTrack) return;
      arrivalsTrack.style.transition = animate ? "transform .55s cubic-bezier(.22,.61,.36,1)" : "none";
      arrivalsTrack.style.transform = `translateX(-${getTrackIndex() * arrivalStep()}px)`;
      updateArrivalCardStates();
      updateArrivalsProgress();
      if (!animate) void arrivalsTrack.offsetWidth;
    }

    function showArrival(index) {
      centerIndex = index;
      positionArrivals(true);
    }

    function stopArrivals() {
      clearTimeout(arrivalsTimeout);
      clearInterval(arrivalsTimer);
    }

    function startArrivals(initialDelay = 600) {
      stopArrivals();
      arrivalsTimeout = setTimeout(() => {
        showArrival(centerIndex + 1);
        arrivalsTimer = setInterval(() => showArrival(centerIndex + 1), 1600);
      }, initialDelay);
    }

    if (arrivalsPrevious) arrivalsPrevious.addEventListener("click", () => { showArrival(centerIndex - 1); startArrivals(1800); });
    if (arrivalsNext) arrivalsNext.addEventListener("click", () => { showArrival(centerIndex + 1); startArrivals(1800); });
    arrivals.addEventListener("mouseenter", stopArrivals);
    arrivals.addEventListener("mouseleave", () => startArrivals(1200));
    arrivals.addEventListener("focusin", stopArrivals);
    arrivals.addEventListener("focusout", () => startArrivals(1200));

    if (arrivalsTrack) {
      arrivalsTrack.addEventListener("transitionend", (e) => {
        if (e.target !== arrivalsTrack || e.propertyName !== "transform") return;
        if (centerIndex >= numOriginal * 2) {
          jumpTo(centerIndex - numOriginal);
        } else if (centerIndex < numOriginal) {
          jumpTo(centerIndex + numOriginal);
        }
      });
    }

    window.addEventListener("resize", () => jumpTo(centerIndex));
    jumpTo(numOriginal);
    if (!reduceMotion) startArrivals(600);

    return () => {
      clearTimeout(arrivalsTimeout);
      clearInterval(arrivalsTimer);
    };
  }, []);

  return (
    <>
      <SiteFont />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + COLLECTIONS_CSS }} />
      <SiteShell>
        <section className="page-hero">
          <div className="shell">
            <p className="eyebrow">Featured furniture</p>
            <h1 className="display">Our Collections</h1>
            <p>
              Discover our curated range of handcrafted furniture — made to your space,
              your style, and the way you live.
            </p>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: ARRIVALS_HTML }} />
        <div dangerouslySetInnerHTML={{ __html: MONTH_HTML }} />
        <div dangerouslySetInnerHTML={{ __html: COLLECTION_SERVICES_HTML }} />
      </SiteShell>
    </>
  );
}
