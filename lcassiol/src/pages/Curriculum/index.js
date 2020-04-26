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
} from './styles';

export default function Curriculum() {
  return (
    <Container>
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
