import { topics } from "../../constants/topics";
import Posts from "../Posts";

const Topics = () => {
  return <Posts title="Last Dev Posts 💪" posts={topics} />;
};

export default Topics;
