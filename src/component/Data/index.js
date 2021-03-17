import React, { Component, useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import { useFetcher } from '@libs';

const DataComponent = (props) => {
    const [ selectedId, setSelectedId ] = useState(null);
    const [ data, setData ] = useState(null);
    const { action } = props;

    console.log(props.type);

    const getData = async () => {
        if(props.type == "posts") {
            await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    setData(response.data);
                }
            );
        }
        else if(props.type == "users") {
            await axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    setData(response.data);
                }
            );
        }
        else if(props.type == "comments") {
            await axios.get(`https://jsonplaceholder.typicode.com/comments`)
                .then(response => {
                    setData(response.data)
                }
            );
        }
    };

    useEffect(() => {        
        getData();
    }, []);

    const Item = ({ item }) => (
        <TouchableOpacity        
            style={ styles.btn }>
            <Text style={ styles.label }>{ item.title || item.username || item.body }</Text>
        </TouchableOpacity>
    );

    const actionSubmit = (id) => {
        action(id);
        console.log("id : " + id);
    };

    const renderItem = ({ item }) => {        
        return(
            <Item
                item={ item }
                onPress={() => {
                    setSelectedId(item.id);
                    actionSubmit(item.id);
                }}
            />
        );
    };

    return(
        <View>
            <ScrollView>
                <SafeAreaView>
                    <FlatList
                        data={ data }
                        renderItem={ renderItem }
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#5db075',
        width: '80%',
        alignSelf: 'center',
    },

    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default DataComponent;