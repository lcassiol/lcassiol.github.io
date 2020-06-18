import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Education = styled.div`
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid #009980;
  max-width: 1120px;
  color: #009999;
`;

export const Courses = styled.div`
  max-width: 1120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Course = styled.div`
  margin-top: 40px;
  padding: 25px;
  box-shadow: 1px 1px 3px #9e9e9e;
`;

export const Institution = styled.div`
  font-size: 18px;
  color: #009980;
  font-weight: bold;
`;

export const Location = styled.div`
  margin-top: 3px;
  font-size: 12px;
`;

export const Level = styled.div`
  margin-top: 17px;
  font-weight: bold;
  padding-bottom: 4px;
  border-bottom: 2px solid #009980;
`;

export const Bio = styled.div``;

export const Description = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  max-width: 890px;
  box-shadow: 1px 1px 3px #9e9e9e;
  padding: 25px;
  font-size: 16px;
  text-align: justify;
`;

export const ImageProfile = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 1%;
  box-shadow: 1px 1px 3px #9e9e9e;
  margin-top: 40px;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
