import React from 'react';
import { blogs } from '../../constants/blogs';
import Posts from '../Posts';

export interface IMyBlog {}

const MyBlog = ({}: IMyBlog) => {
  return <Posts title="My Last Posts 💪" posts={blogs} />;
};

export default MyBlog;
