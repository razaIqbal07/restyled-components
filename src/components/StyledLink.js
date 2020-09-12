import styled from 'styled-components'

const StyledLink = styled.a(
  (props) => `
   font-size : ${props.fontSize ? props.fontSize : '12px'};
   font-weight : ${props.fontWeight ? props.fontWeight : '500'};
   letter-spacing  :  ${props.fontSpacing ? props.fontSpacing : '1px'};
   color : ${props.color ? props.color : '#333'};
   margin : ${props.margin ? props.margin : 'none'};
   padding : ${props.padding ? props.padding : 'none'};
   user-select : ${props.userSelect ? props.userSelect : 'auto'};
  text-decoration :  ${props.textDecoration ? props.textDecoration : 'none'};
  
  `
)

export default StyledLink
