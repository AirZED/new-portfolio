interface TopicProp {
  content: string;
}

const Topic = ({ content }: TopicProp): JSX.Element => {
  return <h2 className="inline rounded text-[#3d3d3d] font-black text-[5rem] max-[800px]:text-[3rem] max-[500px]:text-[2rem]">{content}</h2>;
};

export default Topic;
