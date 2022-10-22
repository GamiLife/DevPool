import type { NextPage } from "next";
import Blogs from "../src/components/Blogs";
import WithLayout from "../src/hocs/WithLayout";
import WithMainLayout from "../src/hocs/WithMainLayout";

const BlogsPage: NextPage = () => {
  return <Blogs />;
};

export default WithLayout()(WithMainLayout({})(BlogsPage));
