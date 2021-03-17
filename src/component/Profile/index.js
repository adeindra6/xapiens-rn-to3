import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        id: this.props.id,
        name: '',
        email: '',
        password: '',
    };

    sloganHandler(text) {
        console.log("Profile Component Slogan Handler : " + text);
        this.setState({slogan: text});
    }

    validateSlogan(text) {
        if(text !== '' && text !== undefined) {
            return true;
        }
        else {
            return false;
        }
    }

    jobsHandler(text) {
        console.log("Profile Component Jobs Handler : " + text);
        this.setState({jobs: text});
    }

    validateJobs(text) {
        if(text !== '' && text !== undefined) {
            return true;
        }
        else {
            return false;
        }
    }

    actionSubmit() {
        const { action } = this.props;
        const { id, slogan, jobs } = this.state;
        if(this.validateSlogan(slogan) && this.validateJobs(jobs)) {
            action(id, slogan, jobs);
            this.setState({id: id, slogan: slogan, jobs: jobs});
        }
        else {
            Alert.alert("Warning", "Please fill slogan and jobs!");
        }        
    }

    render() {
        const { slogan, jobs } = this.state;
        return(
            <>
                <View style={ styles.header }>
                    <Text style={ styles.title }>Profile</Text>
                    <Image style={ styles.img } source={ require('../../image/profile.png') } />
                </View>
                <View style={ styles.body }>
                    <Text style={ styles.name }>{ this.props.name }</Text>
                    <Text style={ styles.slogan }>{ slogan || '' }</Text>

                    <Text style={ styles.inputlabel }>Slogan</Text>
                    <TextInput 
                        value={ slogan }
                        placeholder="Slogan"
                        style={ styles.input }
                        onChangeText={(text) => {
                            this.sloganHandler(text);
                        }}
                    />
                    <Text style={ styles.inputlabel }>Jobs</Text>
                    <TextInput
                        value={ jobs }
                        placeholder="Jobs"
                        style={ styles.input }
                        onChangeText={(text) => {
                            this.jobsHandler(text);
                        }}
                    />
                    <TouchableOpacity
                        style={ styles.btn }
                        onPress={() => this.actionSubmit()}>
                        <Text style={ styles.label }>Update</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#5db075',
        alignItems: 'center',
    },

    body: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },

    inputlabel: {
        marginTop: 20,
        marginRight: '70%',
    },

    input: {
        width: '80%',
        borderRadius: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#e8e8e8',
        alignSelf: 'center',
    },

    btn: {
        width: '30%',
        height: 50,
        marginRight: '50%',
        borderRadius: 50,
        marginTop: '10%',
        backgroundColor: '#5db075',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    slogan: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileComponent;