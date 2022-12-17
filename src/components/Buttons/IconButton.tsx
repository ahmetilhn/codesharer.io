import styled from 'styled-components'
import { colors, heights } from '../../constants/theme'
import React from 'react'
enum ButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}
const getButtonColor = (type: keyof typeof ButtonTypes) => {
  switch (type) {
    case ButtonTypes.PRIMARY:
      return colors.DARK
    case ButtonTypes.SECONDARY:
      return colors.ORANGE
    case ButtonTypes.TERTIARY:
      return colors.GREEN
    default:
      return colors.DARK_TWO
  }
}
const getIconColor = (type: keyof typeof ButtonTypes) => {
  switch (type) {
    case ButtonTypes.PRIMARY:
      return colors.GREEN
    case ButtonTypes.SECONDARY:
      return colors.DARK
    case ButtonTypes.TERTIARY:
      return colors.DARK
    default:
      return colors.DARK_TWO
  }
}
const StyledButton = styled.button<{
  btnType: keyof typeof ButtonTypes
}>`
  background-color: ${({ btnType }) => getButtonColor(btnType)};
  height: ${heights.BTN_DESKTOP};
  padding: 0 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${colors.WHITE};
  font-weight: bold;
  span.text {
    margin-left: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
  svg {
    height: 16px;
    width: 16px;
    object-fit: contain;
    fill: ${({ btnType }) => getIconColor(btnType)};
  }
`
type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  btnType: keyof typeof ButtonTypes
}
const IconButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  btnType,
  ...props
}) => {
  return (
    <StyledButton btnType={btnType ?? 'PRIMARY'} {...props}>
      {children}
    </StyledButton>
  )
}

export default IconButton
