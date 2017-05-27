import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'
import * as Reducers from './reducers/index';

/* Combine Reducers */
function combine(reducers){

	const result = {};

	Object.keys(reducers).map(key=>{
		result[key] = Reducers[key]
	})

	return result;
}

const allReducers = combineReducers(combine(Reducers))

/* Middleware */
const logger = createLogger();

const store = createStore(
	allReducers, 
	undefined,
	compose(
    applyMiddleware(logger, thunkMiddleware),
		autoRehydrate()
  )
);

persistStore(store)

export default store;