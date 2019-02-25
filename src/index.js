import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose }from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers/combiner';

const middleware = (store) => {
    return next => {
        return action =>{
            next(action);
            const result = store.getState();
            if(action.payload === result.users || action.payload === result.posts){
                return next(action);
            }           
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,middleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

