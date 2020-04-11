import React from 'react';
import MainView from '../views/MainView'
import FavView from '../views/FavView'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainTemplate from "../templates/MainTemplate";
import {Provider} from 'react-redux';
import store from '../store/index';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <MainTemplate>
                <Switch>
                    <Route exact path="/" component={MainView}/>} />
                    <Route path="/fav" component={FavView}/>} />
                </Switch>
            </MainTemplate>
        </BrowserRouter>
    </Provider>
);

export default Root;