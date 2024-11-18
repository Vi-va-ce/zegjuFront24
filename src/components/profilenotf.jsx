import React from 'react';
import Switch from 'react-router-dom/Switch';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Profilemain from './components/Profile/Profilemain';
import Changepassword from './components/Profile/Changepassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profilemain} />
        <Route exact path="/changepassword" component={ChangePassword} />
      </Switch>
    </Router>
  );
}

