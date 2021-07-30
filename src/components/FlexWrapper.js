import styled from 'styled-components'

const FlexWrapper = styled.div(
  (props) => `
    display: flex;
    flex : ${props.flex ? props.flex : ''};
    flex-direction : ${props.flexDirection ? props.flexDirection : 'row'};
    justify-content: ${
      props.justifyContent ? props.justifyContent : 'flex-start'
    };
    align-items: ${props.alignItems ? props.alignItems : 'flex-start'};
    width: ${props.width ? props.width : 'auto'};
    height: ${props.height ? props.height : 'auto'};
    min-width: ${props.minWidth ? props.minWidth : 'auto'};
    max-width: ${props.maxWidth ? props.maxWidth : 'auto'};
    min-height: ${props.minHeight ? props.minHeight : ''};
    max-height: ${props.maxHeight ? props.maxHeight : ''};
    background: ${props.background ? props.background : 'none'};
    background-color: ${props.backgroundColor ? props.backgroundColor : 'none'};
    opacity: ${props.opacity || ''};
    color :  ${props.color ? props.color : 'none'};
    border : ${props.border ? props.border : 'none'};
    border-bottom : ${props.borderBottom ? props.borderBottom : ''};
    border-left : ${props.borderLeft ? props.borderLeft : ''};
    border-right : ${props.borderRight ? props.borderRight : ''};
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
    outline :  ${props.outline ? props.outline : 'none'};
    overflow: ${props.overflow ? props.overflow : 'none'};
    overflow-x: ${props.overflowX ? props.overflowX : 'none'};
    overflow-y: ${props.overflowY ? props.overflowY : 'none'};
    box-sizing : ${props.boxSizing ? props.boxSizing : 'border-box'};
    cursor : ${props.cursor ? props.cursor : ''};
    text-align : ${props.textAlign ? props.textAlign : 'inherit'};
    z-index : ${props.zIndex ? props.zIndex : '1'};
    top : ${props.top ? props.top : ''};
    bottom : ${props.bottom ? props.bottom : '1'};
    left : ${props.left ? props.left : '1'};
    right : ${props.right ? props.right : '1'};
    box-shadow: ${props.boxShadow || ''};
    ${[props.css || '']};
    &:hover {
      background : ${(props.hover && props.hover.background) || ''}
    }
    
  `
)

export default FlexWrapper
