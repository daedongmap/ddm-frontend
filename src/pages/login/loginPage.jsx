import React, { useState } from "react";
import * as L from "./loginStyle";
import * as DAuth from "./dauthStyle";
import config from "../../config/config.json";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <DAuth.loginBackground>
        <DAuth.loginContainer>
          <DAuth.logo />
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <DAuth.loginButton
            onClick={() => {
              window.location.href = `http://dauth.b1nd.com/login?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}`;
            }}
          >
            도담도담 로그인
          </DAuth.loginButton>
        </DAuth.loginContainer>
      </DAuth.loginBackground>
    </>
    // <>
    //   <L.loginBackground>
    //     <L.loginContainer>
    //       <L.logo />
    //       <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    //       <L.loginIdBox>
    //         <L.loginIdLabel>아이디</L.loginIdLabel>
    //         <L.loginIdInput type="text" placeholder="아이디를 입력해주세요." />
    //       </L.loginIdBox>
    //       <L.loginPwBox>
    //         <L.loginPwLabel>비밀번호</L.loginPwLabel>
    //         <L.loginPwInput
    //           type="password"
    //           placeholder="비밀번호를 입력해주세요."
    //         />
    //       </L.loginPwBox>

    //       <L.loginKeepCheckboxWrapper>
    //         <L.loginKeepCheckbox type="checkbox" />
    //         <L.loginKeepLabel>로그인 유지</L.loginKeepLabel>
    //       </L.loginKeepCheckboxWrapper>
    //       <L.loginButton>로그인</L.loginButton>
    //     </L.loginContainer>
    //   </L.loginBackground>
    // </>
  );
}

export default LoginPage;

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <DAuth.modalWrapper>
      <L.modalDiv>
        <L.loginMent>도담도담 계정으로 로그인해주세요.</L.loginMent>
        <L.loginMentClose onClick={onClose}>✕</L.loginMentClose>
      </L.modalDiv>
    </DAuth.modalWrapper>
  );
}
