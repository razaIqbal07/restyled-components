import styled from 'styled-components'

const StyledImage = styled.img(
  (props) => `
   width : ${props.width ? props.width : '100%'};
   height : ${props.height ? props.height : '100%'};
   border-radius :  ${props.borderRadius ? props.borderRadius : 'none'};
   min-width: ${props.minWidth ? props.minWidth : 'auto'};
   min-height: ${props.minHeight ? props.minHeight : 'auto'};
   background: ${props.background ? props.background : 'none'};
   color :  ${props.color ? props.color : 'none'};
   border : ${props.border ? props.border : 'none'};
   border-bottom : ${props.borderBottom ? props.borderBottom : ''};
   border-radius : ${props.borderRadius ? props.borderRadius : 'none'};
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
   position : ${props.position ? props.position : 'static'};
  `
)

export default StyledImage
