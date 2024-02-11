import { Button } from './components/Button';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './global';
import { Router } from './Router';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
