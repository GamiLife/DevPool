import { Container, Title } from '@gamiui/standard';
import Post, { IPost } from '../Posts/post';

export interface IPosts {
  title: string;
  posts: IPost[];
}

const Posts = ({ title, posts }: IPosts) => {
  return (
    <Container>
      <Container>
        <Title level="h2">{title}</Title>
      </Container>
      {posts.map(({ title, description, tags, releaseDate, src, link }) => (
        <Post
          link={link}
          src={src}
          title={title}
          description={description}
          tags={tags}
          releaseDate={releaseDate}
          hasCode
        />
      ))}
    </Container>
  );
};

export default Posts;
