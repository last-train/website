import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    // transition: all 0.50s linear;

    color: ${({ theme }) => theme.text};
    transition: color 0.50s linear;
    -ms-transition: color 0.50s linear;
    -webkit-transition: color 0.50s linear;

    background: ${({ theme }) => theme.body};
    transition: background 0.50s linear;
    -ms-transition: background 0.50s linear;
    -webkit-transition: background 0.50s linear;

    font-family: "Avenir", Arial, Helvetica, sans-serif;
  }
`
