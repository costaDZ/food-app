import React from 'react'
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ingredients from './pages/Ingredients';
import Nutrition from './pages/Nutrition';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ingredient">
          <Ingredients />
        </Route>
        <Route path="/nutrition">
          <Nutrition />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
