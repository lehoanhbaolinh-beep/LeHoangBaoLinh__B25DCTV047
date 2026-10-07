function ProjectCard({ name, description }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
