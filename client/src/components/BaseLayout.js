import React from "react";
import Menu from "./Menu";

function BaseLayout(props) {
  return (
    <div>
      <Menu />
      <div>{props.children}</div>
    </div>
  );
}

export default BaseLayout;
