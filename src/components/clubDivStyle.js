import styled from "styled-components";

export const clubDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 13.125rem;
  height: 22rem;
  background-color: #f5f6f8;
  border: none;
  border-radius: 0.25rem;
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
  cursor: pointer;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

export const clubInformationContainer = styled.div`
  display: flex;
`;

export const clubInformationDiv = styled.div`
  margin-left: 0.3125rem;
  margin-top: 0.375rem;
`;

export const clubPoster = styled.div`
  width: 13.125rem;
  height: 18.5625rem;
  background-image: ${(props) => `url(${props.posterImg})`};
  background-size: cover;
  background-position: center;
  border-radius: 0.25rem;
  box-shadow: -0.1rem 0.1rem 1rem rgb(0, 0, 0, 0.1);
`;

export const clubCategory = styled.div`
  font-size: 0.625rem;
  color: #8d8d8d;
`;

export const clubName = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const clubIntroduction = styled.div`
  font-size: 0.625rem;
  color: #8d8d8d;
`;

export const recruitmentStatusDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 0.3125rem;
`;

export const recruitmentStatusButton = styled.div`
  width: 2.625rem;
  height: 1.25rem;
  font-size: 0.625rem;
  text-align: center;
  line-height: 1.25rem;
  color: #fff;
  background-color: #444444;
  border-radius: 1rem;
`;
