function HomeTextReducer(state = 'AbdoMoh96', action) {
    switch (action.type) {
        case "HOME_PAGE_NAME":
               return state = action.text;
        case "HOME_PAGE_URL":
            return state = action.text;
        default:
            return state;
    }
}
export default HomeTextReducer;