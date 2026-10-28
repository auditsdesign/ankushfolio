"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="pillnav">
      <button className="pill-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="dash" />
      </button>
      {open && (
        <ul className="menu">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
