import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    return requestConfig;
});

axios.interceptors.response.use(response => {
    // console.log(response);
    return response;
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
