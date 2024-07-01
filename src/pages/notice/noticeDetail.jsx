import React from "react";
import * as S from "./noticeDetail";
import { Margin } from "./SidebarStyles";
import { GlobalStyle } from "./noticeDetail";
import Sidebar from "./sidebar";
import { noticelist } from "../../constant/noticeList";
import { useParams } from "react-router-dom";

/*
import noticeImage1 from "../../asset/img/notice1.png";
import noticeImage2 from "../../asset/img/notice2.png";
import noticeImage3 from "../../asset/img/notice3.png";
import noticeImage4 from "../../asset/img/nonotictice4.png";
import noticeImage5 from "../../asset/img/notice5.png";
import noticeImage6 from "../../asset/img/e6.png";
  */
function NoticeDetail() {
  const { noticeId } = useParams();
  const { clubName } = useParams();
  const notice = noticelist.find((n) => n.id === parseInt(noticeId));

  if (!notice) {
    return <div>Notice not found</div>;
  }

  return (
    <S.NoticeBackground>
      <GlobalStyle />
      <Sidebar />
      {/*
        <S.SidebarIcon src={noticeImage1} alt="Icon 1" />
        <S.SidebarIcon src={noticeImage2} alt="Icon 2" />
        <S.SidebarIcon src={noticeImage3} alt="Icon 3" />
        <S.SidebarIcon src={noticeImage4} alt="Icon 4" />
        <S.SidebarIcon src={noticeImage5} alt="Icon 5" />
        <S.SidebarIcon src={noticeImage6} alt="Icon 6" />
        */}
      <S.NoticeContainer>
        <S.ClubName>동아리 홍보 PPT 공유합니다</S.ClubName>
        <S.Date>2024.03.04</S.Date>
        <S.Content>
          안녕하세요. 동아리 부장은 아니고 그냥 뒷방 늙다리입니다.
          <br />
          다름이 아니라 동아리 홍보 PPT 공유합니다. 감사합니다.
          <br />
          <br />
          글씨 늘리기 늘리기 늘리기 이렇게 쓸내용이 길진 않겠지만 아무튼
          늘려늘려 계속 늘리기 위한 헛소리 어쩌고 저쩌고 어쩌고 저쩌고 아 진짜
          집가고싶다... 통학 안시켜주나? 기숙사에선 6시 50분 기상이지만 집에선
          7시 30분에 일어나도 시간 넉넉하던데.... 하 진짜 집가고싶다...
          통학시켜주면 좋겠다..
          <br />
          <br />
          좀만 더 쓰면 이쁘겠구만... 헛소리 더쓰기 더쓰기 더쓰기 헛소리 헛소리
          헛소리 헛소리 헛소리 헛소리 헛소리 밑에 첨부파일 똑바로 안두나 아오
          아오 아오 태극기 시간표 칠판 종이 마우스 책가 청소기 공기청정기
          아이패드 또 뭐있지 몰라 여기까지 쓰지 뭐~ 하 귀찮아..
        </S.Content>
        <S.DownloadLinksWrapper>
          <S.DownloadLinkR href="#">동아리홍보PPT.pptx</S.DownloadLinkR>
          <S.DownloadLink href="#">동아리홍보PPT.pdf</S.DownloadLink>
        </S.DownloadLinksWrapper>
      </S.NoticeContainer>
    </S.NoticeBackground>
  );
}

export default NoticeDetail;
