import Link from "next/link";

type ProjectCardProps = {
  code: string;
  title: string;
  category: string;
  location: string;
  status: string;
};

export default function ProjectCard({
  code,
  title,
  category,
  location,
  status,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${code}`} className="group border border-black">
      <div className="h-80 bg-black transition group-hover:bg-neutral-800" />

      <div className="p-5">
        <div className="mb-6 flex items-center justify-between text-sm">
          <span>{code}</span>
          <span>{status}</span>
        </div>

        <h2 className="text-3xl font-semibold">{title}</h2>

        <div className="mt-4 flex items-center justify-between text-sm uppercase tracking-wide">
          <span>{category}</span>
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
}