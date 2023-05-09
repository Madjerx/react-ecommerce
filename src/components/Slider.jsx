import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import Slider1 from "../assets/p1.png";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
  overflow: hidden;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  /* max-height: 80%; */
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;
const Description = styled.div`
  margin: 2rem 0;
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
`;
const Button = styled.button``;

// const [slideIndex, setSlideIndex] = useState(0);
const handleClick = (direction) => {};

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Les promos</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
