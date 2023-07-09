import Posts from '../shared/Posts';
import { IPost } from '../shared/Posts/post';

export const pathPosts = 'public/posts';

export type TTopic = IPost;

export interface ITopics {
  topics: Array<TTopic>;
}

function MyTopics({ topics }: ITopics) {
  return <Posts title="Last Dev Posts 💪" posts={topics ?? []} />;
}

export default MyTopics;
