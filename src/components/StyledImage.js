import styled from "styled-components";

const StyledImage = styled.img(
  (props) => `
   width : ${props.width ? props.width : "100%"};
   height : ${props.height ? props.height : "100%"};
   border-radius :  ${props.borderRadius ? props.borderRadius : "none"};
  `
);

export default StyledImage;
