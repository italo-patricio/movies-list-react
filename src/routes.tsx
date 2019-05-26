import React from 'react';


import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import MainPage from './pages/main';
import MoviePage from './pages/movie';

const Routes = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/movie/:id" component={MoviePage} />
        </Switch>
    </BrowserRouter>
}


export default Routes;
