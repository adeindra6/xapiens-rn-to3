import React, { Component, useState } from 'react';
import userData from '../../../user.json';
import AsyncStorage from '@react-native-community/async-storage';

const useAuth = (e = '', p = '') => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState(e);
    const [password, setPassword] = useState(p);

    const user = new User();

    function Login1(email, password) {
        if(userData.email == email && userData.password == password) {
            const Id = () => setId(userData.id);
            const Name = () => setName(userData.name);
            const Email = () => setEmail(userData.email);
            const Password = () => setPassword(userData.password);
            const auth = () => { return true; }
            return{
                Id,
                Name,
                Email,
                Password,
                auth,
            };
        }
        else {
            const Id = () => setId('');
            const Name = () => setName('');
            const Email = () => setEmail('');
            const Password = () => setPassword('');
            const auth = () => { return false; }
            return{
                Id,
                Name,
                Email,
                Password,
                auth,
            };
        }
    }

    function Login2(email, password) {
        let userAuth = user.getUserList(email, password);
        if(userAuth.auth) {
            const Id = () => setId(userAuth.id);
            const Name = () => setName(userAuth.name);
            const Email = () => setEmail(userAuth.email);
            const Password = () => setPassword(userAuth.password);
            const auth = () => { return true; }
            return{
                Id,
                Name,
                Email,
                Password,
                auth,
            };
        }
        else {
            const Id = () => setId('');
            const Name = () => setName('');
            const Email = () => setEmail('');
            const Password = () => setPassword('');
            const auth = () => { return false; }
            return{
                Id,
                Name,
                Email,
                Password,
                auth,
            };
        }
    }    
};

class User {
    async getUserList(Email, Password) {
        try {
            const userJson = await AsyncStorage.getItem('users');
            console.log(userJson);
            if(userData !== null) {
                const jsonData = JSON.parse(userJson);
                let showJson = jsonData.map(e => {
                    if(e.email == Email && e.password == Password) {
                        return{
                            id: e.id,
                            name: e.name,
                            email: e.email,
                            password: e.password,
                            auth: true,
                        };
                    }
                    else {
                        return{
                            id: '',
                            name: '',
                            email: '',
                            password: '',
                            auth: false,
                        };
                    }
                });
            }
        }
        catch(error){
            console.log(error.message);
        }
    };
}
export default useAuth;