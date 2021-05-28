import { HashRouter as Router, Route } from 'react-router-dom'
import { routes } from './routes.js'
import { Header} from './cmps/Header.jsx'
import { Footer} from './cmps/Footer.jsx'

import './App.scss';
import './styles/styles.scss'




 export function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </main>
        <Footer/>
      </Router>
    </div>

  );
}



