import { createGlobalStyle } from 'styled-components'
import { colors } from '../constants/theme'
export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        color: ${colors.DARK_TWO};
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
