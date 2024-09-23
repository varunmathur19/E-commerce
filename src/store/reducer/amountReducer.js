import reducer from "./index";
reducer = (state = 0, action) => {
    if (action.type == "deposit") {
        return state + action.payload;
    } else if (action.type == "withdraw") {
        return state - action.playload;
    } else {
        return state;
    }
};
export default reducer;
