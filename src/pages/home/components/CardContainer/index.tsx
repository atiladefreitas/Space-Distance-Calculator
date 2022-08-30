import React from "react";

import { Container, ImageContainer, Input } from "./styles";

import moon from '../../../../assets/moon.png'
import { ScrollView } from "./components/ScrollView";

function CardContainer():JSX.Element {
 return (
  <Container>
    <ImageContainer>
      <img src={moon} alt="logo marca"/>
    </ImageContainer>
  <Input placeholder="What is the distance you want to travel?"/>
  <ScrollView />
  </Container>
 )  
}

export { CardContainer }