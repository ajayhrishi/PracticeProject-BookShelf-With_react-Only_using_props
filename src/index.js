import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import BookContext from './Contexts/book'

import './index.css'

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render( <BookContext.Provider value ={5}>  <App /> </BookContext.Provider>);