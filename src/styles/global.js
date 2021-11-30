
  
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    ::-webkit-scrollbar {
      width: 5px;
      height: 80%;
    } 
    ::-webkit-scrollbar-track {
    border-radius: 40px;
    }
    ::-webkit-scrollbar-thumb {
      background: #9b98ee;
      border-radius: 40px;
    }
   
  }

body,html {    
background: linear-gradient(90deg, #000C40 0%, #607D8B 100%);
height: 100%;


}

#root{
  height: 100vh;
  
 
}

.App{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a{
  text-decoration: none;
  color: black;
}
`



export default GlobalStyle;