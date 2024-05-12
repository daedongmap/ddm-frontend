import React, { useState } from "react";
import * as M from "./mainStyle";
import ClubDiv from "../../components/clubDiv";
import { clublist } from "../../constant/clubList";

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <M.mainBackground>
        <M.temporarySidebar></M.temporarySidebar>
        <M.mainContainer>
          <M.mainTitle>동아리</M.mainTitle>
          <M.clubCategoryCheckboxWrapper>
            <M.clubCategoryCheckboxContainer>
              <M.clubCategoryCheckboxDiv>
                <M.clubCategoryCheckbox
                  type="checkbox"
                  checked={selectedCategory === "전체"}
                  onChange={() => handleCheckboxChange("전체")}
                />
                <M.clubCategoryLabel>전체</M.clubCategoryLabel>
              </M.clubCategoryCheckboxDiv>
              <M.clubCategoryCheckboxDiv>
                <M.clubCategoryCheckbox
                  type="checkbox"
                  checked={selectedCategory === "창체"}
                  onChange={() => handleCheckboxChange("창체")}
                />
                <M.clubCategoryLabel>창체</M.clubCategoryLabel>
              </M.clubCategoryCheckboxDiv>
              <M.clubCategoryCheckboxDiv>
                <M.clubCategoryCheckbox
                  type="checkbox"
                  checked={selectedCategory === "자율"}
                  onChange={() => handleCheckboxChange("자율")}
                />
                <M.clubCategoryLabel>자율</M.clubCategoryLabel>
              </M.clubCategoryCheckboxDiv>
            </M.clubCategoryCheckboxContainer>
          </M.clubCategoryCheckboxWrapper>
          <M.clubContainer>
            {clublist
              .filter((club) => {
                if (!selectedCategory || selectedCategory === "전체")
                  return true;
                return club.clubCategory === selectedCategory;
              })
              .map((club, index) => (
                <ClubDiv
                  key={index}
                  posterImg={club.posterImg}
                  clubCategory={club.clubCategory}
                  clubName={club.clubName}
                  clubIntroduction={club.clubIntroduction}
                  recruitmentStatus={club.recruitmentStatus}
                />
              ))}
          </M.clubContainer>
        </M.mainContainer>
      </M.mainBackground>
    </>
  );
}

export default MainPage;
