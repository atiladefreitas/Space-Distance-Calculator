import React, { useEffect, useState } from 'react';
import { FetchSpaceships } from '../../../../../../api/spaceship';

import { Container, InformationContainer, SpaceshipName, TableTitle, Stops } from './styles';

interface iInput {
  value: number;
}

function ScrollView({ value }: iInput): JSX.Element {
  const [spaceship, setSpaceship] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = () => {
      FetchSpaceships().then((res) => {
        if (res !== null) {
          setSpaceship(res.results);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div
        style={{
          width: '100%'
        }}
      >
        <TableTitle>
          <p
            style={{
              marginLeft: '1.5rem'
            }}
          >
            Spaceship
          </p>
          <p
            style={{
              marginRight: '1.5rem'
            }}
          >
            Stops
          </p>
        </TableTitle>
        {spaceship.map((s) => (
          <div key={s.url}>
            <InformationContainer>
              <SpaceshipName>{s.name}</SpaceshipName>
              <Stops>{Math.ceil(value / s.MGLT)}</Stops>
            </InformationContainer>
          </div>
        ))}
      </div>
    </Container>
  );
}

export { ScrollView };
