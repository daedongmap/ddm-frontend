import React from "react";
import * as C from "./clubDivStyle";
import { useNavigate } from "react-router-dom";

function ClubDiv({
  posterImg,
  clubCategory,
  clubName,
  clubIntroduction,
  recruitmentStatus,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/${encodeURIComponent(clubName)}`);
  };

  return (
    <C.clubDiv onClick={handleClick}>
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
