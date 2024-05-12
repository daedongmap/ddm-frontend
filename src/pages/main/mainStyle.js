import styled from "styled-components";
import checkImg from "../../asset/img/checkImg.svg";

//----

export const temporarySidebar = styled.div`
  position: fixed;
  left: 0;
  width: 10rem;
  height: 100%;
  background-color: #fff;
`;

//----

export const mainBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f8;
  overflow-x: hidden;
`;

export const mainContainer = styled.div`
  position: absolute;
  left: 25.625rem;
  top: 7.5rem;
  width: 75.625rem;
`;

export const mainTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

//--카테고리-------

export const clubCategoryCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5625rem;
  margin-bottom: 1.25rem;
`;

export const clubCategoryCheckboxContainer = styled.div`
  display: flex;
`;

export const clubCategoryCheckboxDiv = styled.div`
  margin-right: 0.78rem;
`;

export const clubCategoryLabel = styled.label`
  color: #000;
  font-size: 1rem;
  vertical-align: middle;
`;

export const clubCategoryCheckbox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #d9d9d9;
  vertical-align: middle;
  margin-right: 0.1875rem;
  cursor: pointer;

  &:checked {
    background-image: url(${checkImg});
  }
`;

//---------

export const clubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
