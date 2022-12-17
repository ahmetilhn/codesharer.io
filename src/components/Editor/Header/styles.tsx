import styled from 'styled-components'
import { colors } from '../../../constants/theme'
import { devices } from '../../../constants/media-queries'
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
  padding: 0 20px;
  @media ${devices.TABLET} {
    border: none;
    border-radius: 0;
    height: 48px;
    padding: 0 10px;
  }
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
