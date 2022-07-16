import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('./home-background.svg') no-repeat 700px bottom;
  background-color: ${props => props.theme.background_dark};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 54px;
  color: ${props => props.theme.font_primary};
  padding-bottom: 50px;
  text-align: center;

  max-width: 500px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  color: ${props => props.theme.font_secondary};
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const ButtonBox = styled.div`
  background-color: ${props => props.theme.bg_teal};
  color: ${props => props.theme.white};
  height: 48px;
  width: 40px;
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.fields_background};
  color: ${props => props.theme.white};
  height: 50px;
  border: 1px solid teal;
  border-radius: 5px;

  position: relative;
  padding-left: 50px;

  &:hover {
    filter: opacity(0.9);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: 'home-image.svg',
}))`
  width: 50%;
`;
