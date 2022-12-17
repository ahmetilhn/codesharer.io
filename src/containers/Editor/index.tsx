import React from 'react'
import { StyledContainer } from './styles'
type Props = {
  children: React.ReactNode
}
const EditorContainer: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default EditorContainer
