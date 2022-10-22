import {
  defaultTheme,
  Icon,
  Link,
  Row,
  Spacer,
  Tag,
  Title,
  useDevice,
} from "@gamiui/standard";
import React, { Fragment } from "react";
import styled from "@emotion/styled";
import * as S from "./styles";
import NextLink from "next/link";

export interface ITopbar {
  hasSidebar: boolean;
  toggle: () => void;
}

const LinkItem = styled(Link)`
  color: ${defaultTheme.light.primary.jordyBlue};
  background: transparent;
`;

const Topbar = ({ toggle }: ITopbar) => {
  const { device } = useDevice();

  return (
    <S.Topbar padding="1rem">
      <Row justifyContent="space-between">
        <S.TopbarLeft>
          <NextLink href={`/`}>
            <Link href="/" style={{ background: "transparent" }}>
              <Row>
                <Icon name="brain" size="30px" />
                <Spacer direction="right" />
                <Title level="h2">GamiBlog</Title>
              </Row>
            </Link>
          </NextLink>
        </S.TopbarLeft>

        <S.TopbarRight>
          <Row>
            {device !== "phone" && (
              <Fragment>
                <NextLink href={`/`}>
                  <LinkItem fontWeight="bold" text="Home" href={`/`} />
                </NextLink>
                <Spacer direction="left" />
              </Fragment>
            )}

            <Spacer direction="left" />

            <LinkItem
              isExternal
              fontWeight="bold"
              href={`https://github.com/Yei-Linux/GamiUI`}
            >
              <Icon name="github" size="20px" />
            </LinkItem>

            {device !== "desktop" && (
              <Fragment>
                <Spacer direction="left" />
                <Icon onClick={toggle} name="hamburger" size="20px" />
              </Fragment>
            )}
          </Row>
        </S.TopbarRight>
      </Row>
    </S.Topbar>
  );
};

export default Topbar;
