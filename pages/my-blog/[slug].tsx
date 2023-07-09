import {
  Container,
  RichText,
  Tag,
  Title,
  defaultTheme,
} from '@gamiui/standard';
import fs from 'fs';
import matter from 'gray-matter';
import { TTopic, pathPosts } from '../../src/components/MyTopics';
import WithLayout from '../../src/hocs/WithLayout';
import WithMainLayout from '../../src/hocs/WithMainLayout';
import { MarkdownText } from '../../src/components/MarkdownText';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync(pathPosts);

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

interface IParams {
  params: { slug: string };
}

export async function getStaticProps({ params }: IParams) {
  try {
    if (!params) throw new Error('Params is undefined');

    const { slug } = params;
    if (!slug) throw new Error('Slug is undefined');

    const fileContent = fs.readFileSync(`${pathPosts}/${slug}.md`, 'utf-8');
    const { data, content: markdown } = matter(fileContent);

    return {
      props: { metadata: data, markdown },
    };
  } catch (error) {
    return { props: {} };
  }
}

export interface ISinglePost {
  metadata: TTopic;
  markdown: string;
}

const infoCss = () => css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetadataInfo = styled(Container)`
  ${infoCss()}
  margin-bottom: 1rem;
`;

const Tags = styled(Container)`
  ${infoCss()}
  margin-bottom: 4rem;

  .tag {
    font-size: 12px;
  }
`;

const SinglePost: React.FC<ISinglePost> = ({ metadata, markdown }) => {
  return (
    <Container padding="1rem">
      <Title level="h1">{metadata?.title}</Title>
      <MetadataInfo>
        <RichText text={metadata?.releaseDate} />
        <RichText text={metadata?.readingTime} />
      </MetadataInfo>

      <Tags>
        {metadata.tags?.map((tag) => (
          <Tag
            text={tag}
            className="tag"
            rounded="sm"
            padding="5px"
            background={defaultTheme.light.primary.mediumPurple}
            color="white"
          />
        ))}
      </Tags>

      {markdown && <MarkdownText markdown={markdown} />}
    </Container>
  );
};

export default WithLayout()(WithMainLayout({})(SinglePost));
