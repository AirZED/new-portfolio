import style from "./../styles/Topic.module.css";

interface TopicProp {
  content: string;
}

const Topic = ({ content }: TopicProp): JSX.Element => {
  return <h2 className={style.topic}>{content}</h2>;
};

export default Topic;
