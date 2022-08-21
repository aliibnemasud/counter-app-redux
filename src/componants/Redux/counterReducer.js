import { DECREMENT, INCREMENT, RESET } from "./Constants";

const inatialCounterState = {
    count : 0,
};

export const counterReducer = (state = inatialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };    
        default:
            return state;
    };
};
