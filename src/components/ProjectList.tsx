import Link from 'next/link';


const ProjectList = ({ projects }: { projects: any[] }) => (
  <div>
    {projects.map((project) => (
      <Link key={project._id} href={`/projects/${project.slug.current}`}>
        <a>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </a>
      </Link>
    ))}
  </div>
);

export default ProjectList;
