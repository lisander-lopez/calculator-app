const InputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_NUMBER':
            return {
                ...state,
                display: state.display + action.payload,
                error: null
            };
        case 'CLEAR_INPUT':
            return {
                ...state,
                display: '',
                error: null
            };
        case 'INPUT_OPERATOR':
            if(state.leftSide == null){
                return {
                    ...state,
                    leftSide: state.display,
                    operator: action.payload,
                    display: '',
                    error: null
                };
            }
            // Left side is set, either we continuing or finishing

            if (action.payload !== "="){

            } else {
                return {
                    ...state,
                    leftSide: null,
                    operator: null,
                    rightSide: null,
                    display: calculate(state.leftSide, state.operator, state.display),
                    error: null
                };
            }


            return {
                ...state,
                display: state.display + action.payload,
                error: null
            };
        default:
            return state;
    }
};

const calculate = (left, op, right) => {
    left = parseFloat(left)
    right = parseFloat(right)
    console.log("Left", left);
    console.log("Right", right);
    switch (op) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return left / right;
        default:
            return 0;
    }
}
export default InputReducer;