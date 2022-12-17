import styled from 'styled-components'
import { devices } from '../../constants/media-queries'
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  padding: 10px 40px;
  @media ${devices.TABLET} {
    padding: 0;
  }
`
