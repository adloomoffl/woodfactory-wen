"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SITE_CSS = `
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
      position: fixed;
      z-index: 20;
      inset: 0 0 auto;
      border-bottom: 1px solid rgba(248, 248, 255, .18);
      color: var(--pearl-white);
      background: var(--ink);
      transition: background .3s ease, box-shadow .3s ease;
    }
    .site-header.scrolled {
      background: rgba(23, 23, 19, 0.96);
      box-shadow: 0 2px 24px rgba(0,0,0,0.18);
    }
    .site-header.light-bg {
      color: var(--ink);
      background: var(--pearl-white);
      border-bottom: 1px solid var(--line);
    }
    .site-header.light-bg .menu-button { border-color: rgba(23,23,19,.3); color: var(--ink); }
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
      transition: color .25s ease;
    }
    .nav a:hover, .nav a:focus-visible { color: var(--golden-cream); }
    .nav a.active { color: var(--warm-sand); }
    .site-header.light-bg .nav a:hover, .site-header.light-bg .nav a:focus-visible { color: var(--warm-sand); }
    .site-header.light-bg .nav a.active { color: var(--warm-sand); }
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

    .reveal { opacity: 0; transform: translateY(34px); transition: opacity .8s ease, transform .8s ease; }
    .reveal.visible { opacity: 1; transform: none; }
    .mobile-only { display: none; }
    .nav a:not(.brand) { position: relative; }
    .nav a:not(.brand)::after { content: ""; position: absolute; left: 0; right: 0; bottom: -7px; height: 1px; background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform .3s ease; }
    .nav a:hover::after, .nav a.active::after { transform: scaleX(1); }
    .footer-nav { display: flex; flex-wrap: wrap; gap: 1.2rem; }
    .page-enter { animation: pageEntrance .65s ease both; }
    @keyframes pageEntrance { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

    .site-footer {
      background: var(--golden-cream);
      padding: 0 0 3rem;
    }
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
        color: var(--pearl-white);
      }
      .nav-links:last-child { justify-content: flex-start; }
      .nav-links.open { display: flex; }
      .nav-links:first-child { display: none; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .reveal { opacity: 1; transform: none; transition: none; }
      * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
    }
`;

export function SiteFont() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Italiana&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

export default function SiteShell({ children, lightBg = false }) {
  const pathname = usePathname();

  useEffect(() => {
    const button = document.querySelector(".menu-button");
    const mobileLinks = document.querySelector("#mobile-links");
    if (!button || !mobileLinks) return;

    function handleMenuClick() {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      mobileLinks.classList.toggle("open", !open);
      button.textContent = open ? "Menu" : "Close";
    }
    function closeMenu() {
      button.setAttribute("aria-expanded", "false");
      mobileLinks.classList.remove("open");
      button.textContent = "Menu";
    }

    button.addEventListener("click", handleMenuClick);
    mobileLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );
    return () => {
      button.removeEventListener("click", handleMenuClick);
      mobileLinks.querySelectorAll("a").forEach(link => link.removeEventListener("click", closeMenu));
    };
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { href: "/collections", label: "Collections" },
    { href: "/approach", label: "Approach" },
    { href: "/customisation", label: "Customisation" },
    { href: "/contact", label: "Contact" },
  ];

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const logoSrc = lightBg ? "/alder-form.svg" : "/alder-form-light.svg";

  return (
    <>
      <header className={`site-header${lightBg ? " light-bg" : ""}`}>
        <nav className="nav shell" aria-label="Main navigation">
          <div className="nav-links desktop-links">
            {leftLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            ))}
          </div>
          <Link className="brand" href="/" aria-label="Alder & Form home">
            <img
              src={logoSrc}
              alt="Alder & Form – Furniture Crafters"
              className="brand-logo"
            />
          </Link>
          <div className="nav-links" id="mobile-links" style={{ justifyContent: "flex-end" }}>
            {leftLinks.map(({ href, label }) => <Link key={href} href={href} className={`mobile-only${pathname === href ? " active" : ""}`}>{label}</Link>)}
            {rightLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            ))}
          </div>
          <button
            className="menu-button"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-links"
          >
            Menu
          </button>
        </nav>
      </header>

      <main key={pathname} className="page-enter" style={{ paddingTop: "86px" }}>{children}</main>

      <div className="site-footer">
        <div className="shell footer">
          <Link className="footer-brand" href="/" aria-label="Alder & Form home">
            <img
              src="/alder-form.svg"
              alt="Alder & Form – Furniture Crafters"
              className="footer-logo"
            />
          </Link>
          <div className="footer-nav"><Link href="/collections">Collections</Link><Link href="/customisation">Customisation</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact</Link></div>
          <span>Crafted for the way you live.</span>
        </div>
      </div>
    </>
  );
}
