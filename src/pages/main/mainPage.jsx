import React, { useEffect, useState, useCallback } from "react";
import * as M from "./mainStyle";
import ClubDiv from "../../components/clubDiv";
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
  }, [fetchClubs]);

  const getCategoryLabel = (creative, experience) => {
    if (creative && experience) return "창체 | 자율";
    if (creative) return "창체";
    if (experience) return "자율";
    return "";
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
            {clubList
              .filter((club) => {
                const categoryLabel = getCategoryLabel(
                  club.creative,
                  club.experience
                );
                if (!selectedCategory || selectedCategory === "전체")
                  return true;
                if (selectedCategory === "창체") return club.creative;
                if (selectedCategory === "자율") return club.experience;
                return false;
              })
              .map((club, index) => {
                const posterImg = `data:image/png;base64,${club.file}`;
                const clubCategory = getCategoryLabel(
                  club.creative,
                  club.experience
                );

                return (
                  <ClubDiv
                    key={index}
                    posterImg={posterImg}
                    clubCategory={clubCategory}
                    clubName={club.clubName}
                    clubIntroduction={club.introduction}
                    recruitmentStatus={club.recruiting ? "모집중" : "모집끝"}
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
