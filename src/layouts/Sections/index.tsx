import classNames from "classnames";
import React from "react";
import * as S from "./styles";

export interface ISections {
  children: React.ReactNode;
  className?: string;
}

export interface ISectionMain {
  hasAside?: boolean;
}

const Aside = ({ children, className }: ISections) => (
  <S.Aside as="aside" className={className}>
    {children}
  </S.Aside>
);

const Body = ({ children, className }: ISections) => (
  <S.Body as="section" className={className}>
    {children}
  </S.Body>
);

const Sections = ({
  children,
  className,
  hasAside,
}: ISections & ISectionMain) => {
  return (
    <S.Sections
      className={classNames(className, {
        not__aside: !hasAside,
      })}
    >
      {children}
    </S.Sections>
  );
};

Sections.Aside = Aside;
Sections.Body = Body;

export default Sections;
