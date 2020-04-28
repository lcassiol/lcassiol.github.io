import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #009999;
`;

export const TitleDescription = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const ProjectList = styled.div``;

export const Link = styled.a``;

export const ContentDetails = styled.div`
  background-color: #008cba; /* essa cor vc altera que a cor do overlay */
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.5s ease;
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`;

export const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
`;

export const DetailsText = styled.div``;

export const DetailsTitle = styled.div``;

export const Project = styled.div`
  position: relative;

  &:hover {
    opacity: 1;
  }
`;
