// importing from react-dom
import { Link } from "react-router-dom";

export type ProjectProps = {
  topic: string;
  image: string;
  doneAt: string;
  stack: string;
  description?: string;
  url: string;
  id: number | string;
  category: string;
  github: string;
};

const Project = ({
  topic,
  image,
  doneAt,
  stack,
  id,
}: ProjectProps): JSX.Element => {
  return (
    <Link to={`/projects/${id}`} className="group relative h-auto w-full border-b-[0.5px] border-[var(--lessdark-bg)]/50 cursor-pointer text-[var(--dark-bg)] pt-12 block active:[&_*]:text-[var(--lessdark-bg)] max-[800px]:p-0 max-[800px]:mb-4 max-[800px]:border-none">
      <div className="flex w-full h-auto items-baseline justify-between max-[800px]:p-0 max-[800px]:pointer-events-none">
        <img
          src={image}
          className="right-0 top-0 bottom-0 m-auto absolute perspective-[100px] rotate-x-[0.5deg] rotate-y-[-0.5deg] scale-100 invisible w-0 opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:w-1/2 max-[800px]:static max-[800px]:w-full max-[800px]:opacity-100 max-[800px]:visible max-[800px]:transform-none max-[800px]:rounded"
          alt={topic}
        />
        <div className="max-[800px]:absolute max-[800px]:h-24 max-[800px]:bg-[var(--dark-bg)] max-[800px]:bottom-0 max-[800px]:right-0 max-[800px]:left-0 max-[800px]:p-2 max-[800px]:px-4 max-[800px]:flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:rounded-b">
          <h1 className="font-normal text-[3rem] max-[1200px]:font-light max-[1200px]:text-[2.5rem] max-[800px]:text-[2rem] max-[800px]:font-black max-[800px]:text-[var(--light-bg)] max-[500px]:text-[1.1rem]">{topic}</h1>
          <p className="font-extralight text-[1.5rem] max-[1200px]:font-thin max-[1200px]:text-[1.3rem] max-[800px]:text-[1.1rem] max-[800px]:font-light max-[800px]:text-[var(--light-bg)] max-[500px]:text-[0.8rem]">{stack}</p>
        </div>
        <p className="text-[3rem] max-[1200px]:text-[2rem] max-[800px]:absolute max-[800px]:top-0 max-[800px]:right-4 max-[800px]:p-2 max-[800px]:text-[var(--light-bg)] max-[800px]:font-black max-[800px]:bg-[var(--dark-bg)] max-[800px]:rounded-b max-[800px]:text-[1.5rem] max-[500px]:text-[0.7rem]">/{doneAt}</p>
      </div>
    </Link>
  );
};

export default Project;
