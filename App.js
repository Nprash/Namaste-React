
const parent = React.createElement(
    "div",
    { id: "parent" }, "from parent",

    React.createElement(
        "div",
        { id: "child" },"from 1st child",
        React.createElement("h3", {}, "im from 2nd child h3 tag")
    )
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const parentdiv = document.createElement('div');
// const attri = parentdiv.setAttribute('.first_div');

// const child= document.createElement('h2');
// const attri1 = attri.appendChild('child')

// child

