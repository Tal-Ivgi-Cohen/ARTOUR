import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes.js';
import { Header } from './cmps/util/Header.jsx';
import { Footer } from './cmps/util/Footer.jsx';

import './styles/styles.scss';

export function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
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
      </Router>
    </div>
  );
}
