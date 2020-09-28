import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  border-radius: 8px;
  width: 488px;
  height: 136px;
  padding: 8px;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px 0px;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background: lightgray;

  > svg {
    width: 64px;
    height: 64px;
    margin: auto;
  }
`;

export const ActionUser = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  cursor: pointer;
  margin: 4px;
  display: flex;
  margin: auto;
  border-radius: 50%;

  &:hover {
    background: lightgray;
  }

  > svg {
    width: 32px;
    height: 32px;
    margin: auto;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  min-width: 232px;
  justify-content: space-evenly;
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
