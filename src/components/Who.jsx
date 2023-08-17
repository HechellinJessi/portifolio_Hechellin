import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const Title = styled.h1`
  font-size: 74px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    margin-top: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
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
  color: lightgray;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  color: #da4ea2;
  font-weight: 500;
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

const Button = styled(Link)`
  background-color: transparent;
  color: #da4ea2;
  font-weight: 500;
  width: 120px;
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

  &:active {
    background-color: #ff77c9;
    color: white;
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <BackButton to="/">Voltar</BackButton>
          <Title>Carta de Apresentação</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Hechellin Jessi</Subtitle>
          </WhatWeDo>
          <Desc>
            Olá,

            Meu nome é Hechellin Jessi e é com grande empolgação que apresento-me a vocês como uma profissional em busca de novas oportunidades no mercado de trabalho.

            Nascida em 27/09/2004, estou dando meus primeiros passos na carreira e estou ansiosa para enfrentar novos desafios. Sou uma pessoa dedicada, comprometida com a excelência em todas as minhas atividades e sempre busco aprender e crescer profissionalmente.

            Minhas habilidades em comunicação eficaz, pensamento crítico e trabalho em equipe me ajudam a colaborar de forma efetiva e encontrar soluções inovadoras para os desafios do dia a dia.

            Estou disposta a me envolver e mergulhar em novas experiências para adquirir conhecimento e competências práticas. Sou apaixonada por aprender e acredito que o desenvolvimento profissional é uma jornada contínua.

            Estou animada com a oportunidade de contribuir para uma equipe dinâmica e estou certa de que posso oferecer dedicação, entusiasmo e vontade de crescer.

            Agradeço a oportunidade de me apresentar e espero que meu entusiasmo e comprometimento transpareçam nesta carta de apresentação. Estou disponível para discutir como minhas habilidades e dedicação podem ser uma mais-valia para o crescimento e sucesso de sua empresa.
          </Desc>
          {/* <Button to="/">See our works</Button> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
