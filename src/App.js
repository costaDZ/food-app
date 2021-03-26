import React from 'react'
//import { useGlobalContext } from './context';
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './pages/Content';

import Ingredients from './pages/sub-pages/Ingredients';
import Nutrition from './pages/sub-pages/Nutrition';



function App() {

  // const {page} = useGlobalContext();

  // console.log(page);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/category">
          <Content />
        </Route>
        <Route path="/category/ingredient">
          <Ingredients />
        </Route>
        <Route path="/category/nutrition">
          <Nutrition />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
