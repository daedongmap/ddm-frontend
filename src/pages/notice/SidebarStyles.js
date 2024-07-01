import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 120px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
    position: fixed; /* 고정 위치 */
  justify-content:flex-start;
  	float: left;



`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin: 20px 0;
  border-radius: 12px;
`;

export const Divider = styled.div`
  width: 60%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

export const Margin = styled.div`
  width: 60%;
  background-color: #ddd;
  margin: 25px 0;
`;

