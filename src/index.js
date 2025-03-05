import React from 'react';
import ReactDOM from 'react-dom/client';


// function Greeting(){
//     return React.createElement("h1", [], "hello friend"); 
// }

// function Greeting(){
//     return React.createElement("div", {}, 
//         React.createElement("h1", {}, "hello friend")); 
// }


function Greeting(){
    return (
    <React.Fragment>
    <About />
    </React.Fragment>
    );
}

function About(){
    return(
        <>
        <p>hello guys</p>
        </>
    );
}

// render - display
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
