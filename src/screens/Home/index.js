import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
    render() { 
        return(            
            <View style={ styles.body }>
                <Image style={ styles.img } source={ require('../../image/lamp.jpg') } />
                <Text style={ styles.title }>Your Company</Text>
                <View style={ styles.btngroup }>
                    <TouchableOpacity
                        style={ styles.btnlogin }
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={ styles.txtbtn }>Login</Text>
                    </TouchableOpacity>
                    <Text>{" "}</Text>
                    <TouchableOpacity
                        style={ styles.btnregister }
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={ styles.txtbtn }>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.btngroup }>
                    <TouchableOpacity
                        style={ styles.btndata }
                        onPress={() => this.props.navigation.navigate('Data', { type: "posts" })}>
                        <Text style={ styles.txtbtn }>Data Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ styles.btndata }
                        onPress={() => this.props.navigation.navigate('Data', { type: "users" })}>
                        <Text style={ styles.txtbtn }>Data Users</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ styles.btndata }
                        onPress={() => this.props.navigation.navigate('Data', { type: "comments" })}>
                        <Text style={ styles.txtbtn }>Data Comments</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#5db075',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#bdbdbd',
    },

    img: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    btngroup: {
        borderWidth: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    btnlogin: {
        marginTop: '70%',
    },

    btnregister: {
        marginLeft: '20%',
        marginTop: '70%',
    },

    btndata: {
        marginTop: '10%',
        marginLeft: '5%',
    },

    txtbtn: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
});

export default HomeScreen;