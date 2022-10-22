import type { NextPage } from "next";
import Jobs from "../src/components/Jobs";
import WithLayout from "../src/hocs/WithLayout";
import WithMainLayout from "../src/hocs/WithMainLayout";

const JobsPage: NextPage = () => {
  return <Jobs />;
};

export default WithLayout()(WithMainLayout({})(JobsPage));
