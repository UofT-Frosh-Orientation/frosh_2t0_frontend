import React from 'react';

export default function InputComp(props) {

    if(props.name === 'password'){
        return (
            <div className="inputField">
                <label> {props.title}</label>
                <input type={props.name} name={props.name}/>
            </div>
        )
    }
    if(props.name === 'next') {
        return (
        <div className="buttonField">
            <input type="submit" name={props.name} value={props.title}/>
        </div>
        )
    }
    if(props.name === 'shirt') {
        return(
        <div className="inputField">
            <label> {props.title} </label>
            <select name={props.name}>
            <option value="extraLarge"> XL  </option>
            <option value="large">      L   </option>
            <option value="medium">     M   </option>
            <option value="small">      S   </option>
            <option value="extraSmall"> XS  </option>
            </select>
        </div>
        )
    }

    if(props.name === 'pronouns') {
        return(
        <div className="inputField">
            <label>{props.title}</label>
            <select name={props.name}>
            <option value="she/her">  She/Her </option>
            <option value="he/him">   He/Him  </option>
            <option value="other">    Other   </option>
            </select>
        </div>
        )
    }
    return(
        <div className="inputField">
        <label>{props.title}</label>
        <input type="text" name={props.name}/>
        </div>
    );
}