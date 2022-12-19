import styled from 'styled-components'
import { devices } from '../../../constants/media-queries'
export const StyledProvider = styled.div`
  width: 100%;
  .cm-theme {
    background-color: #f5f5f5;
    width: 100%;
    height: calc(100vh - 84px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    @media ${devices.TABLET} {
      border-radius: 0;
      height: calc(100vh - 48px);
    }
  }
  .cm-editor {
    font-size: 20px;
    padding: 20px;
    @media ${devices.TABLET} {
      font-size: 15px;
      padding: 4px;
    }
  }
`
