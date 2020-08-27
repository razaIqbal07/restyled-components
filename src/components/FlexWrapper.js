import styled from "styled-components";

const FlexWrapper = styled.div(
  (props) => `
    display: flex;
    flex-direction : ${props.flexDirection ? props.flexDirection : "row"};
    justify-content: ${
      props.justifyContent ? props.justifyContent : "flex-start"
    };
    align-items: ${props.alignItems ? props.alignItems : "flex-start"};
    width: ${props.width ? props.width : "auto"};
    height: ${props.height ? props.height : "auto"};
    background: ${props.background ? props.background : "none"};
    color :  ${props.color ? props.color : "none"};
    border : ${props.border ? props.border : "none"};
    border-bottom : ${props.borderBottom ? props.borderBottom : ""};
    border-radius : ${props.borderRadius ? props.borderRadius : "none"};
    margin : ${props.margin ? props.margin : "none"};
    padding : ${props.padding ? props.padding : "none"};
    position : ${props.position ? props.position : "static"};
    outline :  ${props.outline ? props.outline : "none"};
    overflow: ${props.overflow ? props.overflow : "none"};
    overflow-x: ${props.overflowX ? props.overflowX : "none"};
    overflow-y: ${props.overflowY ? props.overflowY : "none"};
    box-sizing : ${props.boxSizing ? props.boxSizing : "content-box"};
  `
);

export default FlexWrapper;
