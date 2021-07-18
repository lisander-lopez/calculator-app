const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                theme: action.payload,
                error: null
            };
        default:
            return state;
    }
};

export default ThemeReducer;