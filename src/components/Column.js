import React from "react";
import FlexWrapper from "./FlexWrapper";

const Column = (props) => (
  <FlexWrapper
    flexDirection="column"
    justiflyContent="flex-start"
    alignItems="center"
    {...props}
  >
    {props.children}
  </FlexWrapper>
);

export default Column;
