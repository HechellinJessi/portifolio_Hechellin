import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center; 
    gap: 10px; 
  }
`;

const Title = styled.h1`
  font-size: 48px; 
  line-height: 1.2; 

  @media only screen and (max-width: 768px) {
    font-size: 36px; 
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 18px; 
  line-height: 1.5; 
  @media only screen and (max-width: 768px) {
    font-size: 16px; 
  }
`;

const Button = styled(Link)`
  background-color: transparent;
  color: #da4ea2;
  font-weight: 500;
  width: 94px;
  padding: 10px;
  border: 2px solid #da4ea2;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #da4ea2;
    color: white;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-top: 20px;
  }
`;


const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 80%;
    height: auto; 
    animation: none; 
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Meu portifólio</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Hechellin Jessi</Subtitle>
          </WhatWeDo>
          <Desc>Bem-vindo ao meu portfólio! Sou Hechellin Jessi, uma apaixonada por criatividade e inovação!
          </Desc>                    
          <Button to="/who">  Sobre mim</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="https://images.vexels.com/media/users/3/216312/isolated/preview/af10a6bc1dcb990d94042f25505e997e-personagem-heroina-enfermeira.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
