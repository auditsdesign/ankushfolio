import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects | AnkushFolio" };

export default function Projects() {
  return (
    <section style={{ padding: "6rem 0 4rem" }}>
      <div className="container-xl px-3">
        <h1 className="display-hero mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>Projects</h1>
        <p className="lead-muted mb-5">A curated selection of projects built to perform and scale</p>
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6" key={p.slug}><ProjectCard project={p} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
