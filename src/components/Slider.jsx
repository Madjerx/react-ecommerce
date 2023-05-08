import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import Slider1 from "../assets/github.jpeg";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--border-color);
  border-radius: 5px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: calc(100vh - 90px);
`;

const Slide = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  max-height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1``;
const Description = styled.div``;
const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={Slider1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Soldes d'été</Title>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              perspiciatis aliquid.
            </Description>
            <Button>Les promos</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
