import React from "react";
import { CardContainer } from "./components/CardContainer";
import { Container } from "./styles";

function Home():JSX.Element {
 return (
  <Container>
    <CardContainer />
  </Container>
 )  
}

export { Home }