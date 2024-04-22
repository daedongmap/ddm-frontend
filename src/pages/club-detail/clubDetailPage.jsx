import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../club-detail/clubDetailStyle";
import applyImg from "../../asset/img/applyImg.svg";
import { clublist } from "../../constant/clubList";
import clubCategoryIcon from "../../asset/img/club_recruitInfo_icon/clubCategoryIcon.svg";

function ClubDetailPage() {
  const { clubName } = useParams();
  const club = clublist.find((club) => club.clubName === clubName);

  return (
    <>
      <C.clubDetailBackground>
        <C.temporarySidebar></C.temporarySidebar>
        <C.clubDetailContainer>
          <C.clubInfoDiv>
            <C.clubName>{club.clubName}</C.clubName>
            <C.clubApplyButton>
              <C.clubApplyImg src={applyImg} alt="신청하기" />
              신청하기
            </C.clubApplyButton>
          </C.clubInfoDiv>
          <C.clubDetailIntroduction>
            {club.clubIntroduction}
          </C.clubDetailIntroduction>
          <C.clubRecruitmentInformationContainer>
            <C.clubDetailPosterImg src={club.posterImg} alt={club.clubName} />
            <C.clubRecruitmentInformationDiv>
              <C.clubCategoryDiv>
                <C.clubCategoryIcon
                  src={clubCategoryIcon}
                  alt="동아리 카테고리"
                />
                <p>창체/자율</p>
                <p>창체</p>
              </C.clubCategoryDiv>
            </C.clubRecruitmentInformationDiv>
          </C.clubRecruitmentInformationContainer>
        </C.clubDetailContainer>
      </C.clubDetailBackground>
    </>
  );
}

export default ClubDetailPage;
