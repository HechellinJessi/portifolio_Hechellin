import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #d0d0d0;
  color: white;
  text-align: center;
  padding: 20px 0;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #da4ea2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Hechellin Jessi. Todos os direitos reservados.
        Desenvolvido por <FooterLink href="https://seusite.com">Seu Nome</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;