import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import './index.css';
import Container from './Components/Container';
import Profile from './Components/Profile';

function Router(){
    return (
        <BrowserRouter>
            <Route path='/' exact component= {Container} />
            <Route path='/:username' exact component={Profile} />
        </BrowserRouter>
    )
}



ReactDOM.render(<Container />, document.getElementById('root'));


