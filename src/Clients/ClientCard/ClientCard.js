import React from 'react'
import './ClientCard.css'

function ClientCard(props){
        return(
            <div className='clientCard' key={props.firstName}>
                <img src={props.link}
                  className='clientCard-img' alt={props.firstName}/>
                <div>
                    <h2>{props.firstName}</h2>
                    <h2>{props.secondName}</h2>
                    <h3>{props.company}</h3>
                </div>
            </div>
        )
}

export default ClientCard;