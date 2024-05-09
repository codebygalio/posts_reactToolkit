import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { fetchUsers } from './features/users/usersSlice.js'; 
import { fetchPosts } from './features/posts/postsSlice.js';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router>
        <Routes><Route path='/*' element={<App />} /></Routes>
      </Router> */}
      <Router><App /></Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
