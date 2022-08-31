import React, {useState} from "react";

import { Container, ImageContainer, Input } from "./styles";

import moon from '../../../../assets/moon.png'
import { ScrollView } from "./components/ScrollView";

function CardContainer():JSX.Element {
  const [input, setInput] = useState<number>(0);

  const handleChange = (event:any) => {
    setInput(event.target.value);
  };

 return (
  <Container>
    <ImageContainer>
      <img src={moon} alt="logo marca"/>
    </ImageContainer>
  <Input type={'number'} placeholder="What is the distance you want to travel?" value={input} onChange={handleChange}/>
  <ScrollView value={input}/>
  </Container>
 )  
}

export { CardContainer }