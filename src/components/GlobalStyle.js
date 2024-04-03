import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#fe3232",
  btnPoint: "#3b3535",
};

export const FootH = {
  hegiht: "100px",
};

export const GlobalStyled = createGlobalStyle`
      ${reset}
  
      
  
      body{
        font-family: "NotoSans-KR",sans-serif;
          color: black;
          letter-spacing: -1px;
      }
  
      a{
          text-decoration: none;
          color: white ${colors.point};
      }

      button{
        border: 2px solid ${colors.btnPoint};
        color: ${colors.btnPoint};
        cursor: pointer;
        &:hover {
    border: 2px solid ${colors.point};
    color: red;
  }
      }
      img{
          width: 100%;
          display: block;
      }
      .swiper-wrapper {
    display: -webkit-inline-box;
  }
  `;
