import React from "react";
import * as M from "./mainStyle";
import ClubDiv from "../../components/clubDiv";
import PosterImg from "../../asset/img/DION-Poster.png";

function MainPage() {
  return (
    <>
      <M.mainBackground>
        <M.temporarySidebar></M.temporarySidebar>
        <M.mainContainer>
          <M.mainTitle>동아리</M.mainTitle>
          <M.clubContainer>
            <ClubDiv
              posterImg={PosterImg}
              clubCategory="창체"
              clubName="DION"
              clubIntroduction="새로운 멤버를 모집합니다."
              recruitmentStatus="모집중"
            ></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
            <ClubDiv clubCategory="창체" clubName="Dion"></ClubDiv>
          </M.clubContainer>
        </M.mainContainer>
      </M.mainBackground>
    </>
  );
}

export default MainPage;
