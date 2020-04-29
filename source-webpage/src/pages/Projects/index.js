import React, { useState } from 'react';

import {
  Container,
  Header,
  Title,
  TitleDescription,
  Filter,
  FilterButton,
  ProjectList,
  Project,
  Image,
  DetailsWrapper,
  DetailsTitle,
  DetailsText,
  Link,
} from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('node');

  return (
    <Container>
      <Header>
        <Title>Projetos Desenvolvidos</Title>
        <TitleDescription>
          Aqui estou listando alguns projetos que eu criei ou contribui.
        </TitleDescription>
      </Header>

      <Filter>
        <FilterButton
          active={filter === 'node'}
          onClick={() => setFilter('node')}
        >
          Node.js
        </FilterButton>
        <FilterButton
          active={filter === 'react'}
          onClick={() => setFilter('react')}
        >
          React
        </FilterButton>
        <FilterButton active={filter === 'rn'} onClick={() => setFilter('rn')}>
          React-native
        </FilterButton>
      </Filter>

      <ProjectList>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>Fastfeet RN</DetailsTitle>
              <DetailsText>
                Aplicação da entregadora ficticia fasfeet, projeto final
                conclusão bootcamp da Rocketseat
              </DetailsText>
              <Link href="#">Veja no GitHub</Link>
            </DetailsWrapper>
          </div>
        </Project>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>Be the Hero RN</DetailsTitle>
              <DetailsText>
                Projeto desenvolvido durante a semana OMNI Stack 8.0 da
                Rocketseat
              </DetailsText>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/c%C3%A1ssio-carvalho-58270853"
              >
                Ver no GitHub
              </Link>
            </DetailsWrapper>
          </div>
        </Project>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>Ourwerewolf RN</DetailsTitle>
              <DetailsText>
                Projeto desenvolvido para praticar RN, junto com meu primo
                Daniel, um jogo para interação entre um grupo de pessoas para
                gerar muita confusão e diversão.
              </DetailsText>
              <Link href="#">Veja no GitHub</Link>
            </DetailsWrapper>
          </div>
        </Project>
      </ProjectList>
    </Container>
  );
}
