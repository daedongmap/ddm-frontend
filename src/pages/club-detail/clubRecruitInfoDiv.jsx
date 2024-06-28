import React from "react";
import * as R from "./clubRecruitInfoDivStyle";
import { useParams } from "react-router-dom";
import categoryIcon from "../../asset/img/club_recruitInfo_icon/categoryIcon.svg";
import recruitNumberIcon from "../../asset/img/club_recruitInfo_icon/recruitNumberIcon.svg";
import recruitFieldIcon from "../../asset/img/club_recruitInfo_icon/recruitFieldIcon.svg";
import supportTargetIcon from "../../asset/img/club_recruitInfo_icon/supportTargetIcon.svg";
import recruitPeriodIcon from "../../asset/img/club_recruitInfo_icon/recruitPeriodIcon.svg";
import interviewScheduleIcon from "../../asset/img/club_recruitInfo_icon/interviewScheduleIcon.svg";
import { clublist } from "../../constant/clubList";

function ClubRecruitInfoDiv() {
  const { clubName } = useParams();

  return (
    <>
      <R.clubRecruitInfoContainer>
        <div>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon src={categoryIcon} alt="동아리 카테고리" />
            <R.clubRecruitInfoMent>창체/자율</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon
              src={recruitNumberIcon}
              alt="동아리 모집인원"
            />
            <R.clubRecruitInfoMent>모집인원</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon
              src={recruitFieldIcon}
              alt="동아리 모집분야"
            />
            <R.clubRecruitInfoMent>모집분야</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon
              src={supportTargetIcon}
              alt="동아리 지원대상"
            />
            <R.clubRecruitInfoMent>지원대상</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon
              src={recruitPeriodIcon}
              alt="동아리 모집기간"
            />
            <R.clubRecruitInfoMent>모집기간</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
          <R.clubRecruitInfoDiv>
            <R.clubRecruitInfoIcon
              src={interviewScheduleIcon}
              alt="동아리 면접일정"
            />
            <R.clubRecruitInfoMent>면접일정</R.clubRecruitInfoMent>
          </R.clubRecruitInfoDiv>
        </div>
        <R.myClubRecruitInfoDiv>
          {/* <R.myClubRecruitInfo>{clubCategory}</R.myClubRecruitInfo>
          <R.myClubRecruitInfo>{recruitnumber}</R.myClubRecruitInfo>
          <R.myClubRecruitInfo>{recruitField}</R.myClubRecruitInfo>
          <R.myClubRecruitInfo>{supportTarget}</R.myClubRecruitInfo>
          <R.myClubRecruitInfo>{recruitPeriod}</R.myClubRecruitInfo>
          <R.myClubRecruitInfo>{interviewSchedule}</R.myClubRecruitInfo> */}
        </R.myClubRecruitInfoDiv>
      </R.clubRecruitInfoContainer>
    </>
  );
}

export default ClubRecruitInfoDiv;
