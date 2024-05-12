import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../club-detail/clubDetailStyle";
import applyImg from "../../asset/img/applyImg.svg";
import announcementIcon from "../../asset/img/announcementIcon.svg";
import { clublist } from "../../constant/clubList";
import ClubRecruitInfoDiv from "./clubRecruitInfoDiv";

function ClubDetailPage() {
  const { clubName } = useParams();
  const club = clublist.find((club) => club.clubName === clubName);
  const [applyLink, setApplyLink] = useState("");

  useEffect(() => {
    setApplyLink(club.applyLink);
  }, [clubName]);

  const handleApplyClick = () => {
    window.location.href = club.applyLink;
  };

  return (
    <>
      <C.clubDetailBackground>
        <C.temporarySidebar></C.temporarySidebar>
        <C.clubDetailContainer>
          <C.clubInfoDiv>
            <C.clubName>{club.clubName}</C.clubName>
            <C.clubApplyButton onClick={handleApplyClick}>
              <C.clubApplyImg src={applyImg} alt="신청하기" />
              신청하기
            </C.clubApplyButton>
          </C.clubInfoDiv>
          <C.clubDetailIntroduction>
            {club.clubIntroduction}
          </C.clubDetailIntroduction>
          <C.clubRecruitmentInformationContainer>
            <C.clubDetailPosterImg src={club.posterImg} alt={club.clubName} />
            <ClubRecruitInfoDiv />
          </C.clubRecruitmentInformationContainer>
          <C.clubNewAnnouncementDiv>
            <C.announcementIcon src={announcementIcon} alt="공지사항" />
            새로운 공지사항이 등록되었습니다.
          </C.clubNewAnnouncementDiv>
          <div>
            <div>대표활동</div>
            <div>
              <div>날짜</div>
              <div>활동</div>
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <div>팀원소개</div>
            <div>
              <div>반번호</div>
              <div>이름</div>
              <div>직무</div>
              <div>깃허브</div>
            </div>
          </div>
        </C.clubDetailContainer>
      </C.clubDetailBackground>
    </>
  );
}

export default ClubDetailPage;
