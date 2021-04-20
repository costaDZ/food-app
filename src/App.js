import React from 'react'
//import { useGlobalContext } from './context';
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './pages/Content';


import Ingredients from './pages/Ingredients';
import Nutrition from './pages/Nutrition';



function App() {

  // const {page} = useGlobalContext();

  // console.log(page);

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

export default App
