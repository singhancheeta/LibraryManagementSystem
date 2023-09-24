// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Import your components here
import Login from './components/Login';
import Categories from './components/Categories';
import BookList from './components/BookList';
import Cart from './components/Cart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? (
              <Categories setSelectedCategory={setSelectedCategory} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
          </Route>
          <Route path="/category/:categoryName">
            <BookList selectedCategory={selectedCategory} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
