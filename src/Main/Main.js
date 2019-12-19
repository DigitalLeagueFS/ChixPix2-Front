import React from 'react'
import { Link } from 'react-router-dom'

import './Main.css'
import {BusinessCenter, Dashboard, People} from "@material-ui/icons";

class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = event=>{
        let arr = document.querySelectorAll('.left--navbar--elem');
        let elem = event.target;
        arr.forEach(elem=>{
            elem.style.backgroundColor = '';
            elem.style.borderBottom = 0
        });
        elem.style.backgroundColor = 'whitesmoke';
        elem.style.borderBottom = '1px solid;'
    };

    render() {
        return(
            <div className='main--box'>
                   <div className='left--navbar'>
                       <ul>
                           <li className='left--navbar--elem'>
                               <div>
                                   <BusinessCenter/>
                               </div>
                               <div>
                                   <Link to={''} onClick={this.handleClick}>Companies</Link>
                               </div>
                           </li>
                           <li className='left--navbar--elem'>
                               <div>
                                   <Dashboard/>
                               </div>
                               <div>
                                   <Link to={''} onClick={this.handleClick}>Tasks</Link>
                               </div>
                           </li>
                           <li className='left--navbar--elem'>
                               <div>
                                   <People/>
                               </div>
                               <div>
                                   <Link to={''} onClick={this.handleClick}>Clients</Link>
                               </div>
                           </li>
                       </ul>
                   </div>
            </div>
        )
    }
}

export default Main;