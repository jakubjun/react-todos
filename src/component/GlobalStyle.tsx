import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

export default createGlobalStyle<{ theme: typeof theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  body {
    background-color: ${(props) => props.theme.color.background};
    font-family: 'Assistant', sans-serif;
  }
`;
