import React, {createContext, useReducer} from "react";
import ThemeReducer from '../reducers/ThemeReducer';


const initialState = {
    theme: 1,
    error: null
};

const ThemeStore = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
};

export const ThemeContext = createContext(initialState);
export default ThemeStore;