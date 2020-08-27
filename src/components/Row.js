import React from "react";
import FlexWrapper from "./FlexWrapper";

const Row = (props) => (
  <FlexWrapper
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
    {...props}
  >
    {props.children}
  </FlexWrapper>
);

export default Row;
