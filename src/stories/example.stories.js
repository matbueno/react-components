import React from "react";
import { storiesOf } from "@storybook/react";

import Loading from "../components/rainbow-loader";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

storiesOf("example", module).add("bit-rainbow-loader", () => (
  <div style={containerStyle}>
    <Loading />
  </div>
));
