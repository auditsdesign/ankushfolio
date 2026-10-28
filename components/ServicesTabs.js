"use client";
import { useState } from "react";

const tabs = ["Product design", "Branding", "Web & App Design"];
const blocks = [3, 2, 4];

export default function ServicesTabs({ portrait }) {
  const [i, setI] = useState(0);
  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map((t, n) => (
          <button key={t} role="tab" aria-selected={i === n} className={`tab${i === n ? " on" : ""}`} onClick={() => setI(n)}>{t}</button>
        ))}
      </div>
      <div className="mock" aria-hidden="true">
        <div className="mock-side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} alt="" />
          <b /><b /><b /><b />
        </div>
        <div className="mock-main">
          <div className="mock-bar"><u /></div>
          <div className="mock-grid">
            {Array.from({ length: blocks[i] }).map((_, n) => <div key={n}><s /><b /><b /></div>)}
          </div>
        </div>
      </div>
    </>
  );
}
