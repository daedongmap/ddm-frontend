import React from 'react';
import { SidebarContainer, Icon, Divider } from './SidebarStyles';

// 이미지 파일을 가져옵니다.
import koreaImage from '../../asset/img/test6.svg';
import icon1Image from '../../asset/img/dion.svg';
import icon2Image from '../../asset/img/test4.svg';
import icon3Image from '../../asset/img/test1.svg';
import icon4Image from '../../asset/img/test3.svg';
import icon5Image from '../../asset/img/test2.svg';
import logoutImage from '../../asset/img/test5.svg';
import { Margin } from './SidebarStyles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon src={koreaImage} alt="Korea" />
      <Divider />
      <Icon src={icon1Image} alt="Icon 1" />
      <Icon src={icon2Image} alt="Icon 2" />
      <Icon src={icon3Image} alt="Icon 3" />
      <Icon src={icon4Image} alt="Icon 4" />
      <Icon src={icon5Image} alt="Icon 5" />    
      <Margin/>
      <Icon src={logoutImage} alt="Logout" />
    </SidebarContainer>
  );
};

export default Sidebar;
