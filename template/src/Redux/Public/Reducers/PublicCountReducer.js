function PublicCountReducer(state = 20, action) {
    switch (action.type) {
        case "PUBLIC_INCREMENT":
            return state + action.step;
        case "PUBLIC_DECREMENT":
            return state - action.step;
        default:
            return state;
    }
}
export default PublicCountReducer;