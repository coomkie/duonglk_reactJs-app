import React from 'react';

const Les4 = () => {
    //method
    //1.push = add last element
    let arr = [1, 2, 3, 4, 5];
    //console.log("old: " + arr);
    arr.push(6);
    // console.log("new:" + arr);

    //2. pop - delete final element
    let removeArr = arr.pop();

    //3. foreach

    // let nums = [1, 2, 3, 4, 5];
    // nums.forEach((num) => {
    //     let doubleN = num * 2;
    //     console.log(doubleN);
    // });

    // let num2 = [1, 2, 3];
    // let doubleN2 = num2.map(num => num * 2);
    // console.log(doubleN2);

    let person = {name: "Alice", age: 20};
    console.log(person.name + ","+ person.age);
    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(Object.entries(person));
    return (
        <div>
            hi
        </div>
    );
};

export default Les4;