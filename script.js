/*
DOM: document object model
    - allows JS to interact with HTML and CSS
    - specifies how a browser should create a model of an HTML page
    - specifies how JS can access and update the contents of a web page
    -is an object-oriented representation of a web page, which can be modified with a scripting language (e.g. JS)

    1. Makes a model of an HTML page
    2. Access and manipulate the HTML page

    Accessing:
        Common Methods (Single)
        - getElementById()
        - querySelector()

        Common Methods (Multiple)
        - querySelectorAll()
        - getElementsByClassName()
        - getElementsByTagName()

    Manipulating Data
        Common Methods for HTML Content
        - innerHTML: set text as well as HTML elements
        - textContent: same as innerText, but returns full text of a node
        - createElement
        - innerText: references or allows change to the text of a specified element; will return only visible text in a node

        Common Methods for Tag Attributes
        - className()
        - id()
        - setAttribute()
        - getAttribute()
*/
let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = "blue";

let bodyCopy = document.querySelectorAll('p.bodyCopy'); // returns a node list
// console.log(bodyCopy);
// bodyCopy[3].innerHTML = "Changed";
bodyCopy.forEach((pTag, index) => {
    // pTag.innerText = index + ". " + pTag.innerText;
    // pTag.innerText = `${index}. ${pTag.innerText}`;
    // pTag.textContent = `${index}. ${pTag.textContent}`;
    // pTag.innerHTML = `${index + 1}. ${pTag.innerHTML}`;
    pTag.prepend(`${index + 1}. `);
})

let spanTest = document.getElementById('spanTest');
console.log("textContent", spanTest.textContent);
console.log("innerText", spanTest.innerText);
console.log("innerHTML", spanTest.innerHTML);

let clickThisButton = document.getElementById('clickThisButton');
// clickThisButton.addEventListener('click',function(){
//     console.log('foo');
// });

// clickThisButton.addEventListener('click', () => {
//     console.log(this);
// })

clickThisButton.addEventListener('click', event => {
    // console.log(this); // node object
    // console.log(event.target); // DOM markup
    // event.target.style.color = "red";
    // event.target.parentNode.style.backgroundColor = "#ccc";
    // event.target.classList.add("foo");

    let bgColor = event.target.style.backgroundColor;
    if (bgColor === "red" || !bgColor) {
        bgColor = "blue";
    } else {
        bgColor = "red";
    }
})

// let listener = () => console.log("clicked");
// function listener() {
//     console.log("clicked");
// }
// clickThisButton.addEventListener('click', listener);


let nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keyup', event => {
    // console.log(event.target.value);
    document.getElementsByTagName('p')[1].innerText = event.target.value;
    
    if (event.target.value == '') {
        document.getElementsByTagName('p')[2].innerText = 'nothing entered';
    } else {
        document.getElementsByTagName('p')[2].innerText = event.target.value;
    }
})