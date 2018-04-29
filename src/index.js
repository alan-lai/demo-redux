import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state += action.payload;
            break;
        case 'SUBTRACT':
            state -= action.payload;
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log('store updated', store.getState());
});


store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'SUBTRACT',
    payload: 50
});