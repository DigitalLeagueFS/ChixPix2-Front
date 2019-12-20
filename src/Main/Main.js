import React from 'react'
import './Main.css'
import LeftMenuElem from "./LeftMenuElem";

class Main extends React.Component{

    render() {
        return(
            <div className='main--box'>
                   <div className='left--navbar'>
                       <LeftMenuElem context='Companies' link='/main/companies'/>
                       <LeftMenuElem context='Tasks' link='/main/tasks'/>
                       <LeftMenuElem context='Clients' link='/main/clients'/>
                   </div>
            </div>
        )
    }
}

export default Main;