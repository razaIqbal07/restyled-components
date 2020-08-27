import styled from "styled-components";

const SizedBox = styled.div(
  (props) => `
    width: ${props.width ? props.width : "100%"};
    height: ${props.height ? props.height : "100%"};
    background: ${props.background ? props.background : "none"};
    color :  ${props.color ? props.color : "none"};
    border : ${props.border ? props.border : "none"};
    border-radius : ${props.borderRadius ? props.borderRadius : "none"};
    margin : ${props.margin ? props.margin : "none"};
    padding : ${props.padding ? props.padding : "none"};
    position : ${props.position ? props.position : "static"};
    outline :  ${props.outline ? props.outline : "none"};
    overflow-x: ${props.overflowX ? props.overflowX : "none"};
    overflow-y: ${props.overflowY ? props.overflowY : "none"};
  `
);

export default SizedBox;
