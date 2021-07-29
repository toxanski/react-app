// import './App.css';
import Articles from './components/Articles/Articles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';

function App() {
  return (
    <div style={{ padding: '10px 20px' }}>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Articles />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
