import React from "react";
import * as L from "./loginStyle";

function LoginPage() {
  return (
    <>
      <L.loginBackground>
        <L.loginContainer>
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
            <L.loginKeepLabel>
              <L.loginKeepCheckbox type="checkbox" />
              로그인 유지
            </L.loginKeepLabel>
          </L.loginKeepCheckboxWrapper>

          <L.loginButton>로그인</L.loginButton>
        </L.loginContainer>
      </L.loginBackground>
    </>
  );
}

export default LoginPage;
