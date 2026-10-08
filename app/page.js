"use client";

import { useEffect, useRef } from "react";

const INDEX_HTML = `
  <header class="site-header">
    <nav class="nav shell" aria-label="Main navigation">
      <div class="nav-links">
        <a href="/collections">Collections</a>
        <a href="/approach">Approach</a>
      </div>
      <a class="brand" href="/" aria-label="Alder & Form home"><img src="/alder-form-light.svg" alt="Alder & Form - Furniture Crafters" class="brand-logo"></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-links">Menu</button>
      <div class="nav-links" id="mobile-links">
        <a class="mobile-only" href="/collections">Collections</a>
        <a class="mobile-only" href="/approach">Approach</a>
        <a href="/customisation">Customisation</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content shell">
        <p class="eyebrow">Furniture & interiors · Considered living</p>
        <h1 class="display" id="hero-title">Furniture made personal.</h1>
        <div class="hero-meta">
          <p>Premium concepts shaped around your space, your style and the way you live.</p>
          <a class="round-link" href="#product-month">Discover<br>this month</a>
        </div>
      </div>
    </section>

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
            <div class="month-detail"><span>Craft</span><span>Solid wood & fluted detailing</span></div>
            <div class="month-detail"><span>Finish</span><span>Made to preference</span></div>
            <div class="month-detail"><span>Size</span><span>Custom</span></div>
          </div>
        </div>
      </div>
    </section>

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
        <div class="arrivals-window" aria-roledescription="carousel" aria-label="Featured furniture collections">
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

    <section class="intro" id="approach">
      <div class="shell">
        <div class="intro-grid reveal">
          <p class="eyebrow">Our approach</p>
          <h2 class="display">Crafted for the way you live.</h2>
        </div>
        <div class="intro-foot reveal">
          <p>Every Alder & Form piece begins with a premium concept and is customised to suit the customer's space, style and requirements.</p>
          <p>From living spaces to wardrobes and bedroom furniture, each solution balances considered proportions, purposeful storage and a refined finish.</p>
        </div>
      </div>
    </section>

    <section class="showcase" id="collection-carousel" aria-labelledby="showcase-title">
      <div class="shell">
        <div class="section-head reveal">
          <div>
            <p class="eyebrow">Our collection</p>
            <h2 class="display" id="showcase-title">Designed for every room.</h2>
          </div>
          <p>Each slide pauses briefly so you can take in the details.</p>
        </div>
        <div class="carousel reveal" aria-roledescription="carousel" aria-label="Alder & Form collection">
          <div class="carousel-viewport">
            <div class="carousel-track">
              <article class="carousel-slide" aria-label="1 of 3">
                <img src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=88&w=1800" alt="Premium living room with wood furniture">
                <div class="slide-copy"><div><p class="eyebrow">Living and dining</p><h3 class="display">Spaces that feel complete.</h3></div><p>Furniture composed around everyday comfort, movement and the visual balance of your room.</p></div>
              </article>
              <article class="carousel-slide" aria-label="2 of 3">
                <img src="https://images.unsplash.com/photo-1662733853648-329a0d258be4?auto=format&fit=crop&q=88&w=1800" alt="Minimal wooden coffee table">
                <div class="slide-copy"><div><p class="eyebrow">Coffee tables</p><h3 class="display">A centrepiece in proportion.</h3></div><p>Choose the dimensions, material expression and finishing details that suit your interior.</p></div>
              </article>
              <article class="carousel-slide" aria-label="3 of 3">
                <img src="https://images.unsplash.com/photo-1547822280-d923f07fffbd?auto=format&fit=crop&q=88&w=1800" alt="Tailored wardrobe interior">
                <div class="slide-copy"><div><p class="eyebrow">Wardrobes and TV units</p><h3 class="display">Storage made architectural.</h3></div><p>Made-to-measure units that bring storage, display and entertainment into one calm composition.</p></div>
              </article>
            </div>
          </div>
          <div class="carousel-controls">
            <div class="carousel-dots" aria-label="Choose slide">
              <button class="carousel-dot active" type="button" aria-label="Show slide 1" aria-current="true"></button>
              <button class="carousel-dot" type="button" aria-label="Show slide 2"></button>
              <button class="carousel-dot" type="button" aria-label="Show slide 3"></button>
            </div>
            <div class="carousel-arrows">
              <button class="carousel-arrow prev" type="button" aria-label="Previous slide">←</button>
              <button class="carousel-arrow next" type="button" aria-label="Next slide">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="craft" id="customisation">
      <div class="shell craft-grid">
        <div class="reveal">
          <p class="eyebrow">Premium customisation</p>
          <h2 class="display">Designed around real living.</h2>
        </div>
        <div class="craft-copy reveal">
          <p>We consider the room, daily use and visual balance before shaping each piece. The result is furniture that feels at home from the first day.</p>
          <div class="craft-points">
            <div class="craft-point"><span>Space planning</span><span>01</span></div>
            <div class="craft-point"><span>Material and finish selection</span><span>02</span></div>
            <div class="craft-point"><span>Made-to-measure detailing</span><span>03</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="collection" id="collection">
      <div class="shell">
        <div class="section-head reveal">
          <div>
            <p class="eyebrow">Services & expertise</p>
            <h2 class="display">What we offer</h2>
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
                  <li>signature living & dining furniture</li>
                  <li>sculpted coffee tables & accent pieces</li>
                  <li>tailored wardrobes, TV units & cots</li>
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
                  <li>direct delivery & professional on-site installation</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="shell">
        <div class="contact-top">
          <div class="reveal">
            <p class="eyebrow">Begin a custom project</p>
            <h2 class="display">Let’s make it yours.</h2>
          </div>
          <div class="contact-details reveal">
            <a href="/contact"><strong>Enquiries</strong>Talk about your space →</a>
            <a href="mailto:hello@adloom.marketing"><strong>Email</strong>hello@adloom.marketing</a>
            <a href="/customisation"><strong>Made personal</strong>Explore customisation →</a>
            <p><strong>Alder &amp; Form</strong>Furniture &amp; interiors · A portfolio concept</p>
            <a href="/contact" style="margin-top:.5rem;display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.75rem;background:var(--ink);color:var(--pearl-white);border-radius:3px;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;">Start a project →</a>
          </div>
        </div>
        <footer class="footer">
          <a class="footer-brand" href="/" aria-label="Alder & Form home"><img src="/alder-form.svg" alt="Alder & Form - Furniture Crafters" class="footer-logo"></a>
          <div style="display:flex;gap:1.2rem;flex-wrap:wrap"><a href="/collections">Collections</a><a href="/approach">Approach</a><a href="/faq">FAQs</a><a href="/contact">Contact</a></div><span>Crafted for the way you live.</span>
        </footer>
      </div>
    </section>
  </main>
`;

const INDEX_CSS = `
    :root {
      --warm-sand: #CBAC65;
      --light-sand: #E0D5B5;
      --pale-sand: #F5F0E5;
      --golden-cream: #F9EBC8;
      --pearl-white: #F8F8FF;
      --ink: #171713;
      --muted: #69645b;
      --line: rgba(23, 23, 19, .18);
      --serif: "Italiana", Georgia, serif;
      --sans: "DM Sans", Arial, sans-serif;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--ink);
      background: var(--pearl-white);
      font-family: var(--sans);
      font-size: 16px;
      line-height: 1.6;
    }
    img { display: block; width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    .eyebrow {
      margin: 0 0 1rem;
      font-size: .76rem;
      font-weight: 600;
      letter-spacing: .2em;
      text-transform: uppercase;
    }
    .display {
      margin: 0;
      font-family: var(--serif);
      font-weight: 400;
      line-height: .98;
      letter-spacing: -.02em;
    }
    .shell { width: min(1280px, calc(100% - 8vw)); margin-inline: auto; }

    .site-header {
      position: absolute;
      z-index: 20;
      inset: 0 0 auto;
      border-bottom: 1px solid rgba(248, 248, 255, .28);
      color: var(--pearl-white);
    }
    .nav {
      min-height: 86px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1.5rem;
    }
    .nav-links { display: flex; align-items: center; gap: 2rem; }
    .nav-links:last-child { justify-content: flex-end; }
    .nav a {
      font-size: .78rem;
      letter-spacing: .14em;
      text-transform: uppercase;
    }
    .nav a:hover, .nav a:focus-visible { color: var(--golden-cream); }
    .brand {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .brand-logo {
      height: 48px;
      width: auto;
      max-width: 140px;
      object-fit: contain;
      transition: opacity .3s ease, transform .3s ease;
    }
    .brand:hover .brand-logo, .brand:focus-visible .brand-logo {
      opacity: .85;
      transform: scale(1.03);
    }
    .menu-button {
      display: none;
      border: 1px solid rgba(248, 248, 255, .45);
      border-radius: 999px;
      color: inherit;
      background: transparent;
      padding: .55rem .9rem;
      cursor: pointer;
    }

    .hero {
      position: relative;
      min-height: 100svh;
      display: grid;
      align-items: end;
      color: var(--pearl-white);
      background:
        linear-gradient(180deg, rgba(10, 10, 8, .28), rgba(10, 10, 8, .72)),
        url("https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=88&w=2200") center / cover no-repeat;
    }
    .hero-content { padding: 9rem 0 5.5rem; }
    .hero .display { max-width: 930px; font-size: clamp(4.2rem, 10vw, 9.5rem); }
    .hero-meta {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 2rem;
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(248, 248, 255, .45);
    }
    .hero-meta p { max-width: 470px; margin: 0; font-size: 1.04rem; }
    .round-link {
      display: inline-grid;
      place-items: center;
      width: 118px;
      aspect-ratio: 1;
      border: 1px solid currentColor;
      border-radius: 50%;
      font-size: .72rem;
      font-weight: 600;
      letter-spacing: .13em;
      text-align: center;
      text-transform: uppercase;
      transition: .3s ease;
    }
    .round-link:hover, .round-link:focus-visible { color: var(--ink); background: var(--golden-cream); transform: translateY(-4px); }

    .intro { padding: clamp(5rem, 11vw, 10rem) 0; background: var(--pale-sand); }
    .intro-grid { display: grid; grid-template-columns: .7fr 2fr; gap: 8vw; align-items: start; }
    .intro .display { max-width: 970px; font-size: clamp(3rem, 6.6vw, 6.5rem); }
    .intro-foot {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid var(--line);
    }
    .intro-foot p { margin: 0; max-width: 520px; color: var(--muted); }

    .showcase { padding: clamp(5rem, 9vw, 8rem) 0; overflow: hidden; background: var(--pearl-white); }
    .carousel { position: relative; }
    .carousel-viewport { overflow: hidden; }
    .carousel-track { display: flex; transition: transform .85s cubic-bezier(.22,.61,.36,1); }
    .carousel-slide { flex: 0 0 100%; display: grid; grid-template-columns: 1.35fr .65fr; min-height: 670px; background: var(--pale-sand); }
    .carousel-slide img { height: 100%; min-height: 670px; object-fit: cover; }
    .slide-copy { display: flex; flex-direction: column; justify-content: space-between; padding: clamp(2.5rem, 6vw, 5rem); }
    .slide-copy .display { font-size: clamp(3rem, 5.5vw, 5.8rem); }
    .slide-copy p { max-width: 410px; color: var(--muted); }
    .carousel-controls { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.4rem; }
    .carousel-dots { display: flex; gap: .55rem; }
    .carousel-dot { width: 30px; height: 2px; border: 0; padding: 0; background: var(--light-sand); cursor: pointer; }
    .carousel-dot.active { background: var(--ink); }
    .carousel-arrows { display: flex; gap: .6rem; }
    .carousel-arrow { width: 46px; height: 46px; border: 1px solid var(--line); border-radius: 50%; background: transparent; color: var(--ink); cursor: pointer; }
    .carousel-arrow:hover, .carousel-arrow:focus-visible { background: var(--ink); color: var(--pearl-white); }

    .collection { padding: clamp(5rem, 9vw, 8rem) 0; background: var(--golden-cream); }
    .section-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 3rem; }
    .section-head .display { font-size: clamp(3rem, 6vw, 5.8rem); }
    .text-link { border-bottom: 1px solid currentColor; padding-bottom: .2rem; font-size: .82rem; letter-spacing: .13em; text-transform: uppercase; }
    .category-list { border-top: 1px solid var(--line); }
    .category {
      display: grid;
      grid-template-columns: 90px 1fr auto;
      align-items: center;
      gap: 2rem;
      min-height: 118px;
      padding: 1.1rem 0;
      border-bottom: 1px solid var(--line);
      transition: padding .3s ease, background .3s ease;
    }
    .category:hover { padding-inline: 1.2rem; background: var(--pale-sand); }
    .category-number { color: var(--warm-sand); font-size: .76rem; letter-spacing: .12em; }
    .category-name { font-family: var(--serif); font-size: clamp(2rem, 4vw, 4rem); line-height: 1; }
    .category-note { max-width: 230px; color: var(--muted); font-size: .92rem; text-align: right; }
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
    .collection-bullets {
      list-style: none;
      padding: 0;
      margin: 1.25rem 0 0;
      display: grid;
      gap: .65rem;
    }
    .mobile-only { display: none; }
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
    .month-image {
      min-height: 620px;
      background: url("/product-month.jpg") center / cover no-repeat;
    }
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

    .arrivals { padding: clamp(5rem, 9vw, 8rem) 0; overflow: hidden; background: var(--pearl-white); }
    .arrivals-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.6rem; }
    .arrivals-head .display { font-size: clamp(3rem, 6vw, 5.8rem); }
    .arrivals-controls { display: flex; gap: .65rem; }
    .arrivals-button { width: 48px; height: 48px; border: 1px solid var(--line); border-radius: 50%; color: var(--ink); background: transparent; cursor: pointer; }
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
    .arrival-card:not(.is-center):hover {
      opacity: 0.75;
      filter: blur(1.5px) saturate(0.7);
    }
    .arrival-card img { aspect-ratio: 4 / 5; object-fit: cover; background: var(--pale-sand); border-radius: 8px 8px 0 0; }
    .arrival-card-body { display: grid; grid-template-columns: 1fr auto; gap: .75rem; padding: 1.25rem 1.1rem; border-bottom: 1px solid var(--line); }
    .arrival-card h3 { margin: 0; font-family: var(--serif); font-size: clamp(1.6rem, 2.2vw, 2.25rem); font-weight: 400; line-height: 1.05; }
    .arrival-card p { grid-column: 1 / -1; margin: 0; color: var(--muted); font-size: .86rem; }
    .arrival-tag { align-self: start; padding: .28rem .55rem; border: 1px solid var(--line); border-radius: 999px; font-size: .66rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; white-space: nowrap; }
    .arrivals-progress { height: 3px; margin-top: 2.5rem; background: var(--light-sand); border-radius: 999px; overflow: hidden; }
    .arrivals-progress span { display: block; width: 100%; height: 100%; background: var(--ink); border-radius: 999px; transition: transform .55s cubic-bezier(.22,.61,.36,1); transform-origin: left; will-change: transform; }

    .craft { padding: clamp(5rem, 10vw, 9rem) 0; background: var(--ink); color: var(--pearl-white); }
    .craft-grid { display: grid; grid-template-columns: 1fr 1.45fr; gap: 8vw; align-items: end; }
    .craft .display { font-size: clamp(3rem, 6vw, 6rem); }
    .craft-copy { max-width: 600px; }
    .craft-copy > p { color: var(--light-sand); }
    .craft-points { margin-top: 3rem; border-top: 1px solid rgba(248, 248, 255, .2); }
    .craft-point { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid rgba(248, 248, 255, .2); }
    .craft-point span:last-child { color: var(--warm-sand); }

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

    .contact { padding: clamp(5rem, 10vw, 9rem) 0 3rem; background: var(--golden-cream); }
    .contact-top { display: grid; grid-template-columns: 1.4fr .6fr; gap: 5rem; align-items: end; }
    .contact .display { font-size: clamp(3.6rem, 8vw, 8rem); }
    .contact-details { display: grid; gap: 1rem; }
    .contact-details a, .contact-details address { font-style: normal; font-size: 1rem; }
    .contact-details strong { display: block; margin-bottom: .18rem; color: var(--muted); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin-top: 7rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--line);
      font-size: .76rem;
      letter-spacing: .1em;
      text-transform: uppercase;
    }
    .footer-brand {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
    .footer-logo {
      height: 52px;
      width: auto;
      max-width: 150px;
      object-fit: contain;
      transition: opacity .3s ease, transform .3s ease;
    }
    .footer-brand:hover .footer-logo, .footer-brand:focus-visible .footer-logo {
      opacity: .85;
      transform: scale(1.03);
    }

    .reveal { opacity: 0; transform: translateY(34px); transition: opacity .8s ease, transform .8s ease; }
    .reveal.visible { opacity: 1; transform: none; }

    @media (max-width: 860px) {
      .nav { grid-template-columns: 1fr auto; }
      .brand { justify-content: flex-start; }
      .brand-logo { height: 38px; }
      .menu-button { display: inline-block; }
      .mobile-only { display: block; }
      .footer { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
      .footer-logo { height: 44px; }
      .nav-links {
        display: none;
        position: absolute;
        inset: 86px 0 auto;
        padding: 1.5rem 5vw;
        flex-direction: column;
        align-items: flex-start;
        background: var(--ink);
      }
      .nav-links:last-child { justify-content: flex-start; }
      .nav-links.open { display: flex; }
      .nav-links:first-child { display: none; }
      .hero-meta, .intro-grid, .intro-foot, .craft-grid, .contact-top { grid-template-columns: 1fr; }
      .hero-meta { align-items: start; }
      .month { grid-template-columns: 1fr; }
      .month-image { min-height: 65svh; }
      .arrivals-head { align-items: start; flex-direction: column; }
      .arrival-card { flex-basis: 84%; width: 84%; max-width: 84%; }
      .carousel-slide, .collection-detail { grid-template-columns: 1fr; }
      .carousel-slide img { min-height: 52svh; }
      .collection-detail { padding-left: 0; }
      .category { grid-template-columns: 50px 1fr; }
      .category-note { grid-column: 2; text-align: left; }
      .collection-summary { grid-template-columns: 50px 1fr auto; gap: 1rem; }
      .section-head { align-items: start; flex-direction: column; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .reveal { opacity: 1; transform: none; transition: none; }
      * { transition-duration: .01ms !important; }
    }
`;

export default function Home() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    let carouselTimer;
    let carouselTimeout;
    let arrivalsTimer;
    let arrivalsTimeout;

    const button = document.querySelector('.menu-button');
    const mobileLinks = document.querySelector('#mobile-links');
    if (button && mobileLinks) {
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        mobileLinks.classList.toggle('open', !open);
        button.textContent = open ? 'Menu' : 'Close';
      });
      mobileLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        button.setAttribute('aria-expanded', 'false');
        mobileLinks.classList.remove('open');
        button.textContent = 'Menu';
      }));
    }

    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const track = carousel.querySelector('.carousel-track');
      const slides = [...carousel.querySelectorAll('.carousel-slide')];
      const dots = [...carousel.querySelectorAll('.carousel-dot')];
      const previous = carousel.querySelector('.prev');
      const next = carousel.querySelector('.next');
      let currentSlide = 0;

      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === currentSlide);
          if (dotIndex === currentSlide) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }

      function stopCarousel() {
        clearTimeout(carouselTimeout);
        clearInterval(carouselTimer);
      }

      function startCarousel(initialDelay = 1000) {
        stopCarousel();
        carouselTimeout = setTimeout(() => {
          showSlide(currentSlide + 1);
          carouselTimer = setInterval(() => showSlide(currentSlide + 1), 2400);
        }, initialDelay);
      }

      if (previous) previous.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(1800); });
      if (next) next.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(1800); });
      dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); startCarousel(1800); }));
      carousel.addEventListener('mouseenter', stopCarousel);
      carousel.addEventListener('mouseleave', () => startCarousel(1500));
      carousel.addEventListener('focusin', stopCarousel);
      carousel.addEventListener('focusout', () => startCarousel(1500));
      if (!reduceMotion) startCarousel(1000);
    }
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .12 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    const arrivals = document.querySelector('.arrivals-window');
    if (arrivals) {
      const arrivalsTrack = arrivals.querySelector('.arrivals-track');
      const originalArrivalCards = [...arrivals.querySelectorAll('.arrival-card:not([aria-hidden="true"])')];
      const arrivalsProgress = arrivals.querySelector('.arrivals-progress span');
      const arrivalsPrevious = document.querySelector('.arrivals-prev');
      const arrivalsNext = document.querySelector('.arrivals-next');
      const numOriginal = originalArrivalCards.length;

      if (arrivalsTrack && !arrivalsTrack.querySelector('[aria-hidden="true"]')) {
        originalArrivalCards.slice().reverse().forEach(card => {
          const clone = card.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          arrivalsTrack.prepend(clone);
        });
        originalArrivalCards.forEach(card => {
          const clone = card.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          arrivalsTrack.append(clone);
        });
      }

      const arrivalCards = arrivalsTrack ? [...arrivalsTrack.querySelectorAll('.arrival-card')] : [];
      let centerIndex = numOriginal;

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
          card.classList.toggle('is-center', i === centerIndex);
        });
      }

      function jumpTo(index) {
        if (!arrivalsTrack) return;
        centerIndex = index;
        arrivalsTrack.style.transition = 'none';
        arrivalsTrack.style.transform = `translateX(-${getTrackIndex() * arrivalStep()}px)`;
        updateArrivalCardStates();
        updateArrivalsProgress();
        void arrivalsTrack.offsetWidth;
      }

      function positionArrivals(animate = true) {
        if (!arrivalsTrack) return;
        arrivalsTrack.style.transition = animate ? 'transform .55s cubic-bezier(.22,.61,.36,1)' : 'none';
        arrivalsTrack.style.transform = `translateX(-${getTrackIndex() * arrivalStep()}px)`;
        updateArrivalCardStates();
        updateArrivalsProgress();
        if (!animate) void arrivalsTrack.offsetWidth;
      }

      function showArrival(index) {
        if (!numOriginal) return;
        const direction = index - centerIndex;
        // Recover the loop even when the browser skips transitionend in a hidden tab.
        if (centerIndex < numOriginal || centerIndex >= numOriginal * 2) {
          jumpTo(((centerIndex % numOriginal) + numOriginal) % numOriginal + numOriginal);
        }
        centerIndex += direction;
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

      if (arrivalsPrevious) arrivalsPrevious.addEventListener('click', () => { showArrival(centerIndex - 1); startArrivals(1800); });
      if (arrivalsNext) arrivalsNext.addEventListener('click', () => { showArrival(centerIndex + 1); startArrivals(1800); });
      arrivals.addEventListener('mouseenter', stopArrivals);
      arrivals.addEventListener('mouseleave', () => startArrivals(1200));
      arrivals.addEventListener('focusin', stopArrivals);
      arrivals.addEventListener('focusout', () => startArrivals(1200));

      if (arrivalsTrack) {
        arrivalsTrack.addEventListener('transitionend', (e) => {
          if (e.target !== arrivalsTrack || e.propertyName !== 'transform') return;
          if (centerIndex >= numOriginal * 2) {
            jumpTo(centerIndex - numOriginal);
          } else if (centerIndex < numOriginal) {
            jumpTo(centerIndex + numOriginal);
          }
        });
      }

      window.addEventListener('resize', () => jumpTo(centerIndex));
      jumpTo(numOriginal);
      if (!reduceMotion) startArrivals(600);
    }

    return () => {
      clearTimeout(carouselTimeout);
      clearInterval(carouselTimer);
      clearTimeout(arrivalsTimeout);
      clearInterval(arrivalsTimer);
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Italiana&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: INDEX_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: INDEX_HTML }} />
    </>
  );
}
