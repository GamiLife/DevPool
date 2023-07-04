import styled from '@emotion/styled';
import { Container, Menu } from '@gamiui/standard';

export const MainAside = styled(Container)`
  width: 100%;
`;

export const SubMenuLink = styled(Container)`
  width: 100%;
`;

export const SubMenuItem = styled(Menu.SubMenu)`
  min-width: auto;
  &:hover {
    background-color: #ecf0ff;

    a {
      background-color: transparent;
    }
  }
`;

export const Aside = styled(Container)`
  max-width: 200px;
`;
