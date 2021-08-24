import * as React from "react";
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Portfolio } from "./Pages/Portfolio";
import { Welcome } from "./Pages/Welcome";

const theme = createTheme({
  overrides: {
    MuiTable: {
      root: {
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
      },
    },
    MuiTableCell: {
      body: {
        color: 'white',
      },
      head: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    MuiButton: {
      text: {
        color: 'white',
      },
    },
  },
});

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/" component={Welcome} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
