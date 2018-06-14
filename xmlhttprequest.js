const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

request.onload = function () {
    console.log(this.responseText);
    //let jsonO = JSON.parse(this.responseText);
    console.log("Response received");
};

request.onerror = function () {
    console.log("There was a problem with the request");
};

request.open("get", "https://api.npmjs.org/downloads/range/2018-02-28:2018-03-09/measure-duration", true);
request.send();
console.log("La peticion ye esta hecha...");