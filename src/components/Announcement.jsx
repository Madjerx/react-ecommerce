import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: var(--title-color);
  color: var(--body-color);
  font-size:var(--small-font-size);
  padding:.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:var(--font-medium);
`;

const Announcement = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit !
    </Container>
  );
};

export default Announcement;
