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
        let res = await fetch(`https://api.youyong.ba/accessToken?phone=${data.phoneNumber}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }
        });

        let json = await res.json();

        setCookie('userId', json.data[0].id);
        setCookie('userName', decodeURIComponent(json.data[0].username));
        setCookie('avatar', decodeURIComponent(json.data[0].avatar));
        setCookie('phone', decodeURIComponent(json.data[0].phone));
        setCookie('token', 'xxx');

        // alert(decodeURIComponent(json.data[0].username));
        // alert(decodeURIComponent(json.data[0].avatar));
        // setCookie('token', json.data[0].token);


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

        console.log(data, 'action datadata');
        // debugger;

        // var data = {
        //     "classroot": values.address,
        //     "endTime": moment(values.endTime).format("YYYY-MM-DD HH:mm"),
        //     "price": values.price,
        //     "img": img
        // }


        // endTime: "2019-07-09 05:05:05"
        // imageUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        // price: 1000
        // title: "fff"
        // userId: 1
        // userNum: 10
        // http://localhost:8081/insert?userId=1&title=游泳&endNum=11&img=http://dummyimage.com/229x139/79f2d5/f2b279.png?text=asdf&isOver=false&num=11&price=23&sendUser=小洪&startTime=2019-07-06 22:30:00&thumb=http://dummyimage.com/252x251/79f29d/f27a79.png?text=列亲级目则&pinyin=xiaohong

        // let res = await fetch(`https://www.easy-mock.com/mock/5c578cecde5c260cd71d3b63/youyongba/sendActive?classroot=${data.classroot}&endTime=${data.endTime}&price=${data.price}&img=${data.img}&py=${data.py}`, {
            // let res = await fetch(`http://localhost:8081/insert?userId=${data.userId}&endTime=${data.endTime}&price=${data.price}&img=${data.imageUrl}&isOver=${data.isOver}&title=${data.title}&sendUser=${data.sendUser}&startTime=${data.endTime}&num=${data.userNum}&endNum=${data.userNum}&thumb=${data.thumb}&pinyin=${data.py}`, {
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
    getToken
}