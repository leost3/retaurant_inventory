// let's go!
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={StorePicker} />
                    <Route path='/store/:storeId' component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.querySelector('#main'));