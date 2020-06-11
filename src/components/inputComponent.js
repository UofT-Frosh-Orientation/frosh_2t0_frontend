import React from 'react';

export default function InputComp(props) {

    let required = props.optional ? '' : 'req';

    if(props.name === 'availability'){
        return (
            <div className="inputField">
                <label className={required}> 
                    <h4>{props.title} </h4>
                    <p>{props.subtitle}</p>
                </label>
                <textarea name={props.name}></textarea>
            </div>
        )
    }

    if(props.name === 'wifi') {
        return (
            <div className="inputField">
                <label className={required}> 
                    <h4>{props.title} </h4>
                    <p>{props.subtitle}</p>
                </label>
                <input className="radio" type="radio" value="Yes" name={props.name}/>   <label className="radio"> Yes </label>
                <input className="radio" type="radio" value="No" name={props.name}/>    <label className="radio"> No </label>
            </div>
        )
    }

    if(props.name === 'terms') {
        return (
            <div className="inputField">
                <label className={required}> 
                    <h4>{props.title} </h4>
                    <p>{props.subtitle}</p>
                </label>
                <input className="radio" type="radio" value="agree" name={props.name}/>   <label className="radio"> I Agree </label>
            </div>
        )
    }

    if(props.name === 'password'){
        return (
            <div className="inputField">
                <label> 
                    <h4>{props.title} </h4>
                    <p>{props.subtitle}</p>
                </label>
                <input type={props.name} name={props.name} required/>
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
            <label className="req">
                <h4>{props.title} </h4>
                <p>{props.subtitle}</p>
            </label>
            <select name={props.name} required>
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
            <label className="req">
                <h4>{props.title} </h4>
                <p>{props.subtitle}</p>
            </label>
            <select name={props.name} required>
            <option value="she/her">  She/Her </option>
            <option value="he/him">   He/Him  </option>
            <option value="other">    Other   </option>
            </select>
        </div>
        )
    }
    return(
        <div className="inputField">
            <label className={required}>
                <h4>{props.title} </h4>
                <p>{props.subtitle}</p> 
            </label>
            <input type="text" name={props.name} />
        </div>
    );
}