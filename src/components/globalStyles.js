import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    // transition: all 0.50s linear;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    font-family: "Avenir", Arial, Helvetica, sans-serif;
  }
`
