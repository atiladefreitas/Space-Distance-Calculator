import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  height: 100%;
  margin-top: 1rem;
  border-radius: 4px;
  background-color: white;
  border: 2px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InformationContainer = styled.section`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  border-bottom: 1px solid #c4c4c4;
`;

export const SpaceshipName = styled.p`
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin-left: 1.5rem;
`;
export const Stops = styled.p`
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;

  margin-right: 1.5rem;
`;

export const TableTitle = styled.div`
  widows: 30rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;

  & p {
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
  }
`;
