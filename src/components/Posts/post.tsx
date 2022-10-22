import { Container, Icon, Link, RichText, Title } from "@gamiui/standard";
import * as React from "react";
import * as S from "./styles";
import classNames from "classnames";
import NextLink from "next/link";

export interface IPost {
  hasCode?: boolean;
  releaseDate?: string;
  src?: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

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
      className={classNames("flex", "justify-between", "items-center")}
    >
      <Container className={classNames("post__image")}>
        <S.PostImage src={src} />
      </Container>

      <Container className={classNames("post__body")}>
        {releaseDate && (
          <Container className={classNames("post__bodychild")}>
            <RichText text={releaseDate.toUpperCase()} />
          </Container>
        )}
        <Container className={classNames("post__bodychild")}>
          <Title level="h3">{title}</Title>
        </Container>
        <Container className={classNames("post__bodychild")}>
          <Title level="h5" fontWeight="medium">
            {description}
          </Title>
        </Container>
        {!!tags.length && (
          <S.Tags className={classNames("flex", "post__bodychild")}>
            {tags.map((tag) => (
              <S.TagCustom text={tag} padding="8px" />
            ))}
          </S.Tags>
        )}
        <S.Actions
          className={classNames("flex", "justify-end", "post__bodychild")}
        >
          <NextLink href={link}>
            <Link href={link}>
              <S.ActionsButton rounded="full" padding="10px 12px">
                <Icon name="preview" />
              </S.ActionsButton>
            </Link>
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
