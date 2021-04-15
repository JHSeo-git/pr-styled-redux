import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import StyleGuideLayout from './components/layouts/StyleGuideLayout';
import StyleGuideMain from './components/layouts/StyleGuideMain';
import ButtonGuide from './pages/styleguide/ButtonGuide';
import ColorGuide from './pages/styleguide/ColorGuide';
import GlobalStyle from './lib/styles/GlobalStyle';
import { SinglexTheme } from './lib/styles/SinglexTheme';
import Foundation from './pages/styleguide/Foundation';
import StyleGuideFooter from './components/layouts/StyleGuideFooter';

function App() {
  return (
    <ThemeProvider theme={SinglexTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/styleguide/:category?">
            <Switch>
              <Route exact path="/styleguide">
                <Foundation />
              </Route>
              <StyleGuideLayout>
                <StyleGuideMain>
                  <Route path="/styleguide/color">
                    <ColorGuide />
                  </Route>
                  <Route path="/styleguide/button">
                    <ButtonGuide />
                  </Route>
                </StyleGuideMain>
                <StyleGuideFooter>
                  Footer is here...............
                </StyleGuideFooter>
              </StyleGuideLayout>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
