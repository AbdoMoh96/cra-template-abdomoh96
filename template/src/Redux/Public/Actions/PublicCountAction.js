const PublicCountAction = (type , value = 1) => {

    if(type === 'increment'){
        return {
            type: "PUBLIC_INCREMENT",
            step: value
        }
    }else if (type === 'decrement'){
        return {
            type: "PUBLIC_DECREMENT",
            step: value
        }
    }else{
        return {
            type: "error"
        }
    }
}

export default PublicCountAction;