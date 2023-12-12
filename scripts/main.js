// changes h1 to "Hello world!"
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bebs.JPG") {
        myImage.setAttribute("src","images/bebs2.JPG");
    }
    else {
        myImage.setAttribute("src","images/bebs.JPG");
    }        
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name",myName);
        myHeading.textContent = `Beb lafs ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Beb lafs ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}