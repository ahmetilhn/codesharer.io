import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/theme'

const StyledInput = styled.input<{
  customStyle?: string
}>`
  width: 100%;
  border: 1px solid ${colors.DARK};
  border-radius: 6px;
  height: 40px;
  background-color: ${colors.WHITE};
  padding: 0 10px;
  ${({ customStyle }) => customStyle}
`

type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  customStyle?: string
}
const Input: React.FC<React.PropsWithChildren<InputProps>> = ({ value, onChange, customStyle }) => {
  return (
    <StyledInput
      type='text'
      value={value}
      onChange={(e) => onChange(e)}
      customStyle={customStyle}
    />
  )
}

export default Input
