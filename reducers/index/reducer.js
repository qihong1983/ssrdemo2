const Index = (state, action) => {

    if (typeof state === "undefined") {
        //初始化
        return {
            loadding: false,
            list: [],
            userList: [],
            page: 1,
            search: [],
            total: 1,
            keyword: "",
            lang: "cn",
            selectId: 0,
            showPrice: 0,
            userName: "",
            userAvatar: ""
        }
    }

    switch (action.type) {

        case "INDEX_LIST":
            return Object.assign({}, state, {
                list: action.payload
            });
        case "INDEX_PAGE":
            return Object.assign({}, state, {
                page: action.payload
            });
        case "INDEX_SEARCH":
            return Object.assign({}, state, {
                search: action.payload
            });
        case "INDEX_TOTAL":
            return Object.assign({}, state, {
                total: action.payload
            });
        case "INDEX_KEYWORD":
            return Object.assign({}, state, {
                keyword: action.payload
            });
        case "INDEX_LANG":
            return Object.assign({}, state, {
                lang: action.payload
            });

        case "INDEX_USERNAME":
            return Object.assign({}, state, {
                userName: action.payload
            });

        case "INDEX_USERAVATAR":
            return Object.assign({}, state, {
                userAvatar: action.payload
            });

        case "PAGE1_LOADING":
            return Object.assign({}, state, {
                loading: action.payload
            });

        case "PAGE1_SELECTID":

            return Object.assign({}, state, {
                selected: action.payload
            });
        // selectId: 0,
        // showPrice: 0

        case "PAGE1_SHOWPRICE":
            return Object.assign({}, state, {
                showPrice: action.payload
            });

        case "PAGE1_USERLIST":
            return Object.assign({}, state, {
                userList: action.payload
            });
        // userList
        default:
            //返回初始化
            return state;
    }
}



export {
    Index
};