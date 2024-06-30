import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function SidebarItem({ menu }) {
  return (
    <MenuItem>
      {menu.name}
    </MenuItem>
  );
}

export default SidebarItem;
