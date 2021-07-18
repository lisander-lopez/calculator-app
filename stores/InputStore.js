import React, {createContext, useReducer} from "react";
import InputReducer from '../reducers/InputReducer';


const initialState = {
    leftSide: null,
    operator: null,
    rightSide: null,
    display: '',
    error: null
};

const InputStore = ({children}) => {
    const [state, dispatch] = useReducer(InputReducer, initialState);
    return (
        <InputContext.Provider value={[state, dispatch]}>
            {children}
        </InputContext.Provider>
    )
};

export const InputContext = createContext(initialState);
export default InputStore;