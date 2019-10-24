import 'isomorphic-unfetch';

const cookieParser = require("cookie-parser");

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

const toQueryString = (obj) => {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}

const inita = (data) => {
    return function (dispatch) {
        dispatch({
            type: "ADIMPRESSION_APPCODE",
            payload: data
        })
    }
}
function asc2str(str) {
    return String.fromCharCode(str);
}

function UrlDecode(str) {
    var ret = "";
    for (var i = 0; i < str.length; i++) {
        var chr = str.charAt(i);
        if (chr == "+") {
            ret += " ";
        } else if (chr == "%") {
            var asc = str.substring(i + 1, i + 3);
            if (parseInt("0x" + asc) > 0x7f) {
                ret += asc2str(parseInt("0x" + asc + str.substring(i + 4, i + 6)));
                i += 5;
            } else {
                ret += asc2str(parseInt("0x" + asc));
                i += 2;
            }
        } else {
            ret += chr;
        }
    }
    return ret;
}


const getTablesNoData = (data) => {


    return async function (dispatch) {


        // alert('https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/list');
        await dispatch({
            type: "PAGE1_LOADING",
            payload: true
        })

        dispatch({
            type: "PAGE1_OFFSET",
            payload: data.offset
        })

        dispatch({
            type: "PAGE1_LIMIT",
            payload: data.limit
        })

        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/tableNoChange?p=" + data.offset, {
            method: 'GET',
            // mode: 'cors',
            // cache: 'force-cache',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            },
            type: 'fetch'
            // cache: 'default',
            // body: toQueryString(data)
        });

        let json = await res.json();


        await dispatch({
            type: "PAGE1_TABLEDATA",
            payload: json.data
        })

        await dispatch({
            type: "PAGE1_TOTAL",
            payload: json.total
        })


        await dispatch({
            type: "PAGE1_LOADING",
            payload: false
        })
    }
}

const getTables = (data) => {
    return async function (dispatch) {




        await dispatch({
            type: "PAGE1_LOADING",
            payload: true
        })

        dispatch({
            type: "PAGE1_OFFSET",
            payload: data.offset
        })

        dispatch({
            type: "PAGE1_LIMIT",
            payload: data.limit
        })

        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/nextDemoTables?p=" + data.offset, {
            method: 'GET',
            // mode: 'cors',
            // cache: 'force-cache',

            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }

            // cache: 'default',
            // body: toQueryString(data)
            // body: toQueryString(data)
        });

        let json = await res.json();



        console.log(22);
        await dispatch({
            type: "PAGE1_TABLEDATA",
            payload: json.data
        })

        await dispatch({
            type: "PAGE1_TOTAL",
            payload: json.total
        })

        await dispatch({
            type: "PAGE1_LOADING",
            payload: false
        })
    }
}

const getCharts = (data) => {
    return async function (dispatch) {
        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/demo", {
            method: 'GET',
            // mode: 'cors',
            type: 'fetch',
            cache: 'default'

        });

        let json = await res.json();

        dispatch({
            type: "ADIMPRESSION_APPCODE",
            payload: json.number2
        })

    }

}


/**
 * 获取游泳活动列表
 * @method getList
 */

const getList = (data) => {
    return async function (dispatch) {



        dispatch({
            type: "INDEX_PAGE",
            payload: data.offset
        })

        dispatch({
            type: "INDEX_KEYWORD",
            payload: data.keyword
        })

        // let res = await fetch(`https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/list?page=${data.offset}&keyword=${encodeURI(data.keyword)}`, {
        let res = await fetch(`https://api.youyong.ba/list?page=${data.offset - 1}&keyword=${encodeURI(data.keyword)}`, {
            // let res = await fetch(`http://localhost:8081/list?page=${data.offset - 1}&keyword=${encodeURI(data.keyword)}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }

        });

        let json = await res.json();

        dispatch({
            type: "INDEX_LIST",
            payload: json.data
        })


        dispatch({
            type: "INDEX_TOTAL",
            payload: json.total
        })

        // INDEX_TOTAL

        // setCookie("name", "qihong");

        // console.log(cookieParser.JSONCookie({ "qihong": "name" }), '#####');
        // console.log(res.cookie("name1", "qihong"), '###');



    }
}

const getEntered = (id) => {
    return async function (dispatch) {
        let res = await fetch(`https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/signUpUserList?id=${id}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }

        });


        let json = await res.json();

        dispatch({
            type: "PAGE1_USERLIST",
            payload: json.data
        });


    }
}


const getToken = (data) => {
    return async function (dispatch) {
        console.log(data, 'data');
        // {phoneNumber: "18600190151", volidCode: "111111"}
        // let res = await fetch(`http://localhost:8081/accessToken?phone=${data.phoneNumber}`, {
        // let res = await fetch(`https://api.youyong.ba/accessToken?phone=${data.phoneNumber}`, {
        let res = await fetch(`https://api.youyong.ba/token`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            type: 'fetch',
            body: JSON.stringify(data)
        });


        let json = await res.json();

        console.log(json, 'json');
        setCookie('userId', json.data.id);
        setCookie('userName', decodeURIComponent(json.data.username));
        setCookie('avatar', json.data.avatar);
        setCookie('phone', decodeURIComponent(json.data.phone));
        setCookie('token', json.data.token);


        dispatch({
            type: "INDEX_TOKEN",
            payload: json.data.token
        });

        dispatch({
            type: "INDEX_PHONE",
            payload: json.data.phone
        });

        dispatch({
            type: "INDEX_AVATAR",
            payload: json.data.avatar
        });

        dispatch({
            type: "INDEX_USERNAME",
            payload: json.data.username
        });

        dispatch({
            type: "INDEX_USERID",
            payload: json.data.id
        });


    }
}
// https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/token


/**
 * 扫索到的数据
 * @method getSearch
 */
const getSearch = (data) => {
    return async function (dispatch) {
        dispatch({
            type: "INDEX_KEYWORD",
            payload: data.searchName
        })
        // INDEX_KEYWORD

        // let res = await fetch(`https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/searchData?searchName=${data.searchName}&lang=${data.lang}`, {
        // let res = await fetch(`http://localhost:8081/searchbar?searchName=${data.searchName}&lang=${data.lang}`, {
        let res = await fetch(`https://api.youyong.ba/searchbar?searchName=${data.searchName}&lang=${data.lang}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }
        });

        let json = await res.json();

        console.log(json.data);
        // json.data.unshift({"id":0,"title":" ","pinyin":"null"})

        dispatch({
            type: "INDEX_SEARCH",
            payload: json.data
        })

    }
}


const sendSwim = (data) => {
    return async function (dispatch) {


        let res = await fetch(`https://api.youyong.ba/insert?userId=${data.userId}&endTime=${data.endTime}&price=${data.price}&img=${data.imageUrl}&isOver=${data.isOver}&title=${data.title}&sendUser=${data.sendUser}&startTime=${data.endTime}&num=${data.userNum}&endNum=${data.userNum}&thumb=${data.thumb}&pinyin=${data.py}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }
        });

        let json = await res.json();
        console.log(json, 'jsonjson');

        if (json.status) {

        }
    }
}

const changePrice = (data) => {
    return function (dispatch) {
        dispatch({
            type: "PAGE1_SHOWPRICE",
            payload: data
        })
    }
}


const changeId = (data) => {
    return function (dispatch) {
        dispatch({
            type: "PAGE1_SELECTID",
            payload: data
        })
    }
}

const setUserInfo = (data) => {
    return function (dispatch) {

        console.log(data, '----------------------------------');

        // let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/tableNoChange?p=" + data.offset, {
        //     method: 'GET',
        //     // mode: 'cors',
        //     // cache: 'force-cache',
        //     headers: {
        //         'Cache-Control': 'no-cache',
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'Bearer xxx'
        //     },
        //     type: 'fetch'
        //     // cache: 'default',
        //     // body: toQueryString(data)
        // });

        // let json = await res.json();

        dispatch({
            type: "INDEX_USERNAME",
            payload: data.userName
        })


        dispatch({
            type: "INDEX_USERAVATAR",
            payload: data.userAvatar
        })


    }

}

const sendPassword = (data) => {
    return async function (dispatch) {
        let res = await fetch(`https://api.youyong.ba/getPassword?phone=${data}`, {
            method: 'GET',
            // mode: 'cors',
            // cache: 'force-cache',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            },
            type: 'fetch'
            // cache: 'default',
            // body: toQueryString(data)
        });

        let json = await res.json();

        console.log(json, 'json');
    }
}

const setUserCookie = (data) => {
    return async function (dispatch) {

        console.log(data, 'setcookie');

        dispatch({
            type: "INDEX_TOKEN",
            payload: data.token
        });

        dispatch({
            type: "INDEX_PHONE",
            payload: data.phone
        });

        // dispatch({
        //     type: "INDEX_AVATAR",
        //     payload: UrlDecode(data.avatar)
        // });

        dispatch({
            type: "INDEX_AVATAR",
            payload: unescape(data.avatar)
        });

        dispatch({
            type: "INDEX_USERNAME",
            payload: data.username
        });

        dispatch({
            type: "INDEX_USERID",
            payload: data.id
        });
    }
}



export {
    getCharts,
    inita,
    getTables,
    getTablesNoData,
    getList,
    getSearch,
    sendSwim,
    changePrice,
    changeId,
    getEntered,
    setUserInfo,
    getToken,
    sendPassword,
    setUserCookie
}