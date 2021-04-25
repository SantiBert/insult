import React, { useState, useEffect } from 'react';
import Insult from './components/Insult';
import styled from '@emotion/styled';

const Content = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007b35 0%,  #007b35 40%,  #0f574e 100%);
  background-size: 300px;
  font-size: 'Arial', Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8 ease;

  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;

function App() {

  const [ insult, getInsult] = useState({});
  
  const callApi = async () => {
    const api = await fetch('https://evilinsult.com/generate_insult.php?lang=es&type=json');
    const insult = await api.json();
    getInsult(insult[2]);
  }

  useEffect( () => {
    callApi()
  }, []);
  return (
    <Content>
      <Insult
        insult={insult}
      />
      <Button
        onClick={callApi}
      >
        Obtener frase
      </Button>
    </Content>
  );
}

export default App;
