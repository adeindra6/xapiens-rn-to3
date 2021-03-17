import React, { Component, useState } from 'react';
import axios from 'axios';

const useFetcher = (d = '') => {
    const [ data, setData ] = useState(d);

    async function fetchDataPosts() {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            }
        );
        return data;
    }

    async function fetchDataUsers() {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            }
        );
        return data;
    }

    async function fetchDataComments() {
        await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            }
        );
        return data;
    }

    return{
        fetchDataPosts,
        fetchDataUsers,
        fetchDataComments,
    };
};

export default useFetcher;