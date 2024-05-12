import styled from "styled-components";

export const clubRecruitInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3.125rem;
  margin-top: 0.625rem;
`;

export const clubRecruitInfoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  &:nth-child(6n) {
    margin-bottom: 0;
  }
`;

export const clubRecruitInfoIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const clubRecruitInfoMent = styled.div`
  font-size: 1.125rem;
  color: #000;
  font-weight: 500;
`;

export const myClubRecruitInfoDiv = styled.div`
  margin-left: 1.875rem;
`;

export const myClubRecruitInfo = styled.div`
  margin-bottom: 1.52rem;
  font-size: 1.125rem;
  color: #565656;

  &:nth-child(6n) {
    margin-bottom: 0;
  }
`;
