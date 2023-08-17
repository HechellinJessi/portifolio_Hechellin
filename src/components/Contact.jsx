import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"; 
import Map from "./Map";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 300;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #da4ea2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 150px;
  color: #fffcfc;
  transition: color 0.5s ease;

  &:hover {
    color: #da4ea2;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Fale comigo!</Title>
          <BackButton onClick={() => window.history.back()}>&larr; Voltar</BackButton>
          <SocialLinks>
            <SocialIcon
              href="https://www.linkedin.com/in/hechellin-jessi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/HechellinJessi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="mailto:hechellinjmvi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon
              href="https://wa.me/21990450262"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </SocialIcon>
          </SocialLinks>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );

    
};

export default Contact;
