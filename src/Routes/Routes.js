import React from "react";
import {Router} from 'react-router-dom'
import {Route} from 'react-router'
import {createBrowserHistory} from 'history'
import LoginForm from "../Form/Form";
import NavBar from "../NavigationBar/NavigationBar";

const hist = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <Router history={hist}>
                <Route exact path ='/' component={LoginForm}/>
                <Route path='/' component={NavBar}/>
            </Router>
        )
    }
}


export default Routes

