import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Following from './components/Following/Following';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/following" component={Following} />
          </Switch>
        </Layout>
      
    </Router>
    </>
  );
}

export default App;
