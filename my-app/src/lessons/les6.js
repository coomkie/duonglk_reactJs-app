import React, { useEffect, useState } from 'react';

const Les6 = () => {
    const [number, setNummber] = useState(20);
    //const [loginInfo, setLoginInfo] = useState(null);
    const [name, setName] = useState('');
    //useEffect
    useEffect(() => {
        setName('Duong');
        setNummber(number + 1);
    },[])

    //useRef -> access to DOM
    return (
        <div>

        </div>
    );
};

export default Les6;