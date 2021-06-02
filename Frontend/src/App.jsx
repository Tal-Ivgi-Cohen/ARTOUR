import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes.js';
import { Header } from './cmps/util/Header.jsx';
import { Footer } from './cmps/util/Footer.jsx';

import './styles/styles.scss';


export function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)}>
            </Route>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
          </Switch>
        </main>
        {/* <Footer/> */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
