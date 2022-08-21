import { DECREMENT, INCREMENT, RESET } from "./Constants";


// Increment counter

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

// Decrement counter

export const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

// Reset counter

export const resetCounter = () => {
    return {
        type: RESET,
    };
};