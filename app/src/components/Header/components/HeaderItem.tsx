import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  return <li className="menu-item">{children}</li>;
};