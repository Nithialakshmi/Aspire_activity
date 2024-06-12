import React from 'react'

function Hello(props){
    console.log(props);
    return(
        <div>Hello EveryOne! Welcome to react
        <h1>Username: {props.username} and password: {props.password} </h1>
        </div>
    )
}

export default Hello;