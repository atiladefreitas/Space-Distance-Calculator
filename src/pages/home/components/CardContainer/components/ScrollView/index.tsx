import React, { useEffect, useState } from "react";
import { FetchSpaceships } from "../../../../../../api/spaceship";

import { Container } from "./styles";

interface iInput {
  value: number;
}

function ScrollView({ value }: iInput):JSX.Element {
  const [spaceship, setSpaceship] = useState<any[]>([])

  useEffect(() => {
    const fetchData = () => {
      FetchSpaceships().then((res) => {
        if (res !== null){
          setSpaceship(res.results)
        }
      })}
      fetchData()
  }, [])

 return (
  <Container>
    {spaceship.map((s) => (<div key={s.url}><p>{s.name} {Math.ceil(value/s.MGLT)}</p></div>))}
  </Container>
 )  
}

export { ScrollView }