import Link from "next/link";
import Logo from "@/components/Logo";
import Ticker from "@/components/Ticker";
import ProjectCard from "@/components/ProjectCard";
import ServicesTabs from "@/components/ServicesTabs";
import { site, heroImages, projects, writing, writing2 } from "@/lib/data";

const toItems = (arr) => arr.map((src) => ({ src, w: 303 }));
const initials = { LinkedIn: "in", Instagram: "ig", Medium: "M", Framer: "F" };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-top">
          <h1 className="chip">Where pixels meet magic</h1>
          <Logo />
          <p className="hero-desc">Turning complex ideas into simple products<br />Focused on users, backed by outcomes</p>
          <Link href="/#services" className="sq-btn" aria-label="Scroll to services">↓</Link>
        </div>
        <Ticker items={heroImages} height={null} speed={45} bottom className="hero-ticker" />
      </section>

      {/* Selected projects */}
      <section className="block container-xl">
        <h2 className="h-lg">Selected Projects</h2>
        <p className="sub">A curated selection of projects built to perform and scale</p>
        <div className="row g-4 mt-2">
          {projects.map((p) => (
            <div className="col-md-6" key={p.slug}><ProjectCard project={p} /></div>
          ))}
        </div>
        <div className="text-center mt-5"><Link href="/projects" className="pbtn">All Projects</Link></div>
      </section>

      {/* Services */}
      <section id="services" className="block alt">
        <div className="container-xl text-center">
          <h2 className="h-lg">Services</h2>
          <p className="sub dark mx-auto">
            Looking for web design and development in one place? Or a clean, intuitive UI for your next web app?{" "}
            <span>I help turn ideas into clear, functional, and scalable digital products.</span> built with purpose and precision.
            From concept to execution, every detail is crafted to make an impact.
          </p>
          <p className="small-p mx-auto">
            Explore my latest <Link href="/projects" className="text-decoration-underline text-dark">projects</Link> or dive into my ideas to see how I approach problem-solving through design.
          </p>
          <ServicesTabs portrait={site.portrait} />
          <p className="sub dark mx-auto mt-5 mb-3">This feels like a fit? <a href="#contact" className="text-dark text-decoration-underline">Let’s build your next project.</a></p>
          <a href="#contact" className="pbtn">Get in touch</a>
        </div>
      </section>

      {/* Writing (dark, tilted tickers) */}
      <section className="container-xl py-5" id="ideas">
        <div className="dark-card">
          <div className="tilt">
            <Ticker items={toItems(writing)} height={170} speed={50} />
            <Ticker items={toItems(writing2)} height={170} speed={60} reverse />
          </div>
          <div className="dark-content">
            <h2 className="h-lg text-white">Design is more than what you see</h2>
            <p className="sub light mx-auto">From research to real-world product challenges, I share how design decisions actually shape user experiences and business outcomes.</p>
            <a className="pbtn blue" href="https://medium.com/@Ankush.A" target="_blank" rel="noreferrer">Explore my writing</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="block container-xl">
        <div className="row g-5 align-items-center justify-content-center">
          <div className="col-md-4 col-lg-3 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="profile" src={site.portrait} alt="Ankush" />
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>{initials[s.label]}</a>
              ))}
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <h2 className="h-lg text-start">Hey<span className="g">,</span> im Ankush<span className="b">.</span></h2>
            <p className="about-p">I design websites and digital products with a focus on creating simple, intuitive, and effective user experiences. Over the years, I’ve worked on various projects from landing pages to complex product tools, helping ideas turn into functional digital solutions.</p>
            <p className="about-p"><span>So if you’re looking for a Product designer and web developer</span> to create distinctive, high-quality digital experiences, <span>feel free to reach out by email or connect with me on social media.</span></p>
            <div id="contact" className="contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href="tel:9306877908">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
