import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Calendars from './Components/Calendars';
import initialState from './initialState';


const store = configureStore(initialState);

ReactDOM.render(
   <Provider store={store}>
     <App>
         <Calendars />
     </App>
   </Provider>, 
   document.getElementById('root')
);
registerServiceWorker();