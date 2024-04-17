import React, { useState } from "react";
import * as L from "./loginStyle";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <L.loginBackground>
        <L.loginContainer>
          <L.logo />
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <L.loginIdBox>
            <L.loginIdLabel>아이디</L.loginIdLabel>
            <L.loginIdInput type="text" placeholder="아이디를 입력해주세요." />
          </L.loginIdBox>
          <L.loginPwBox>
            <L.loginPwLabel>비밀번호</L.loginPwLabel>
            <L.loginPwInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </L.loginPwBox>

          <L.loginKeepCheckboxWrapper>
            <L.loginKeepCheckbox type="checkbox" />
            <L.loginKeepLabel>로그인 유지</L.loginKeepLabel>
          </L.loginKeepCheckboxWrapper>

          <L.loginButton>로그인</L.loginButton>
        </L.loginContainer>
      </L.loginBackground>
    </>
  );
}

export default LoginPage;

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <L.modalWrapper>
      <L.modalDiv>
        <L.loginMent>도담도담 계정으로 로그인해주세요.</L.loginMent>
        <L.loginMentClose onClick={onClose}>✕</L.loginMentClose>
      </L.modalDiv>
    </L.modalWrapper>
  );
}
