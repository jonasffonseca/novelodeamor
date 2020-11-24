import React from 'react';
import {
  Container,
  Background,
  Logo,
  WhatsApp,
  Instagram,
  SocialMedia,
} from './styles';
import logoImg from '../../assets/logo.jpg';
import whatsappImg from '../../assets/whatsapp.png';
import instagramImg from '../../assets/instagram.png';

const Home: React.FC = () => {
  return (
    <>
      <SocialMedia>
        <Container>
          <Background />
          <Logo>
            <a
              href='https://www.instagram.com/_novelodeamor/' // eslint-disable-next-line react/jsx-no-target-blank
              target='_blank'
            >
              <img src={logoImg} alt='logo' />
            </a>
            <h2>🧶 Handmade com amor</h2>
            <h2>🧷 Sob encomenda</h2>
            <h2>🧵 Feito à mão</h2>
            <h2>📦 Enviamos para todo o Brasil</h2>
          </Logo>
        </Container>
        <a
          href='https://www.instagram.com/_novelodeamor/'
          // eslint-disable-next-line react/jsx-no-target-blank
          target='_blank'
        >
          <Instagram src={instagramImg} alt='Instagram' />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=+5551993510636&text=Olá. Vi seu perfil no site e gostaria de mais informações sobre seu trabalho'
          // eslint-disable-next-line react/jsx-no-target-blank
          target='_blank'
        >
          <WhatsApp src={whatsappImg} alt='Whatsapp' />
        </a>
      </SocialMedia>
    </>
  );
};

export default Home;
