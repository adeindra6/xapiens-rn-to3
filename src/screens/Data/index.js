import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
} from 'react-native';
import { TitleComponent, DataComponent } from '../../component';

class DataScreen extends Component {
    seeDetail(id) {
        this.props.navigation.navigate('Detail', { id: id })
    }

    render() {
        const { navigation } = this.props;
        const type = navigation.getParam('type','users');
        const subtitle = "Data " + type;
        return(
            <View style={ styles.body }>
                <TitleComponent title={ subtitle } />
                <DataComponent type={ type } action={(id) => this.seeDetail(id)} />
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

export default DataScreen;