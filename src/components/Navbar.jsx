import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; 
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    flex-direction: column; 
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    gap: 20px; 
    margin-bottom: 10px; 
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  /* margin-left: 500px; <-- Remova esta linha */
  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;

const ListItem = styled.li`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #333;
    position: relative;
    transition: color 0.8s ease-in-out, box-shadow 0.3s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: #ff2adb;

  }

  a:hover {
    color: #fff;
    box-shadow: 0 0 40px rgb(218, 88, 153);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            {/* <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/studio">Studio</Link>
            </ListItem> */}
            <ListItem>
              <Link to="/works">Certificados Extras</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contatos</Link>
            </ListItem>
          </List>
        </Links>
        {/* <Icons>
          <Icon src="./img/search.png" />
          <Button>Demostrativo</Button>
        </Icons> */}
      </Container>
    </Section>
  );
};

export default Navbar;
