import { appReducer } from "./reducer";

const createStore = (reducer) => {
	let state;

	return {
		dispacth: (action) => {
		state = reducer(state, action);
		console.log(state)
		},
		getState: () => state
	}
};

export const store = createStore(appReducer)

store.dispacth({})
