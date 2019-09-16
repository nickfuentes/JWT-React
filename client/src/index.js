import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BroswerRouter, Swith, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Login from './components/Login'
import MyBooks from './components/MyBooks'



ReactDOM.render(
<BroswerRouter>
    <BaseLayout>
        <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route pathe="/my-books" component={MyBooks}></Route>
        </Switch>
    </BaseLayout>
</BroswerRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
