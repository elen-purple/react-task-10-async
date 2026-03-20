import styled from "styled-components";

export const Input = styled.input`
  border: 3px solid;
  border-image: linear-gradient(90deg, #ff913d 0%, #7922e3 100%) 1;
  width: 528px;
  height: 48px;
  margin-top: 16px;
  background-color: #202020;
  font-size: 18px;
  color: #fff;
  padding: 0 24px;
  margin: 0 auto 52px;

  &::placeholder {
    color: rgb(255, 255, 255, 0.5);
    font-size: 18px;
  }
`;
