import styled from "styled-components";

export const loginBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
  width: 100vw;
  height: 100vh;
`;

export const loginContainer = styled.div`
  width: 20rem;
  height: 28.75rem;
`;

export const loginIdBox = styled.div`
  height: 4.6875rem;
  display: flex;
  flex-direction: column;
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

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
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
`;
