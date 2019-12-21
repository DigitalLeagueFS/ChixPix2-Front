import React from "react";
import {Router} from 'react-router-dom'
import {Route} from 'react-router'
import {createBrowserHistory} from 'history'
import LoginForm from "../Form/Form";
import NavBar from "../NavigationBar/NavigationBar";
import UserInfo from '../My_Profile/My_Profile'
import Profile from '../Profile/Profile'
import Main from '../Main/Main'
import Task from "../Task/Task";

const hist = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <Router history={hist}>
                <Route exact path ='/' component={LoginForm}/>
                <Route path='/' component={NavBar}/>
                <Route path='/main' component={Main} />
                <Route path='/task' component={Task} />
                <Route path='/profile' component={Profile}/>
                <Route path='/profile/my_profile' component={UserInfo}/>
            </Router>
        )
    }
}


export default Routes

