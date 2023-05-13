import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const SubTitle = styled.h2`
  text-align: center;
`;
const CategoryItems = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 5rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Categories = () => {
  return (
    <Container>
      <SubTitle>Catégories</SubTitle>
      <CategoryItems>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </CategoryItems>
    </Container>
  );
};

export default Categories;
