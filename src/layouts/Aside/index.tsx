import { Container, Icon, Title } from '@gamiui/standard';
import React from 'react';
import { featuredTags, sidebar } from '../../constants/sidebar';
import * as S from './styles';

export interface IAside {}

const Aside = ({}: IAside) => {
  return (
    <S.Aside width="fit">
      <S.MainAside>
        {sidebar
          .filter(({ isEnable }) => isEnable === true)
          .map(({ iconId, text, href }, index) => (
            <S.SubMenuLink>
              <S.SubMenuItem
                isOpen={false}
                title={text}
                href={href}
                contentLeft={<Icon name={iconId} color="#A760FF" />}
                hasIcon={false}
              />
            </S.SubMenuLink>
          ))}
      </S.MainAside>

      {/* <Container>
        <Title level="h3" padding="1rem">
          Popular Tags
        </Title>
        <S.MainAside>
          {featuredTags.map(({ text, href }, index) => (
            <S.SubMenuLink>
              <S.SubMenuItem
                isOpen={false}
                title={text}
                href={href}
                contentLeft={<Icon name="rocket" color="#A760FF" />}
                hasIcon={false}
              />
            </S.SubMenuLink>
          ))}
        </S.MainAside>
      </Container> */}
    </S.Aside>
  );
};

export default Aside;
