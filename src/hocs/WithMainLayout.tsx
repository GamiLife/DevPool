import styled from "@emotion/styled";
import { useDevice } from "@gamiui/standard";
import React from "react";
import Aside from "../layouts/Aside";
import Sections from "../layouts/Sections";

const SectionAside = styled(Sections.Aside)`
  border: 1px solid rgb(219 219 219);
  border-radius: 0.5em;
  position: sticky;
  top: 100px;
  height: fit-content;
`;

const SectionHome = styled(Sections)`
  margin: auto;
  width: fit-content;
`;

interface IWithMainLayout {}

const defaultProps = {};

const WithMainLayout =
  ({}: IWithMainLayout = defaultProps) =>
  (WrappedComponent: React.ElementType) =>
  (props: Record<string, unknown>) => {
    const { device } = useDevice();
    const hasAside = device === "desktop";

    return (
      <SectionHome hasAside={hasAside}>
        {hasAside && (
          <SectionAside>
            <Aside />
          </SectionAside>
        )}
        <Sections.Body>
          <WrappedComponent {...props} />
        </Sections.Body>
      </SectionHome>
    );
  };

export default WithMainLayout;
