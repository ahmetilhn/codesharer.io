import styled from 'styled-components'
import { colors } from '../../../constants/theme'

export const StyledWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 64px;
  background-color: #fff;
  border-top: 3px solid ${colors.DARK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-right: 3px solid ${colors.DARK};
  border-left: 3px solid ${colors.DARK};
  padding: 10px 20px;
`

export const StyledButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  button {
    margin-left: 10px;
  }
`
export const StyledLogoAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
