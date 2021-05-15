import { createGlobalStyle } from 'styled-components';
import PALETTE from './constants/palette';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;900&display=swap');

  * {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Noto Sans KR', sans-serif;
    color: ${PALETTE.GRAY_300};
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
