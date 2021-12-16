const defaultUser = {
    userName:'',
    firstName:'',
    lastName:'',
    image:'',
    isLoggedIn:false
}

const PublicUserReducer = (state = defaultUser, action) => {
    switch (action.type){
        case 'login':
            return state = {...state ,
                           firstName: action.firstName,
                           lastName: action.lastName,
                           isLoggedIn: action.isLoggedIn
            }
        case 'logout':
            return state = defaultUser;
        default:
            return state;
    }
}


export default PublicUserReducer;