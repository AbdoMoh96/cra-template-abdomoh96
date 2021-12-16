const HomeTextAction = (type) => {

    if(type === 'name'){
        return {
            type: "HOME_PAGE_NAME",
            text: 'AbdoMoh96'
        }
    }else if (type === 'url'){
        return {
            type: "HOME_PAGE_URL",
            text: 'https://github.com/AbdoMoh96'
        }
    }else{
        return {
            type: "error"
        }
    }
}

export default HomeTextAction;