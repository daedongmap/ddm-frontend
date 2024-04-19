import styled from "styled-components";

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
  width: 20rem;
  height: 28.75rem;
`;

export const mainTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

export const clubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
