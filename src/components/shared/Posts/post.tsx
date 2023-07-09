import { Container, Icon, RichText, Title } from '@gamiui/standard';
import * as React from 'react';
import * as S from './styles';
import classNames from 'classnames';
import NextLink from 'next/link';

export type IPost = {
  title: string;
  description: string;
  tags: string[];
  link: string;

  readingTime?: string;
  releaseDate?: string;
  src?: string;
  hasCode?: boolean;
};

const Post = ({
  hasCode,
  title,
  description,
  tags,
  releaseDate,
  src,
  link,
}: IPost) => {
  return (
    <S.Post
      width="fit"
      margin="2rem 0"
      padding="1rem"
      className={classNames('flex', 'justify-between', 'items-center')}
    >
      <Container className={classNames('post__image')}>
        <S.PostImage src={src} maxWidth="250px" />
      </Container>

      <Container className={classNames('post__body')}>
        {releaseDate && (
          <Container className={classNames('post__bodychild')}>
            <RichText text={releaseDate.toUpperCase()} />
          </Container>
        )}
        <Container className={classNames('post__bodychild')}>
          <Title level="h3">{title}</Title>
        </Container>
        <Container className={classNames('post__bodychild')}>
          <Title level="h5" fontWeight="medium">
            {description}
          </Title>
        </Container>
        {!!tags.length && (
          <S.Tags className={classNames('flex', 'post__bodychild')}>
            {tags.map((tag) => (
              <S.TagCustom text={tag} padding="8px" />
            ))}
          </S.Tags>
        )}
        <S.Actions
          className={classNames('flex', 'justify-end', 'post__bodychild')}
        >
          <NextLink href={link}>
            <S.ActionsButton rounded="full" padding="10px 12px">
              <Icon name="preview" />
            </S.ActionsButton>
          </NextLink>
          {hasCode && (
            <S.ActionsButton rounded="full" padding="10px 12px">
              <Icon name="code" />
            </S.ActionsButton>
          )}
        </S.Actions>
      </Container>
    </S.Post>
  );
};

export default Post;
