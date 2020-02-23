import React from 'react';
import { Provider } from 'react-redux';
import { createStore  } from 'redux';
import {
    View,
} from 'react-native';

import rootReducer from './src/reducers';
import Router from './src/navigation/Router';

const store = createStore(rootReducer);


const LojaVirtualApp = () => (
    <View style={{ width: '100%', height: '100%' }}>
        <Provider store={store}>
            <Router />
        </Provider>
    </View>
);

export default LojaVirtualApp;
