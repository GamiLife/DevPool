import React from "react";
import { jobs } from "../../constants/jobs";
import Posts from "../Posts";

export interface IJobs {}

const Jobs = ({}: IJobs) => {
  return <Posts title="Last Jobs Posts 💪" posts={jobs} />;
};

export default Jobs;
