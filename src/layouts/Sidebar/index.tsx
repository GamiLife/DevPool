import { Row, Title, Menu, Icon } from "@gamiui/standard";
import React from "react";
import NextLink from "next/link";
import { siderbar } from "../../constants/layouts";

export interface ISidebar {}

const Sidebar = ({}: ISidebar) => {
  return (
    <div>
      <Row>
        <Title level="h2">{siderbar.title}</Title>
      </Row>
      <div>
        <Menu>
          {siderbar.sections.map(
            ({ title, afterIcon, items, basepath }, index) => (
              <Menu.SubMenu
                key={index}
                isOpen={false}
                title={title}
                icon={<Icon name={afterIcon} />}
              >
                <Menu>
                  {items.map(({ title, hasIcon, href, icon }, subIndex) => (
                    <NextLink href={`/docs/${basepath}/${href}`} key={subIndex}>
                      <Menu.SubMenu
                        isOpen={false}
                        title={title}
                        href={`/docs/${basepath}/${href}`}
                        contentLeft={<Icon name="check" />}
                        hasIcon={hasIcon}
                        icon={<Icon name={icon} />}
                      />
                    </NextLink>
                  ))}
                </Menu>
              </Menu.SubMenu>
            )
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
