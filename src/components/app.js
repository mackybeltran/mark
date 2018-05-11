import React, { PureComponent } from 'react';
import './App.scss';
import Home from './Home.jsx';
import Admin from './Admin.jsx'
import { Route, BrowserRouter, Link, Switch, Router} from 'react-router-dom';

class App extends PureComponent {

    render() {
        return <BrowserRouter>
            <div className='app'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}

export default App;
