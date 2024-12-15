import React from 'react';

const Les9 = () => {
    function showName(name, callback) {
        console.log(name);
        callback();
    }

    function sayHello() {
        console.log("Done");
    }
    showName("Jonh", sayHello);
    return (
        <div>

        </div>
    );
};

export default Les9;