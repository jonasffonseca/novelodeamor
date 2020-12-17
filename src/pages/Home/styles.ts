import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpg';
import instagramImg from '../../assets/instagram.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  align-items: stretch;
  position: relative;
`;

export const WhatsApp = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 120px;
  padding: 10px;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
export const Instagram = styled.img`
  position: absolute;
  bottom: 0;
  right: 120px;
  max-width: 100px;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  max-width: 100%;
  height: auto;
  opacity: 0.6;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    display: flex;
    color: #fff;
    font-weight: bold;
    align-items: center;
  }

  img {
    border-radius: 50%;
    padding: 10px;
    size: 20%;
    &:hover {
      background: url(${instagramImg}) no-repeat center;
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;
