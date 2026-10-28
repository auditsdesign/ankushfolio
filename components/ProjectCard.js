import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="pcard">
      <div className="pcover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <h3>{project.title}</h3>
      <p className="clamp2">{project.intro}</p>
    </Link>
  );
}
