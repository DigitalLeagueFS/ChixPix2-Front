import React from "react";
import {BusinessCenter, Dashboard, People,RecentActors,LibraryBooks,Portrait} from "@material-ui/icons";
import {Link} from "react-router-dom";
import './LeftMenuElem.css'



function LeftMenuElem(props){
    let img;
    switch (props.context) {
        case 'Companies':
            img = <BusinessCenter style={{pointerEvents:'none'}}/>;
            break;
        case 'My Tasks':
            img = <Dashboard style={{pointerEvents:'none'}}/>;
            break;
        case 'Clients':
            img = <People style={{pointerEvents:'none'}}/>;
            break;
        case 'Workers':
            img = <RecentActors style={{pointerEvents:'none'}}/>;
            break;
        case 'Archive':
            img = <LibraryBooks style={{pointerEvents:'none'}}/>;
            break;
        case 'My Profile':
            img = <Portrait style={{pointerEvents:'none'}}/>;
            break;
        default:
            break;
    }

    function handleClick(event){
       let arr = document.querySelectorAll('.left--navbar--elem');
       arr.forEach(elem=>{
           elem.classList.remove('addColor')
       });
       let elem = event.target;
       elem.classList.add('addColor');
    }
        return(
            <Link className='left--navbar--elem' to={props.link} onClick={handleClick}>
                    {img}
                    <p>{props.context}</p>
            </Link>
        )
}

export default LeftMenuElem