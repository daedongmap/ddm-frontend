import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, Icon, Divider, LogoutIcon } from "./SidebarStyles";
import koreaImage from "../../asset/img/test6.svg";
import ddmlogo from "../../asset/img/ddmlogoIcon.svg";
import icon1Image from "../../asset/img/dion.svg";
import icon2Image from "../../asset/img/test4.svg";
import icon3Image from "../../asset/img/test1.svg";
import icon4Image from "../../asset/img/test3.svg";
import icon5Image from "../../asset/img/test2.svg";
import logoutImage from "../../asset/img/test5.svg";
import { Margin } from "./SidebarStyles";

function Sidebar() {
  const navigate = useNavigate();
  const { clubName } = useParams();

  const handleClick = (id) => {
    navigate(`/home/${id}`);
    window.location.reload();
  };

  return (
    <SidebarContainer>
      <Icon src={ddmlogo} alt="Korea" onClick={() => navigate("/home")} />
      <Divider />
      <Icon src={icon1Image} alt="Icon 1" onClick={() => handleClick("DION")} />
      <Icon src={icon2Image} alt="Icon 2" onClick={() => handleClick("B1ND")} />
      <Icon src={icon3Image} alt="Icon 3" onClick={() => handleClick("CNS")} />
      {/* <Icon
        src={icon4Image}
        alt="Icon 4"
        onClick={() => handleClick("Icon4")}
      />
      <Icon
        src={icon5Image}
        alt="Icon 5"
        onClick={() => handleClick("Icon5")}
      />
      <Margin /> */}
      <LogoutIcon
        src={logoutImage}
        alt="Logout"
        onClick={() => navigate("/")}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
