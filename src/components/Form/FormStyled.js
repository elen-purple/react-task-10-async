import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Forma = styled.form`
  width: 512px;
`;

export const Title = styled.h2`
  font-family: "Kumar One", serif;
  font-weight: 400;
  font-size: 80px;
  background: linear-gradient(90deg, #ff913d 0%, #7922e3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  display: block;
`;

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

  &::placeholder {
    color: rgb(255, 255, 255, 0.5);
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 300px;
  font-size: 24px;
  padding: 12px 0;
  color: #fff;
  background: linear-gradient(90deg, #ff913d 0%, #7922e3 100%);
`;

export const Wrap = styled.div`
  position: relative;
  width: 800px;
`;

export const Img = styled.img`
  width: 800px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImgWrap = styled.img`
  width: 800px;
  filter: blur(20px);
`;
