import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#e50914",
};

export const spacing = {
  padding_640: "50px",
  padding_450: "20px",
};

export const GlobalStyled = createGlobalStyle`
      ${reset}
  
      *{box-sizing:border-box;}
  
      body{
          font-family: "Noto Sans KR", sans-serif;
          color: white;
          letter-spacing: -1px;
      }
  
      a{
          text-decoration: none;
          color: white;
      }
  
      img{
          width: 100%;
          display: block;
      }
  `;
