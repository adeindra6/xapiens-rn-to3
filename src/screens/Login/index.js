import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import { TitleComponent, LoginComponent } from '../../component';
import AsyncStorage from '@react-native-community/async-storage';
import userData from '../../../user.json';

class LoginScreen extends Component {
    state = {
        auth: [],
    };

    login(Email, Password) {
        const { auth } = this.state;
        const user = { email: Email, password: Password };
        console.log(user);
        auth.push(user);
        console.log(auth);
        this.setState({auth: auth});
        if(userData.email == user.email && userData.password == user.password) {
            this.props.navigation.navigate('Profile', {
                id: userData.id,
                name: userData.name,
                email: userData.email,
                password: userData.password,
            });
        }
        else {
            this.getUserList(user.email, user.password);
        }
    }

    async getUserList(Email, Password) {
        try {
            const userJson = await AsyncStorage.getItem('users');
            console.log(userJson);
            if(userData !== null) {
                const jsonData = JSON.parse(userJson);
                let showJson = jsonData.map(e => {
                    if(e.email == Email && e.password == Password) {
                        this.props.navigation.navigate('Profile', {
                            id: e.id,
                            name: e.name,
                            email: e.email,
                            password: e.password,
                        });
                    }
                    else {
                        Alert.alert("Login Failed", "Wrong Email or Password");
                    }
                });
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    render() {
        return(
            <View style={ styles.body }>
                <TitleComponent title="Log In" />
                <LoginComponent action={(email, password) => this.login(email, password)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LoginScreen;