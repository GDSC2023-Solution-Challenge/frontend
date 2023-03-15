import React from "react";
import StyledWrapper from "./PostDetail.styled";

type Props = {};

const PostDetail: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="explain-wrap">
        <div className="people-photo">
          <img src="./img/girl.svg" alt="people-photo"></img>
        </div>
        <div className="name">이름: 홍길동</div>
        <div className="nation">국가: 대한민국</div>
        <div className="birth">생년월일: 2000년 0월 0일</div>
        <div className="look">인상착의: 눈이 크고 스웨터를 입고 있음.</div>
        <div className="call-div">
          <button className="call-btn">연락하기</button>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PostDetail;
