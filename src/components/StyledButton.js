import styled from 'styled-components'

const StyledButton = styled.button(
  (props) => `
  background  : ${props.background ? props.background : 'blue'};
  color : ${props.color ? props.color : '#ffffff'};
  margin : ${props.margin ? props.margin : 'none'};
  padding : ${props.padding ? props.padding : 'none'};
  border-radius : ${props.borderRadius ? props.borderRadius : 'none'};
  border : ${props.border ? props.border : 'none'};
  position : ${props.position ? props.position : 'static'};
  top : ${props.top ? props.top : ''};
  bottom : ${props.bottom ? props.bottom : ''};
  left : ${props.left ? props.left : ''};
  right : ${props.right ? props.right : ''};
  cursor : ${props.cursor ? props.cursor : 'pointer'};
  `
)

export default StyledButton
