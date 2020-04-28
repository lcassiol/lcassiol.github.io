import React from 'react';

import {
  Container,
  Header,
  Title,
  TitleDescription,
  ProjectList,
  Project,
  Image,
  DetailsWrapper,
  DetailsTitle,
  DetailsText,
  Link,
} from './styles';

export default function Projects() {
  return (
    <Container>
      <Header>
        <Title>Projetos Desenvolvidos</Title>
        <TitleDescription>
          Aqui estou listando alguns projetos que eu criei ou contribui.
        </TitleDescription>
      </Header>

      <ProjectList>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>This is a title</DetailsTitle>
              <DetailsText>This is a short description</DetailsText>
              <Link href="#">Veja no github</Link>
            </DetailsWrapper>
          </div>
        </Project>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>This is a title</DetailsTitle>
              <DetailsText>This is a short description</DetailsText>
              <Link href="#">Veja no github</Link>
            </DetailsWrapper>
          </div>
        </Project>
        <Project>
          <Image src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div className="overlay">
            <DetailsWrapper>
              <DetailsTitle>This is a title</DetailsTitle>
              <DetailsText>This is a short description</DetailsText>
              <Link href="#">Veja no github</Link>
            </DetailsWrapper>
          </div>
        </Project>
      </ProjectList>
    </Container>
  );
}
