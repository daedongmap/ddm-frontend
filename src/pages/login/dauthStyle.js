import styled from "styled-components";
import ddmLogo from "../../asset/img/ddmLogo.svg";

export const loginBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
  width: 100vw;
  height: 100vh;
`;

export const loginContainer = styled.div``;

export const logo = styled.div`
  position: absolute;
  width: 11.5625rem;
  height: 3.125rem;
  left: 50%;
  background-image: url(${ddmLogo});
  transform: translate(-50%, -50%);
`;

export const loginButton = styled.button`
  width: 20rem;
  height: 3.125rem;
  background-color: #565656;
  border: none;
  border-radius: 0.625rem;
  margin-top: 5rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

//--로그인 모달----------------

export const modalWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 52%;
`;
 