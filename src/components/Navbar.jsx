import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Badge from "@mui/material/Badge";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Center = styled.div`
  text-align: center;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  flex: 1;
`;

const Language = styled.span`
  font-size: var(--normal-font-size);
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: var(--body-color);
  padding: 5px;
  outline: none;
`;
const Logo = styled.h1`
  font-weight: var(--font-semi-bold);
`;

const MenuItem = styled.div`
  font-size: var(--normal-font-size);
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Nike</Logo>
        </Center>
        <Right>
          <MenuItem>
            <AccountCircleOutlinedIcon />
          </MenuItem>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
