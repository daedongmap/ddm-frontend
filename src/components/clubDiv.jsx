import React from "react";
import * as C from "./clubDivStyle";

function ClubDiv({
  posterImg,
  clubCategory,
  clubName,
  clubIntroduction,
  recruitmentStatus,
}) {
  return (
    <C.clubDiv>
      <C.clubPoster posterImg={posterImg} />
      <C.clubInformationContainer>
        <C.clubInformationDiv>
          <C.clubCategory>{clubCategory}</C.clubCategory>
          <C.clubName>{clubName}</C.clubName>
          <C.clubIntroduction>{clubIntroduction}</C.clubIntroduction>
        </C.clubInformationDiv>
        <C.recruitmentStatusDiv>
          <C.recruitmentStatusButton>
            {recruitmentStatus}
          </C.recruitmentStatusButton>
        </C.recruitmentStatusDiv>
      </C.clubInformationContainer>
    </C.clubDiv>
  );
}

export default ClubDiv;
