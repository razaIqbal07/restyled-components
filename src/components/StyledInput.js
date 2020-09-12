import styled from 'styled-components'

const StyledInput = styled.input(
  (props) => `
   font-size : ${props.fontSize ? props.fontSize : '12px'};
   font-weight : ${props.fontWeight ? props.fontWeight : '500'};
   letter-spacing  :  ${props.fontSpacing ? props.fontSpacing : '1px'};
   color : ${props.color ? props.color : '#333'};
   margin : ${props.margin ? props.margin : 'none'};
   padding : ${props.padding ? props.padding : 'none'};
   user-select : ${props.userSelect ? props.userSelect : 'auto'};
   border : ${props.border ? props.border : 'none'};
   outline : ${props.outline ? props.outline : 'none'};
  `
)

export default StyledInput
