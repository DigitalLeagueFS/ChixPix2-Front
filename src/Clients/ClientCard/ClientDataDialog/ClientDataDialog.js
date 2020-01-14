import React from "react";
import './ClientDataDialog.css'
import FormPropsTextField from "../../../Form/FormPropsTextField";

function InfoCard(props) {
    return(
    <div className='client-info-dialog'>
        <div className='client-form-dialog'>
            <div>
                <img src={props.link} className='client-img-dialog' alt={props.firstName}/>
            </div>
            <div>
                {FormPropsTextField(props.name,'Name')}
            </div>
            <div>
                {FormPropsTextField(props.surname,'Surname')}
            </div>
            <div>
                {FormPropsTextField(props.thirdName,'Third Name')}
            </div>
            <div>
                {FormPropsTextField(props.phone,'Phone')}
            </div>
            <div>
                {FormPropsTextField(props.date,'Date')}
            </div>
            <div>
                {FormPropsTextField(props.company_name,'Company')}
            </div>
        </div>
    </div>)
}

export default InfoCard;