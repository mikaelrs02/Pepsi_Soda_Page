import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
export const Body = styled.body`
  background-color: ${(props) => props.backgroundColor || "#0261bf"};
  transition: 0.6s;
`;
export const Header = styled.header`
  height: 17vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 35em;
`;

export const Navegation = styled.section`
  ul {
    display: flex;
    list-style: none;
    gap: 2em;
  }
  li {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: white;
    cursor: pointer;
    &:hover {
      transform: scale(110%);
      opacity: 0.5;
    }
  }
`;
export const Main = styled.main`
  display: flex;
  height: 83vh;
`;

export const TextBox = styled.div`
  width: 50%;
  height: 51vh;
  margin-left: 5vw;
  margin-top: 5rem;
  p {
    font-family: "Poppins", sans-serif;
    color: white;
    width: 35vw;
    font-size: 16px;
  }
`;

export const Text = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 3em;
  width: 25vw;
  line-height: 1.7em;
  span {
    font-size: 2em;
  }
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  width: 12em;
  height: 6vh;
  background-color: #e4e2e4;
  border-radius: 25px;
  padding: 10px;
  font-size: 16px;
  font-weight: 450;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
    transform: scale(110%);
  }
`;

export const PepsiCans = styled.section`
  width: 20vw;
  div {
    width: 40vh;
    height: 17vh;
    display: flex;
    align-items: flex-end;
    gap: 3em;
    position: absolute;
    top: 82vh;
    left: 82vh;
  }
  img {
    width: 20%;
    transition: 1s;

    &:hover {
      cursor: pointer;
      transform: translateY(-35%);
    }
  }
`;

export const Pepsi = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 18vw;
    position: absolute;
    top: 25vh;
    left: 69vw;
  }
`;
export const Networks = styled.div`
  height: 35vh;
  margin-right: 1vw;
  margin-top: 12.5vw;
  position: absolute;
  right: 1px;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 40vh;
    margin-right: 1vw;
  }
  img {
    position: relative;
    cursor: pointer;
    &:hover {
      top: -6px;
      opacity: 0.5;
    }
  }
`;
