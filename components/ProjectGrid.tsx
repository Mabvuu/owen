import ProjectCard from "./ProjectCard";

type Project = {
  code: string;
  title: string;
  category: string;
  location: string;
  status: string;
};

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.code}
          code={project.code}
          title={project.title}
          category={project.category}
          location={project.location}
          status={project.status}
        />
      ))}
    </section>
  );
}