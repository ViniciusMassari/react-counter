import { Button } from './components/Button';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './global';
import { Router } from './Router';
import { CyclesContextProvider } from './contexts/CyclesContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
