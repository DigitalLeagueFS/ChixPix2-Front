import React from "react";
import {Router} from 'react-router-dom'
import {Route} from 'react-router'
import {createBrowserHistory} from 'history'
import LoginForm from "../Form/Form";
import NavBar from "../NavigationBar/NavigationBar";
import UserInfo from '../My_Profile/My_Profile'
import Tasks from "../Tasks/Tasks";
import Companies from "../Companies/Companies";
import Clients from "../Clients/Clients";
import Workers from "../Workers/Workers"
import Archives from "../Archives/Archives";
import userTasks from "../userTasks/userTasks";
import LeftNavBar from "../LeftNavBar/LeftNavBar";

const hist = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <Router history={hist}>
                <Route exact path ='/' component={LoginForm}/>
                <Route path='/' component={NavBar}/>
                <Route>
                    <Route path='/main' render={(props) => (<LeftNavBar {...props} context='LeftNavBarMain'/>)}/>
                    <Route exact path='/main/companies' component={Companies}/>
                    <Route exact path='/main/clients' component={Clients}/>
                    <Route exact path='/main/tasks' component={Tasks}/>
                </Route>
                <Route>
                    <Route path='/mytasks' render={(props) => (<LeftNavBar {...props} context='LeftNavBarMyTasks'/>)}/>
                    <Route exact path='/mytasks/usertasks' component={userTasks}/>
                    <Route exact path='/mytasks/archive' component={Archives}/>
                </Route>
                <Route>
                    <Route exact path='/profile/my_profile' component={UserInfo}/>
                    <Route exact path='/profile/workers' component={Workers}/>
                    <Route path='/profile' render={(props) => (<LeftNavBar {...props} context='LeftNavBarProfile'/>)}/>
                </Route>
            </Router>
        )
    }
}


export default Routes

