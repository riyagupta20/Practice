import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cards from './Components/Cards';

// Create a theme with spacing function
const theme = createTheme({
  spacing: (factor) => `${8 * factor}px`, // You can adjust the spacing factor according to your design
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Cards />
      </div>
    </ThemeProvider>
  );
};

export default App;
