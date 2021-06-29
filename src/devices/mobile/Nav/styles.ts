import styled from 'styled-components';
import theme from '../../../styles/theme';

interface openProps {
  isOpen?: boolean;
}

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.grey.dark};
  display: flex;
  height: 44px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  img {
    height: 30px;
    justify-content: center;
  }
`;

export const Hamburger = styled.button<openProps>`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  left: 0;
  padding: 4px;
  position: absolute;
  width: 44px;

  span {
    background-color: white;
    border-radius: 3px;
    display: block;
    height: 2px;
    left: 6px;
    position: relative;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 24px;

    &::before,
    &::after {
      background-color: white;
      border-radius: 3px;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      width: 24px;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }
  }
`;

export const Navigation = styled.div<openProps>`
  background-color: ${theme.colors.grey.dark};
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: ${props => (props.isOpen ? 0 : '-100%')};
  overflow: auto;
  padding: 20px 20px 40px;
  position: absolute;
  top: 0;
  transition: 0.3s ease-in-out;
  width: 80%;

  ::-webkit-scrollbar {
    width: 0px;
  }

  button {
    position: absolute;
    right: 2px;
    width: 20px;
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`;
