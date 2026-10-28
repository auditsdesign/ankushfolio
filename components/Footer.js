import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer container-xl">
      <div className="footer-card">
        <div className="small text-secondary mb-2">Footer</div>
        <div className="footer-links">
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/projects">Projects</Link>
          <a href="https://medium.com/@Ankush.A" target="_blank" rel="noreferrer">My Writing</a>
        </div>
        <div className="footer-logo"><Logo light /></div>
        <div className="small text-secondary fw-medium">© 2026 Ankkushfolio All rights reserved.</div>
      </div>
    </footer>
  );
}
