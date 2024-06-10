import React, { useEffect, useState, useCallback } from "react";
import * as M from "./mainStyle";
import ClubDiv from "../../components/clubDiv";
import { clublist } from "../../constant/clubList";
import useClub from "../../hooks/auth/useClub";

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [clubList, setClubList] = useState([]);
  const { getClubList } = useClub();

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  const fetchClubs = useCallback(async () => {
    const data = await getClubList();
    setClubList(data);
  }, [getClubList]);

  useEffect(() => {
    fetchClubs();
  }, []);

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
            {clubList
              .filter((club) => {
                if (!selectedCategory || selectedCategory === "전체")
                  return true;
                return club.clubCategory === selectedCategory;
              })
              .map((club, index) => {
                const posterImg = `${club.filePath}/${club.fileName}`;
                //이미지 불러오는거 부터 해야함

                return (
                  <ClubDiv
                    key={index}
                    posterImg={posterImg}
                    clubCategory={club.clubCategory}
                    clubName={club.clubName}
                    clubIntroduction={club.clubIntroduction}
                    recruitmentStatus={club.recruitmentStatus}
                  />
                );
              })}
          </M.clubContainer>
        </M.mainContainer>
      </M.mainBackground>
    </>
  );
}

export default MainPage;
