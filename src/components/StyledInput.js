import styled from 'styled-components'

const StyledInput = styled.input(
  (props) => `
   width : ${props.width ? props.width : 'auto'};
   height : ${props.height ? props.height : 'auto'};
   font-size : ${props.fontSize ? props.fontSize : '12px'};
   font-weight : ${props.fontWeight ? props.fontWeight : '500'};
   letter-spacing  :  ${props.fontSpacing ? props.fontSpacing : '1px'};
   color : ${props.color ? props.color : '#333'};
   margin : ${props.margin ? props.margin : 'none'};
   margin-top : ${props.marginTop ? props.marginTop : 'none'};
   margin-bottom : ${props.marginBottom ? props.marginBottom : 'none'};
   margin-left : ${props.marginLeft ? props.margin : 'none'};
   margin-right : ${props.marginRight ? props.margin : 'none'};
   padding : ${props.padding ? props.padding : 'none'};
   padding-top : ${props.paddingTop ? props.paddingTop : 'none'};
   padding-bottom : ${props.paddingBottom ? props.paddingBottom : 'none'};
   padding-left : ${props.paddingLeft ? props.paddingLeft : 'none'};
   padding-right : ${props.paddingRight ? props.paddingRight : 'none'};
   user-select : ${props.userSelect ? props.userSelect : 'auto'};
   border : ${props.border ? props.border : 'none'};
   border-top : ${props.borderTop ? props.borderTop : 'none'};
   border-bottom : ${props.borderBottom ? props.borderBottom : 'none'};
   border-left : ${props.borderLeft ? props.borderLeft : 'none'};
   border-right : ${props.borderRight ? props.borderRight : 'none'};
   outline : ${props.outline ? props.outline : 'none'};
   border-radius : ${props.borderRadius ? props.borderRadius : 'none'};
   flex : ${props.flex ? props.flex : 'none'}
  `
)

export default StyledInput
