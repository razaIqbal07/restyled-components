import styled from 'styled-components'

const StyledLink = styled.a(
  (props) => `
   font-size : ${props.fontSize ? props.fontSize : '12px'};
   font-weight : ${props.fontWeight ? props.fontWeight : '500'};
   letter-spacing  :  ${props.fontSpacing ? props.fontSpacing : '1px'};
   color : ${props.color ? props.color : '#000000'};
   margin : ${props.margin ? props.margin : 'none'};
   margin-top : ${props.marginTop ? props.marginTop : 'none'};
   margin-bottom : ${props.marginBottom ? props.marginBottom : 'none'};
   margin-left : ${props.marginLeft ? props.marginLeft : 'none'};
   margin-right : ${props.marginRight ? props.marginRight : 'none'};
   padding : ${props.padding ? props.padding : 'none'};
   padding-top : ${props.paddingTop ? props.paddingTop : 'none'};
   padding-bottom : ${props.paddingBottom ? props.paddingBottom : 'none'};
   padding-left : ${props.paddingLeft ? props.paddingLeft : 'none'};
   padding-right : ${props.paddingRight ? props.paddingRight : 'none'};
   user-select : ${props.userSelect ? props.userSelect : 'auto'};
   text-decoration :  ${props.textDecoration ? props.textDecoration : 'none'};
  `
)

export default StyledLink
