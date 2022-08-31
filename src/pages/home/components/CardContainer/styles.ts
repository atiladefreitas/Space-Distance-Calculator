import styled from 'styled-components';

export const Container = styled.section`
  width: 45rem;
  height: 40rem;
  border-radius: 16px;
  background-color: #fff8f0;

  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 5rem;
    height: 5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 3rem;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  font-size: 16px;

  ::placeholder {
    padding-left: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
