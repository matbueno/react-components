import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/button";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

storiesOf("atoms/button", module)
  .add("default", () => (
    <div style={containerStyle}>
      <Button>DEFAULT</Button>
    </div>
  ))
  .add("disabled", () => (
    <div style={containerStyle}>
      <Button disabled>DISABLED</Button>
    </div>
  ))
  .add("loading", () => (
    <div style={containerStyle}>
      <Button loading>LOADING</Button>
    </div>
  ))
  .add("block", () => (
    <div style={containerStyle}>
      <Button isBlock>BLOCK</Button>
    </div>
  ))
  .add("link", () => (
    <div style={containerStyle}>
      <Button type="link">LINK</Button>
    </div>
  ))
  .add("secondary", () => (
    <div style={containerStyle}>
      <Button type="secondary">SECONDARY</Button>
    </div>
  ));
