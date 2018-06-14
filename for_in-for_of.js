  //ES6 Sintaxis "for...in" 
    // const myObj = [1,2,3,"hello"];
    // myObj.Prop1 = "lo que da la gana";
    // for(let p in myObj) {
    //     console.log(p);
    // }
    //ES6 Sintaxis "of" enumera los elementos pero no el Prop1
    const myObj = [1,2,3,"hello"];
    myObj.Prop1 = "lo que da la gana";
    for(let p of myObj) {
        console.log(p);
    }
