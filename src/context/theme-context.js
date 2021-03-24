import React from 'react';

const themeContext = React.createContext({
  theme: '',
  themeToggler: () => {}
});

export default themeContext;