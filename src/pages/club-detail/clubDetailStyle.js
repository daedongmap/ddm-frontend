import styled from "styled-components";

//----

export const temporarySidebar = styled.div`
  position: fixed;
  left: 0;
  width: 10rem;
  height: 100%;
  background-color: #fff;
`;

//----

export const clubDetailBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f8;
  overflow-x: hidden;
`;

export const clubDetailContainer = styled.div`
  position: absolute;
  left: 25.625rem;
  top: 7.5rem;
  width: 71.25rem;
`;

export const clubInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const clubName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  vertical-align: middle;
  margin: 0;
`;

export const clubApplyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 1rem;
  vertical-align: middle;
  background-color: #e7e7e7;
  font-weight: 500;
  font-size: 1.5rem;
  color: #000;
  margin-left: auto;
  cursor: pointer;
`;

export const clubApplyImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.625rem;
`;

export const clubDetailIntroduction = styled.div`
  margin-top: 0.125rem;
  font-size: 1.5rem;
  color: #8d8d8d;
`;

export const clubRecruitmentInformationContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
`;

export const clubDetailPosterImg = styled.img`
  width: 13.125rem;
  height: 18.5625rem;
  border-radius: 0.25rem;
  box-shadow: -0.1rem 0.1rem 1rem rgb(0, 0, 0, 0.1);
`;

export const clubNewAnnouncementDiv = styled.div`
  width: 71.25rem;
  height: 5rem;
  background-color: #e7e7e7;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 5rem;
  margin-top: 2.5rem;
  cursor: pointer;
`;

export const announcementIcon = styled.img`
  vertical-align: sub;
  width: 1.75rem;
  height: 1.75rem;
  margin-left: 2.5rem;
  margin-right: 1rem;
`;

export const activityContainer = styled.div`
  margin-top: 3.75rem;
`;

export const activityLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const activityDetail = styled.div`
  margin-top: 0.5rem;
`;

export const activityDate = styled.div`
  display: inline-block;
`;

export const activity = styled.div`
  display: inline-block;
  margin-left: 0.875rem;
`;

export const activityData = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.1875rem;
`;

export const memberContainer = styled.div`
  margin-top: 3.75rem;
`;

export const memberLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const memberDiv = styled.div`
  display: flex;
  align-items: center;
  width: 71.25rem;
  height: 3.75rem;
  background-color: #e7e7e7;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const number = styled.div`
  margin-left: 1.875rem;
  font-size: 1rem;
`;

export const name = styled.div`
  margin-left: 0.3125rem;
  margin-right: 0.1875rem;
  font-size: 1rem;
`;

export const job = styled.div`
  margin-left: 0.1875rem;
  font-size: 1rem;
`;

export const github = styled.div`
  margin-left: auto;
  margin-right: 2.5rem;
  font-size: 1rem;
`;
