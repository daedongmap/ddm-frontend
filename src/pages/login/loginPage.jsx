import React, { useState } from "react";
import * as L from "./loginStyle";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import tokenStore from "../../lib/token/token";

function LoginPage() {
  const navigate = useNavigate();
  const { login, error } = useLogin();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async () => {
    const accessToken = await login(username, password); // DAuth를 통한 로그인 시도
    if (accessToken) {
      tokenStore.saveToken(accessToken);
      navigate("/home");
    } else {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <>
      <L.loginBackground>
        <L.loginContainer>
          <L.logo />
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <L.loginIdBox>
            <L.loginIdLabel>아이디</L.loginIdLabel>
            <L.loginIdInput
              type="text"
              placeholder="아이디를 입력해주세요."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </L.loginIdBox>
          <L.loginPwBox>
            <L.loginPwLabel>비밀번호</L.loginPwLabel>
            <L.loginPwInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </L.loginPwBox>

          <L.loginKeepCheckboxWrapper>
            <L.loginKeepCheckbox type="checkbox" />
            <L.loginKeepLabel>로그인 유지</L.loginKeepLabel>
          </L.loginKeepCheckboxWrapper>
          <L.loginButton onClick={handleLogin}>로그인</L.loginButton>
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
