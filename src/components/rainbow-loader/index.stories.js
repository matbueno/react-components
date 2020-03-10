import React from "react";
import { storiesOf } from "@storybook/react";

import Loading from "./index";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

storiesOf("atoms/rainbow-loading", module).add("default", () => (
  <div style={containerStyle}>
    <Loading />
  </div>
));
