import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const icon_size = { normal: 15 };

export const colors = {
  red: "red",
  black: "#666666",
  white: "white",
  point: "#FF6600",
  btnPoint: "#3b3535",
};

export const FootH = {
  hegiht: "100px",
};

export const GlobalStyled = createGlobalStyle`
      ${reset}
  
      
  *{box-sizing: border-box;
    font-family: "NotoSans-KR",sans-serif !important;}
      body{
        
          color: black;
          letter-spacing: -1px;
      }
  
      a{
          text-decoration: none;
      }

      button{
        
        border: 2px solid ${colors.btnPoint};
        
        cursor: pointer;
  }
      
      img{
          width: 100%;
          display: block;
      }
    
  `;
