import styled from "@emotion/styled";
import { Container } from "@gamiui/standard";

export const Aside = styled(Container)`
  grid-area: aside;
`;
export const Body = styled(Container)`
  grid-area: body;
`;

export const Sections = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas: "aside aside body body body";

  grid-template-rows: auto;
  grid-template-columns:
    minmax(auto, 100px) minmax(auto, 100px) minmax(auto, 250px)
    minmax(auto, 250px) minmax(auto, 250px);

  &.not__aside {
    grid-template-areas: "body body body body body";

    grid-template-columns:
      minmax(auto, 150px) minmax(auto, 150px)
      minmax(auto, 150px)
      minmax(auto, 150px) minmax(auto, 150px);
  }
`;
