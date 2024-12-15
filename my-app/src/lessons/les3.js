import React from 'react';

const Les3 = () => {
    //function

    function greet() {
        var name = 'duong';
        console.log(name);
    }
    greet();

    const sayHello = function sayHello2() {
        console.log("Say hello 2 function")
    };

    const square = function () {
        console.log("square");
    };
    square();

    const meet = () => {
        console.log("meet");
    };
    meet();
    
    return (
        <div>
        </div>
    );
};

export default Les3;