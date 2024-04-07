import { Link } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmeTitle";
import styled from "styled-components";
import { colors } from "../../components/GlobalStyle";
const Page_404 = styled.section`
  background: #fff;
  img {
    width: 100%;
  }
`;
const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 40px;
  }
`;
const Fofbg = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 300px;
  background-position: center;

  h1 {
    text-align: center;
  }
`;
const FofBtn = styled.button`
  background-color: #39ac31;
  border: none;
  margin: 10px 0px;
  a {
    color: ${colors.white};
  }
`;
export const FoulAccess = () => {
  return (
    <>
      <HelmetTitle title={"404"} />
      <Page_404>
        <Container>
          <div class="row">
            <div class="col-sm-12 ">
              <Fofbg></Fofbg>
              <h1 class="text-center ">404</h1>
              <div class="four_zero_four_bg"></div>

              <div>
                <h3 class="h2">길을 잃으셨군요!</h3>

                <p>이페이지는 존재하지 않습니다.</p>

                <FofBtn>
                  <Link to={"/"}>홈으로 돌아가기</Link>
                </FofBtn>
              </div>
            </div>
          </div>
        </Container>
      </Page_404>
    </>
  );
};
