import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }
      body{
        background: #F4F8F6;
        color:#573516;
       -webkit-font-smoothing: antialiased ;
       overflow: hidden;

      }
      body, input, button{
        font-family:  'Cabin';
        font-size: 16px;
      }
      button{
        cursor: pointer;
      }
      `;
