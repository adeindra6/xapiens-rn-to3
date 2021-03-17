import React, { Component, useState } from 'react';

const usePasswordValidationForm = (p = '') => {
    const [password, setPassword] = useState(p);

    function verifPassword(text) {
        if(text.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    
    if(verifPassword(password)) {
        const Password = () => setPassword(password);
        return{
            Password,
            verifPassword,
        };
    }
    else {
        const Password = () => setPassword('');
        return{
            Password,
            verifPassword,
        };
    }
}

export default usePasswordValidationForm;