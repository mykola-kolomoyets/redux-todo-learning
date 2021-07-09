import { createStore, compose } from 'redux';
import rootReducer from './reducer';
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers';

// let preloadedState;
// const persistedTodoString = localStorage.getItem('todos');

// if (persistedTodoString) {
// 	preloadedState = {
// 		todos: JSON.parse(persistedTodoString)
// 	}
// }

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;