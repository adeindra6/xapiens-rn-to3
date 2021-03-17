import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image,
} from 'react-native';

class LandingPage extends Component {
    render() {
        return(
            <View style={ styles.body }>
                <Image style={ styles.img } source={ require('../../image/lamp.jpg') } />
                <Text style={ styles.title }>Loading!!!</Text>
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
    }
});

export default LandingPage;