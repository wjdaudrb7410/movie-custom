import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const icon_size = { normal: 15 };
export const colors = {
  black: "black",
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
    font-family: 'NotoSans-KR',sans-serif;}
      body{
        
          color: black;
          letter-spacing: -1px;
      }
  
      a{
        font-family: "NotoSans-KR",sans-serif;
          text-decoration: none;
      }

      button{
        
        border: 2px solid ${colors.btnPoint};
        color: ${colors.btnPoint};
        cursor: pointer;
  }
      
      img{
          width: 100%;
          display: block;
      }
    
  `;
