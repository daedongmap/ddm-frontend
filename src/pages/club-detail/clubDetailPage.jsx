import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as C from "../club-detail/clubDetailStyle";
import applyImg from "../../asset/img/applyImg.svg";
import announcementIcon from "../../asset/img/announcementIcon.svg";
import { clublist } from "../../constant/clubList";
import ClubRecruitInfoDiv from "./clubRecruitInfoDiv";
import activityDataImg from "../../asset/img/activityDataImg.svg";
import { memberList } from "../../constant/memberList";
import { useNavigate } from "react-router-dom";
import useClub from "../../hooks/auth/useClub";

function ClubDetailPage() {
  const navigate = useNavigate();
  const { clubName } = useParams();
  const [clubList, setClubList] = useState([]);
  // const club = clublist.find((club) => club.clubName === clubName);
  const [applyLink, setApplyLink] = useState("");
  const { getClubList } = useClub();

  const fetchClubs = useCallback(async () => {
    const data = await getClubList();
    const selectedClub = data.find((c) => c.clubName === clubName);
    setClubList(selectedClub);
  }, []);

  useEffect(() => {
    fetchClubs();
  }, [fetchClubs]);

  // useEffect(() => {
  //   setApplyLink(club.applyLink);
  // }, []);

  // const handleApplyClick = () => {
  //   window.location.href = club.applyLink;
  // };

  const handleClick = () => {
    navigate(`/notice/${clubName}`);
  };

  return (
    <>
      <C.clubDetailBackground>
        <C.temporarySidebar></C.temporarySidebar>
        <C.clubDetailContainer>
          <C.clubInfoDiv>
            <C.clubName>{clubName}</C.clubName>
            <C.clubApplyButton
            // onClick={handleApplyClick}
            >
              <C.clubApplyImg src={applyImg} alt="신청하기" />
              신청하기
            </C.clubApplyButton>
          </C.clubInfoDiv>
          <C.clubDetailIntroduction>
            {clubList.introduction}
          </C.clubDetailIntroduction>
          <C.clubRecruitmentInformationContainer>
            <C.clubDetailPosterImg
              src={`data:image/png;base64,${clubList.file}`}
              alt={clubList.clubName}
            />
            <ClubRecruitInfoDiv />
          </C.clubRecruitmentInformationContainer>
          <C.clubNewAnnouncementDiv onClick={handleClick}>
            <C.announcementIcon src={announcementIcon} alt="공지사항" />
            새로운 공지사항이 등록되었습니다.
          </C.clubNewAnnouncementDiv>
          <C.activityContainer>
            <C.activityLabel>대표활동</C.activityLabel>
            <C.activityDetail>
              <C.activityDate>2024.03.04</C.activityDate>
              <C.activity>동아리 개설</C.activity>
              <C.activityData src={activityDataImg} alt="" />
            </C.activityDetail>
            <C.activityDetail>
              <C.activityDate>2024.03.05</C.activityDate>
              <C.activity>동아리 폭파</C.activity>
              <C.activityData src={activityDataImg} alt="" />
            </C.activityDetail>
          </C.activityContainer>
          <C.memberContainer>
            <C.memberLabel>팀원소개</C.memberLabel>
            {memberList.map((member) => (
              <C.memberDiv>
                <C.number>{member.number} </C.number>
                <C.name>{member.name}</C.name>
                <div>/</div>
                <C.job>{member.job}</C.job>
                <C.github>{member.github}</C.github>
              </C.memberDiv>
            ))}
          </C.memberContainer>
        </C.clubDetailContainer>
      </C.clubDetailBackground>
    </>
  );
}

export default ClubDetailPage;
