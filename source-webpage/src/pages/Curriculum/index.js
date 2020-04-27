import React from 'react';

import {
  Container,
  Education,
  Title,
  Courses,
  Course,
  Institution,
  Location,
  Level,
  Bio,
  Description,
} from './styles';

export default function Curriculum() {
  return (
    <Container>
      <Bio>
        <Title>EU</Title>
        <Description>
          Gosto de me descrever como uma pessoa dedicada, busco sempre dar o meu
          melhor onde eu estiver, me agrada quando percebo que estou conseguindo
          contribuir com o ambiente onde me encontro. Independente da tecnologia
          utilizada durante o trabalho busco aprender da forma que seja possivel
          e contribuir com o meu melhor. Sempre tentando ser bem racional e
          logico, buscando atenção aos detalhes e descansando apenas quando o
          problema estiver resolvido. Não me prendo a tecnologia utilizada, meu
          foco é resolver o desafio que me foi lançado.
        </Description>
      </Bio>
      <Education>
        <Title>FORMAÇÃO</Title>
        <Courses>
          <Course>
            <Institution>FACULDADE DOS GUARARAPES - UNIFG</Institution>
            <Location>Jaboatão dos Guararapes, PE</Location>
            <Level>Bacharelado Ciência da Computação</Level>
          </Course>
          <Course>
            <Institution>
              ESCOLA POLITÉCNICA DE PERNAMBUCO - UPE POLI
            </Institution>
            <Location>Recife, PE</Location>
            <Level>Pós-graduação em Engenharia de Software</Level>
          </Course>
        </Courses>
      </Education>
    </Container>
  );
}
