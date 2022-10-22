/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import styled from "@emotion/styled";
import { Container, Drawer, Layout, useDevice } from "@gamiui/standard";

import React, { Fragment, useState } from "react";
import Aside from "../layouts/Aside";
import Footer from "../layouts/Footer";
import Topbar from "../layouts/Topbar";

interface Props {
  hasStickyProfile?: boolean;
  hasHeader?: boolean;
  HeaderChildren?: React.ElementType;
  hasFooter?: boolean;
  FooterChildren?: React.ElementType;
  hasSidebar?: boolean;
}

const defaultProps = {
  hasHeader: true,
  hasFooter: true,
  HeaderChildren: Topbar,
  FooterChildren: Footer,
  hasSidebar: true,
};

const LayoutBody = styled(Container)`
  padding: 0 1rem;
`;

const WithLayout =
  ({
    hasHeader,
    HeaderChildren = Topbar,
    hasFooter,
    FooterChildren = Footer,
    hasSidebar,
  }: Props = defaultProps) =>
  (WrappedComponent: any) =>
  (componentProps: any) => {
    const [open, setOpen] = useState(false);
    const { device } = useDevice();

    return (
      <Fragment>
        <Layout>
          {hasHeader && (
            <Layout.Header isSticky>
              {
                <HeaderChildren
                  toggle={() => setOpen(!open)}
                  hasSidebar={hasSidebar}
                />
              }
            </Layout.Header>
          )}

          {device !== "desktop" && (
            <Drawer
              style={{ padding: "1rem 0" }}
              onClose={() => setOpen(!open)}
              open={open}
            >
              <Aside />
            </Drawer>
          )}

          <Layout.Content>
            <LayoutBody>
              <WrappedComponent {...componentProps} />
            </LayoutBody>
          </Layout.Content>
          {hasFooter && <Layout.Footer>{<FooterChildren />}</Layout.Footer>}
        </Layout>
      </Fragment>
    );
  };

export default WithLayout;
