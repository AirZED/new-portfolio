interface ProjectProps {
  topic: string;
  description?: string;
}

const Project = ({ topic, description }: ProjectProps): JSX.Element => {
  return (
    <div>
      <p>{topic}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
