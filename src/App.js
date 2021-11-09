import './App.css';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'

import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Whatwedo from './Components/WhatWeDo/whatwedo';
import Whoweare from './Components/WhoWeAre/whoweare';
import Howwework from './Components/HowWeWork/howwework';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/whatwedo" exact component={Whatwedo} />
        <Route path="/whoweare" exact component={Whoweare} />
        <Route path="/howwework" exact component={Howwework} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
