import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
} from 'react-native';
import { TitleComponent, DetailComponent } from '../../component';

class DetailScreen extends Component {
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 0);
        return(
            <View style={ styles.body }>
                <TitleComponent title="Detail" />
                <DetailComponent />
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

export default DetailScreen;