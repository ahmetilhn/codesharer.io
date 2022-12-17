import { createGlobalStyle } from 'styled-components'
import { COLORS } from '../constants/theme'
export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
   *{
       outline: none;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`
