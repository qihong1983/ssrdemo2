import React from 'react';
import withRedux from 'next-redux-wrapper';
import 'isomorphic-unfetch';

import {
    connect
} from 'react-redux';

import {
    Layout,
    Table,
    Card,
    Menu,
    Button,
    Avatar,
    Drawer,
    Divider,
    Modal,
    Row,
    Radio,
    Col,
    Input,
    InputNumber,
    Form,
    DatePicker,
    Upload,
    message,
    AutoComplete,
    Badge,
    Icon,
    Tooltip,
    LocaleProvider,
    Pagination,
    Select,
    List,
    Tag,
    notification
} from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

const ButtonGroup = Button.Group;

const {
    Header,
    Footer,
    Sider,
    Content
} = Layout;

const Option = AutoComplete.Option;

// const MyIcon = Icon.createFromIconfontCN({
// 	scriptUrl: 'static/fonts/iconfont.js', // 在 iconfont.cn 上生成
// });

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_475028_caaiz33gkk.js',
});

import {
    bindActionCreators
} from 'redux';

import NProgress from 'nprogress';

import Head from 'next/head'; // 引入内置组件
import Link from 'next/link';
import {
    withRouter
} from 'next/router';

const cookieParser = require("cookie-parser");

import initializeStore from '../store/initializeStore';
import * as actionCreators from '../actions/index';


import moment from 'moment';


const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


class OkBaoming extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null,
            imageUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
    }




    onClose() {
        this.props.onClose();
    }




    userListRender() {
        var arr = [];

        console.log(this.props.userList, '******');

        if (this.props.userList) {
            this.props.userList.map((v, k) => {

                arr.push(<Col span={2} key={v.user}>
                    <Tooltip title={v.user}>
                        <Avatar size="large" src={v.avatar} alt={v.user} style={{ marginTop: "10px" }} />
                    </Tooltip>
                </Col>);
            });
        }

        return arr;
    }


    async okBaoming() {
        console.log('*****');

        var avatar = getCookie("avatar");
        var userId = getCookie("userId");
        var userName = getCookie("userName");

        console.log(this.props.Index.selected, 'this.props');

        var token = getCookie("token");

        var data = {
            avatar: avatar,
            userId: userId,
            userName: userName,
            classId: this.props.Index.selected
        }

        var isSuccess = await this.props.okBaoming(data, token);

        if (isSuccess) {

            message.success('报名成功请准时参加');
            await this.props.getEntered(this.props.Index.selected, token);
        } else {
            if (isSuccess == -1) {
                message.success('请您重新登录');
                this.props.onClose();
            } else {
                message.warning('您已报名');
                this.props.onClose();
            }
        }

    }

    render() {


        return (
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose.bind(this)}
                visible={this.props.visible}
            >


                <p style={pStyle}>报名费用</p>

                <i style={{ color: "red" }}>￥: {this.props.showPrice}</i>

                <Divider />


                <p style={pStyle}>报名列表</p>


                <Row>
                    {this.userListRender()}

                </Row>

                <Divider />



                <Button
                    type="primary"
                    // onClick={this.okBaoming.bind(this)}
                    onClick={() => {
                        this.okBaoming();
                    }}
                >确认报名</Button>

            </Drawer>
        )
    }

}


OkBaoming = Form.create({ name: 'coordinated' })(OkBaoming);


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {



    return {
        About: state.About,
        Index: state.Index
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};


OkBaoming = connect(mapStateToProps, mapDispatchToProps)(OkBaoming);

OkBaoming = withRedux(initializeStore)(OkBaoming);

export default withRouter(OkBaoming);

