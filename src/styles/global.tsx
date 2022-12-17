import { createGlobalStyle } from 'styled-components'
import { COLORS } from '../constants/theme'
export const GlobalStyle = createGlobalStyle`
   *{
       outline: none;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`
