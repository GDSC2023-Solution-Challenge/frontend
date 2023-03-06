import React from "react";
import StyledWrapper from "./Home.styled";

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="section">
          지금까지
          <br /> 00000명의 사람들이
          <br /> 가족을 찾아갔습니다.
        </div>
        <div className="mini">떨어진 가족을 찾아드립니다.</div>
        <div className="wrap-button">
          {/* <button className="go_button">
            <div className="img_playButton"></div>
            찾으러가기
          </button> */}
        </div>
      </div>
      <div className="img">
        <img alt="earth" src="img/earth.svg"></img>
      </div>
    </StyledWrapper>
  );
};

export default Home;
