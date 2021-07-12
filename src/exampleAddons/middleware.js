export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

// custom middleware
export const myMiddleware = storeAPI => next => action => {
  console.log('dispatching: ', action);
  let res = next(action);
  console.log('next state: ', storeAPI.getState());
  return res;
}

export const asyncMiddleware = storeAPI => next => action =>{
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('added new todo: ', action.payload);
    }, 1000);
  }
}