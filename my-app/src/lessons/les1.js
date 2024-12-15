import React from 'react';
const Les1 = () => {
    //let 
    let x = 10;
    x = 20;
    x = 30;
    console.log(x);

    //var
    const z = 10;
    z= 20;

    function testVar(){
        if(true){
            var x = 10;
        }
        console.log("var: ",x);
    }
    return (
        <div>
            Result: {z}
        </div>
    );
};

export default Les1;