"use client";

import { useEffect } from "react";
import SiteShell, { SITE_CSS, SiteFont } from "../components/SiteShell";

const APPROACH_CSS = `
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
  .carousel-arrow { width: 46px; height: 46px; border: 1px solid var(--line); border-radius: 50%; background: transparent; color: var(--ink); cursor: pointer; transition: background .25s, color .25s; }
  .carousel-arrow:hover, .carousel-arrow:focus-visible { background: var(--ink); color: var(--pearl-white); }

  .values { padding: clamp(5rem, 10vw, 9rem) 0; background: var(--golden-cream); }
  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  .value-card {
    padding: 2.5rem;
    background: var(--pearl-white);
    border-radius: 4px;
  }
  .value-number { color: var(--warm-sand); font-size: .76rem; letter-spacing: .14em; font-weight: 600; margin-bottom: 1.5rem; }
  .value-card h3 { margin: 0 0 .75rem; font-family: var(--serif); font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 400; line-height: 1; }
  .value-card p { margin: 0; color: var(--muted); font-size: .96rem; line-height: 1.65; }

  @media (max-width: 860px) {
    .intro-grid, .intro-foot { grid-template-columns: 1fr; }
    .carousel-slide, { grid-template-columns: 1fr; }
    .carousel-slide img { min-height: 52svh; }
    .values-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  }
`;

const INTRO_HTML = `
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
`;

const CAROUSEL_HTML = `
  <section class="showcase" id="collection-carousel" aria-labelledby="showcase-title">
    <div class="shell">
      <div class="section-head reveal" style="display:flex;align-items:end;justify-content:space-between;gap:2rem;margin-bottom:3rem;">
        <div>
          <p class="eyebrow">Our collection</p>
          <h2 class="display" id="showcase-title" style="font-size:clamp(3rem,6vw,5.8rem);">Designed for every room.</h2>
        </div>
        <p style="max-width:260px;color:var(--muted);">Each slide pauses briefly so you can take in the details.</p>
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
`;

export default function ApproachPage() {
  useEffect(() => {
    let carouselTimer;
    let carouselTimeout;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const carousel = document.querySelector(".carousel");
    if (!carousel) return;
    const track = carousel.querySelector(".carousel-track");
    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const dots = [...carousel.querySelectorAll(".carousel-dot")];
    const previous = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    let currentSlide = 0;
    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === currentSlide);
        if (dotIndex === currentSlide) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }
    function stopCarousel() { clearTimeout(carouselTimeout); clearInterval(carouselTimer); }
    function startCarousel(initialDelay = 1000) {
      stopCarousel();
      carouselTimeout = setTimeout(() => {
        showSlide(currentSlide + 1);
        carouselTimer = setInterval(() => showSlide(currentSlide + 1), 2400);
      }, initialDelay);
    }
    if (previous) previous.addEventListener("click", () => { showSlide(currentSlide - 1); startCarousel(1800); });
    if (next) next.addEventListener("click", () => { showSlide(currentSlide + 1); startCarousel(1800); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); startCarousel(1800); }));
    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", () => startCarousel(1500));
    carousel.addEventListener("focusin", stopCarousel);
    carousel.addEventListener("focusout", () => startCarousel(1500));
    if (!reduceMotion) startCarousel(1000);
    return () => { clearTimeout(carouselTimeout); clearInterval(carouselTimer); };
  }, []);

  return (
    <>
      <SiteFont />
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + APPROACH_CSS }} />
      <SiteShell>
        <section className="page-hero">
          <div className="shell">
            <p className="eyebrow">Our approach</p>
            <h1 className="display">Crafted for the way you live.</h1>
            <p>
              Every Alder & Form piece begins with a premium concept and is shaped around
              your space, your style and the way you live.
            </p>
          </div>
        </section>

        <div dangerouslySetInnerHTML={{ __html: INTRO_HTML }} />
        <div dangerouslySetInnerHTML={{ __html: CAROUSEL_HTML }} />

        {/* Values section */}
        <section className="values" aria-labelledby="values-title">
          <div className="shell">
            <div className="reveal">
              <p className="eyebrow">What drives us</p>
              <h2 className="display" id="values-title" style={{ fontSize: "clamp(3rem,6vw,5.8rem)" }}>
                Built on three principles.
              </h2>
            </div>
            <div className="values-grid reveal">
              <div className="value-card">
                <p className="value-number">01</p>
                <h3>Precision craft</h3>
                <p>
                  Every joint, edge and surface is shaped with intention. We hold ourselves to
                  standards that go beyond the visible — quality that lives in the details you
                  feel every day.
                </p>
              </div>
              <div className="value-card">
                <p className="value-number">02</p>
                <h3>Honest materials</h3>
                <p>
                  We work with premium natural timbers, selected for character and longevity.
                  Each material is treated to age beautifully rather than simply endure.
                </p>
              </div>
              <div className="value-card">
                <p className="value-number">03</p>
                <h3>Made for living</h3>
                <p>
                  Form follows the way you actually use your space. Our furniture is ergonomic,
                  considered and proportioned to the room — never decorative at the expense of
                  function.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
