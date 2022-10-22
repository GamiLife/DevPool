import React from "react";
import { blogs } from "../../constants/blogs";
import Posts from "../Posts";

export interface IBlogs {}

const Blogs = ({}: IBlogs) => {
  return <Posts title="Last Blog Posts 💪" posts={blogs} />;
};

export default Blogs;
