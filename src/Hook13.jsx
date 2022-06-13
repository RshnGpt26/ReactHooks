import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};

const Hook13 = () => {
	// Initializing useReducer hook
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>

        <div>
            <h2>{ count }</h2>
            <button onClick={ () => dispatch("add") }> Add </button>
            <button onClick={ () => dispatch("subtract") }> Subtract </button>
            <button onClick={ () => dispatch("reset") }> Reset </button>
        </div>
        </>
    );
};

export default Hook13;

// We call dispatch() in our code when we want to change state.
// We already have a reducer set up to do the legwork of changing the state, we just need to be able to trigger how to change it.

// Reference => https://www.geeksforgeeks.org/reactjs-usereducer-hook/