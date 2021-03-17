import React, { Component } from 'react';
import {
    Alert,
} from 'react-native';
import { ProfileComponent } from '../../component';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileScreen extends Component {
    state = {
        data: [],
    };

    update(Id, Slogan, Jobs) {
        const { data } = this.state;
        const sj = { id: Id, slogan: Slogan, jobs: Jobs };
        console.log(sj);
        data.push(sj);
        console.log(data);
        this.setState({data: data});
        AsyncStorage.setItem('sj', JSON.stringify(data));
        Alert.alert("Info", "Slogan berhasil disimpan");
    }

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id','Id');
        const name = navigation.getParam('name', 'Name');
        const email = navigation.getParam('email', 'Email');
        const password = navigation.getParam('password', 'Password');

        return(
            <>
                <ProfileComponent 
                    action={(id, slogan, jobs) => this.update(id, slogan, jobs)}
                    id={ id }
                    name={ name }
                    email={ email }
                    password={ password }
                />
            </>
        );
    }
}

export default ProfileScreen;