import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | AnkushFolio` : "Project" };
}

export default function ProjectPage({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];

  return (
    <section style={{ padding: "6rem 0 4rem" }}>
      <div className="container-xl px-3">
        <Link href="/projects" className="text-secondary">Back to projects</Link>
        <h1 className="fw-bold mt-3 mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>{p.title}</h1>
        <div className="mb-4">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.title} className="w-100 rounded-4 mb-5" style={{ maxHeight: 520, objectFit: "cover" }} />

        <div className="prose">
          <p className="fs-5">{p.intro}</p>
          {p.problem && (<><h2>Problem</h2><p>{p.problem}</p></>)}
          {p.solution && (<><h2>Solution</h2><p>{p.solution}</p></>)}
          {p.features && (
            <>
              <h2>Key features</h2>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </>
          )}
          {p.outcome && (<><h2>Outcome</h2><p>{p.outcome}</p></>)}
          {p.body && p.body.map((t, i) => <p key={i}>{t}</p>)}
        </div>

        <div className="mt-5 pt-4 border-top">
          <span className="text-secondary d-block mb-1">Next project</span>
          <Link href={`/projects/${next.slug}`} className="h4 fw-semibold">{next.title}</Link>
        </div>
      </div>
    </section>
  );
}
