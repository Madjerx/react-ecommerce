import React from "react";
import styled from "styled-components";

const Image = styled.img``;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3``;
const Button = styled.button`
  margin-top: 0.5rem;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Parcourir</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
