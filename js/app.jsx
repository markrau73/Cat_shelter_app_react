import React from 'react';
import ReactDOM from 'react-dom';
import cacheProxy from './cacheProxy';

document.addEventListener('DOMContentLoaded', function(){

cacheProxy.get('http://api.football-data.org/getJson').then( dataObj => console.log( dataObj ) );



    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});
