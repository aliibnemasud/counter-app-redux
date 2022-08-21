import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './Redux/Actions';

const CounterApp = () => {
    const count = useSelector( state => state.count);
    const dispatch = useDispatch();

    const increaseCounter = () => {
        dispatch(incrementCounter());
    };

    const decreaseCounter = () => {
        dispatch(decrementCounter());       
    };
    const reset = () => {
        dispatch(resetCounter());
    };


    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    );
};

export default CounterApp;