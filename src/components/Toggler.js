import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/theme-context'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  transition: all 0.4s ease-in;

  :hover {
    transform: translateY(-1px);
    border: 3px solid ${({ theme }) => theme.toggleBorder};
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0.8rem;
    font-size: 1.2rem;
    z-index: 6;
  }
`;
const Toggler = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Button onClick={themeContext.themeToggler} >
      { themeContext.theme === 'dark' ? 'Turn Off Dark Mode' : 'Turn On Dark Mode' }
    </Button>
  );
};

export default Toggler;
