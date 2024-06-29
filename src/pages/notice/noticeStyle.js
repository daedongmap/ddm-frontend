import styled from "styled-components";

//---------------------------

export const temporarySidebar = styled.div`
  position: fixed;
  left: 0;
  width: 10rem;
  height: 100%;
  background-color: #fff;
`;

//---------------------------

export const NoticeBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f8;
  overflow-x: hidden;
`;

export const NoticeContainer = styled.div`
  position: absolute;
  left: 25.625rem;
  top: 7.5rem;
`;

export const ClubName = styled.div`
  font-size: 1.5rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const WriteListDiv = styled.div`
  margin-top: 3.125rem;
`;

export const WriteDiv = styled.div`
  display: flex;
  align-items: center;
  width: 71.25rem;
  height: 5.625rem;
  background-color: #e7e7e7;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 5rem;
  margin-top: 2.5rem;
  cursor: pointer;
  margin-bottom: -1rem;
`;

export const WriteIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 2rem;
`;

export const WriteTitle = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
`;

export const Right = styled.div`
  margin-left: auto;
  margin-right: 3.125rem;
`;

export const WriteDate = styled.div`
  font-size: 1rem;
  text-align: right;
  margin-bottom: -3.75rem;
`;

export const WriteUser = styled.div`
  font-size: 1rem;
  text-align: right;
`;
