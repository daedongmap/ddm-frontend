// src/pages/notice/noticeStyle.js

import styled from "styled-components";




export const NoticeBackground = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F5F6F8;
`;

export const temporarySidebar = styled.div`
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const NoticeContainer = styled.div`
  flex: 1;
  padding: 20px;  
  background-color: #F5F6F8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-left: 15%;
  padding-right: 43%;
`;

export const ClubName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 60px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 40px 0;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  font-weight: bold ;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #888;
`;

export const DownloadLink = styled.a`
    display: flex;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
  width: 300px;
  height: 50px;
      align-items: center;
      justify-content: center;
      background-color: #E7E7E7;
    color:black;
        font-size: 17px;
      font-weight: 600;

`;

export const SidebarIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px 0;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 60px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  padding-left: 20px;
`;

export const DownloadLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0px; /* 간격을 설정합니다 */
  margin-top: 20px;
`;

export const DownloadLinkR = styled(DownloadLink)`
  margin-right: 10px; /* 오른쪽 마진을 설정합니다 */
`;

export const GlobalStyle = styled.div`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`;