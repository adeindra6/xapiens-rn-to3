import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TitleComponent, RegisterComponent } from '../../component';

class RegisterScreen extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        this.getUserList();
    }

    register(Name, Email, Password) {
        const { users } = this.state;
        const lastId = users.length > 0 ? users[users.length - 1].id : 2;
        const newUser = { id: lastId + 1 ,name: Name, email: Email, password: Password }
        console.log(newUser);
        users.push(newUser);
        console.log(users);
        this.setState({users: users});
        AsyncStorage.setItem('users', JSON.stringify(users));
        console.log("Data berhasil disimpan");
        this.props.navigation.navigate('Profile', {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        });
    }

    async getUserList() {
        try {
            const userJson = await AsyncStorage.getItem('users');
            console.log(userJson);
        }
        catch(error){
            console.log("error");
        }
    }

    async removeUserList() {
        try {
            await AsyncStorage.clear();
            console.log("Data sudah terhapus");
        }
        catch(error) {
            console.log(error.message);
        }
    }

    render() {
        return(
            <View style={ styles.body }>
                <TitleComponent title="Sign Up" />
                <RegisterComponent action={(name, email, password) => this.register(name, email, password)} />
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

export default RegisterScreen;