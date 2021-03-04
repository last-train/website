import React, { useContext } from 'react'
import { func, string } from 'prop-types';
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
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0.8rem;
    font-size: 1.2rem;
    z-index: 6;
  }
`;
const Toggler = ({theme, toggleTheme}) => {
  const themeContext = useContext(ThemeContext);
  toggleTheme = themeContext.themeToggler
  return (
    <Button onClick={toggleTheme} >
      { theme === 'dark' ? 'Turn Off Dark Mode' : 'Turn On Dark Mode' }
    </Button>
  );
};
Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggler;
