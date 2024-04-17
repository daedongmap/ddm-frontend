import styled from "styled-components";
import checkImg from "../../asset/img/checkImg.svg";
import ddmLogo from "../../asset/img/ddmLogo.svg";

export const loginBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
  width: 100vw;
  height: 100vh;
`;

export const loginContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 28.75rem;
`;

export const logo = styled.div`
  position: absolute;
  width: 11.5625rem;
  height: 3.125rem;
  left: 50%;
  background-image: url(${ddmLogo});
  transform: translate(-50%, -50%);
`;

export const loginIdBox = styled.div`
  height: 4.6875rem;
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;
`;

export const loginIdLabel = styled.label`
  font-size: 0.9375rem;
  color: #000;
  margin-left: 0.3125rem;
  margin-bottom: 0.625rem;
`;

export const loginIdInput = styled.input`
  width: 18.125rem;
  height: 3.125rem;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0.0625rem 0.25rem 0.625rem rgb(0, 0, 0, 0.25);
  color: #8d8d8d;
  font-size: 0.9375rem;
  padding-inline-start: 0.9375rem;
  padding-inline-end: 0.9375rem;
  &::placeholder {
    font-size: 0.9375rem;
    color: #8d8d8d;
  }
`;

export const loginPwBox = styled.div`
  height: 4.6875rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;
`;

export const loginPwLabel = styled.label`
  font-size: 0.9375rem;
  color: #000;
  margin-left: 0.3125rem;
  margin-bottom: 0.625rem;
`;

export const loginPwInput = styled.input`
  width: 18.125rem;
  height: 3.125rem;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0.0625rem 0.25rem 0.625rem rgb(0, 0, 0, 0.25);
  color: #8d8d8d;
  font-size: 0.9375rem;
  padding-inline-start: 0.9375rem;
  padding-inline-end: 0.9375rem;
  &::placeholder {
    font-size: 0.9375rem;
    color: #8d8d8d;
  }
`;

/**/
export const loginKeepCheckboxWrapper = styled.div`
  margin-top: 1.5rem;
  margin-left: 0.3125rem;
`;

export const loginKeepLabel = styled.label`
  color: #000;
  font-size: 0.75rem;
`;

export const loginKeepCheckbox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #d9d9d9;
  vertical-align: middle;
  margin-right: 0.3125rem;
  cursor: pointer;

  &:checked {
    background-image: url(${checkImg});
  }
`;

/**/

export const loginButton = styled.button`
  width: 20rem;
  height: 3.125rem;
  background-color: #565656;
  border: none;
  border-radius: 0.625rem;
  margin-top: 2.5rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

//--로그인 모달----------------

export const modalWrapper = styled.div`
  position: absolute;
  top: 24%;
  left: 60%;
`;

export const modalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 1.875rem;
  background-color: #8a8a8a;
  border-radius: 1rem;
`;

export const loginMent = styled.p`
  display: inline-block;
  font-size: 0.75rem;
  color: #fff;
`;

export const loginMentClose = styled.p`
  display: inline-block;
  font-size: 0.75rem;
  color: #fff;
  margin-left: 0.75rem;
  cursor: pointer;
`;
