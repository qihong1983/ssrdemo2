import {
	createStore,
	applyMiddleware
} from 'redux';

import {
	composeWithDevTools
} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducer from '../reducers/reducers';
// import * as serviceWorker from './serviceWorker';

const middleware = [thunk];

const initializeStore = initialState => {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	);
};
export default initializeStore;

// serviceWorker.register();