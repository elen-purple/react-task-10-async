import styled from "styled-components";

export const Item = styled.li`
  width: 528px;
  padding: 12px 24px;
  background-color: #2b2b2bff;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: "Kumar One", serif;
  font-weight: 400;
  font-size: 28px;
  background: linear-gradient(90deg, #ff913d 0%, #7922e3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
`;

export const Num = styled.p`
  color: #ffffff;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 16px;
  padding: 8px 0;
  height: max-content;
  color: #fff;
  background: linear-gradient(90deg, #ff913d 0%, #7922e3 100%);
`;
