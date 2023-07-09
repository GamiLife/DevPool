import type { NextPage } from 'next';

import MyTopics, { TTopic } from '../../src/components/MyTopics';
import WithLayout from '../../src/hocs/WithLayout';
import WithMainLayout from '../../src/hocs/WithMainLayout';

import fs from 'fs';
import matter from 'gray-matter';

export const pathPosts = 'public/posts';

export async function getStaticProps() {
  try {
    const files = fs.readdirSync(pathPosts);

    const topics = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const fileContent = fs.readFileSync(`${pathPosts}/${slug}.md`, 'utf-8');
      const { content, data: matterParsed } = matter(fileContent);

      const postInfo = {
        title: matterParsed?.title,
        description: matterParsed?.description,
        src: matterParsed?.src,
        releaseDate: matterParsed?.releaseDate,
        tags: matterParsed?.tags,
        link: `/my-blog/${slug}`,
      };

      return postInfo;
    });

    return {
      props: { topics },
    };
  } catch (error) {
    return {
      props: { topics: [] },
    };
  }
}

export interface ITopic {
  topics: Array<TTopic>;
}

const MyBlogPage: NextPage<ITopic> = ({ topics }) => {
  return <MyTopics topics={topics ?? []} />;
};

export default WithLayout()(WithMainLayout({})(MyBlogPage));
