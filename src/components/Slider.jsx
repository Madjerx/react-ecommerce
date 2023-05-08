import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position:relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position:absolute;
  top:0;
  bottom:0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin:auto;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowLeftIcon />
      </Arrow>
      <Arrow direction='right'>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
