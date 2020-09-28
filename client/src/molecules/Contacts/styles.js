import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  background: white;
  width: 50%;
  height: 70%;
  left: 25%;
  top: 50%;
  bottom: 50%;
  margin: auto;
  right: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px 0px;
`;

export const Container = styled.div`
  display: flex;
  margin: 16px auto;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  > div {
    display: flex;
    margin: auto;
    background: dodgerblue;
    cursor: pointer;
    border-radius: 25px;
    width: 48px;
    height: 48px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px 0px;
    color: white;

    > svg {
      margin: auto;
      width: 32px;
      height: 32px;
    }
  }
`;

export const Label = styled.div``;
