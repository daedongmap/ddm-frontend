import React from "react";
import * as N from "./noticeStyle";
import { useParams } from "react-router-dom";
import { noticelist } from "../../constant/noticeList";
import { useNavigate } from "react-router-dom";
import writeImg from "../../asset/img/writeImg.svg";

function NoticePage() {
  const navigate = useNavigate();
  const { clubName } = useParams();

  const handleClick = (id) => {
    navigate(`/notice/${clubName}/${id}`);
  };

  return (
    <N.NoticeBackground>
      <N.temporarySidebar />
      <N.NoticeContainer>
        <N.ClubName>{clubName}</N.ClubName>
        <N.Title>동아리 공지사항</N.Title>

        <N.WriteListDiv>
          {noticelist.map((write, index) => (
            <N.WriteDiv key={index} onClick={() => handleClick(write.id)}>
              <N.WriteIcon src={writeImg} alt="문서" />
              <N.WriteTitle>{write.title}</N.WriteTitle>
              <N.Right>
                <N.WriteDate>{write.writingDate}</N.WriteDate>
                <N.WriteUser>{write.user}</N.WriteUser>
              </N.Right>
            </N.WriteDiv>
          ))}
        </N.WriteListDiv>

        {/* <table className="table-container">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {noticelist.map((item) => (
              <tr key={item.id}>
                <td className="left_td">
                  <img
                    className="club_img"
                    src="/document.svg"
                    alt="문서 이미지"
                  />
                </td>
                <td className="center_td">
                  <span> {item.name} </span>
                </td>
                <td className="right_td">
                  <span className="item_user">
                    {item.age} <br></br> {item.user}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </N.NoticeContainer>
    </N.NoticeBackground>
  );
}

export default NoticePage;
