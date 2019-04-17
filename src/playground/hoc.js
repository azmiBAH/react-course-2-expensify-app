// Higher Order Component - A component(<-HOC) that renders another component(regular component)
// To reuse code
// render hijacking
// Prop manipulation
// Abstract state

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// "the another component"
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);


// regular component
// const withAdminWarning = (WrappedComponent) => {
//     // HOC
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     );

// }

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        <div>
            { props.isAuthenticated ?
             (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to continue</p>
            )}
            <WrappedComponent {...props}/>
        
        </div>
    };
}


// wrap component
    // the HOC               // WrappedComponent
// const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details"/>, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the details"/>, document.getElementById('root'));