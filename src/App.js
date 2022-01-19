

import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home'
import Create from './components/Create'
import BlogDetail from './components/BlogDetail'
import Error from './components/Error'
import EditBlog from './components/EditBlog'


function App() {
  
  
  return (
    
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home   />
            </Route>
            <Route  path="/create">
              <Create   />
            </Route>
            <Route  path="/blogs/:id">
              <BlogDetail   />
            </Route>
            <Route  path="/edit/:id">
              <EditBlog   />
            </Route>
            <Route  path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
 
    
  );

}




export default App;
