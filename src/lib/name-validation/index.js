import React, { Component, useState } from 'react';

const useNameValidationForm = (n = '') => {
    const [name, setName] = useState(n);

    function verifName(text) {
        const reg = /^[A-Za-z\d\s]+$/;
        let verifiedName = reg.test(String(text).toLowerCase());
        return verifiedName;
    }
    
    if(verifName(name)) {
        const Name = () => setName(name);
        return{
            Name,
            verifName,
        };
    }
    else {
        const Name = () => setName('');
        return{
            Name,
            verifName,
        };
    }
}

export default useNameValidationForm;