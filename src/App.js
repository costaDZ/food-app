import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Content, Ingredients, Nutrition, Main } from './pages';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/category">
          <Content />
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

export default App;
