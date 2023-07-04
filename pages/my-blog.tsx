import type { NextPage } from 'next';
import WithLayout from '../src/hocs/WithLayout';
import WithMainLayout from '../src/hocs/WithMainLayout';
import MyBlog from '../src/components/MyBlog';

const MyBlogPage: NextPage = () => {
  return <MyBlog />;
};

export default WithLayout()(WithMainLayout({})(MyBlogPage));
