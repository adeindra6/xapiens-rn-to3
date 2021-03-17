import React, { Component, useState } from 'react';

const useEmailValidationForm = (e = '') => {
    const [email, setEmail] = useState(e);

    function verifEmail(text) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let verifiedEmail = re.test(String(text).toLowerCase());
        return verifiedEmail;
    }
    
    if(verifEmail(email)) {
        const Email = () => setEmail(email);        
        return{
            Email,
            verifEmail,
        };
    }
    else {
        const Email = () => setEmail('');
        return{
            Email,
            verifEmail,
        };
    }
};

export default useEmailValidationForm;