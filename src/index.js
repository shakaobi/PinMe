import React from "react";
import  {createRoot}  from "react-dom/client"  ;
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';
const container = document.getElementById('root');
//replace ReactRouter with create root

const root = createRoot(container);
root.render(
    <Router>
        <App/>
    </Router>
);