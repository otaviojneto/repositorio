import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../../../public/assets/logo.png';
import {
  Container,
  Hamburger,
  Link,
  Navigation,
} from './styles';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Hamburger onClick={() => setIsOpen(true)} isOpen={isOpen}>
        <span></span>
      </Hamburger>

      <img src={logo} alt="logo" />

      <Navigation isOpen={isOpen}>
        <button onClick={() => setIsOpen(false)}>X</button>

        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
        <Link> texto</Link>
      </Navigation>
    </Container>
  );
};

export default Nav;
