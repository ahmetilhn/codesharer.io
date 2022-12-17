import styled from 'styled-components'
import { COLORS } from '../../../constants/theme'

export const StyledWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transform: translateY(38px);
  height: 200px;
  background-color: #fff;
  border-top: 1px solid ${COLORS.DARK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-right: 1px solid ${COLORS.DARK};
  border-left: 1px solid ${COLORS.DARK};
`
