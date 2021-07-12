import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
// import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers';
import {myMiddleware} from './exampleAddons/middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

// let preloadedState;
// const persistedTodoString = localStorage.getItem('todos');

// if (persistedTodoString) {
// 	preloadedState = {
// 		todos: JSON.parse(persistedTodoString)
// 	}
// }

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const middlewareEnhancer  = composeWithDevTools(
	applyMiddleware(myMiddleware)
)

const store = createStore(rootReducer, middlewareEnhancer);

export default store;