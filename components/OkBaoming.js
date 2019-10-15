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
        this.props.userList.map((v, k) => {
            console.log(v.avatar);
            arr.push(<Col span={2} key={v.user}>
                <Tooltip title={v.user}>
                    <Avatar size="large" src={v.avatar} alt={v.user} style={{ marginTop: "10px" }} />
                </Tooltip>
            </Col>);
        });
        return arr;
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



                <Button type="primary">确认报名</Button>

            </Drawer>
        )
    }

}


OkBaoming = Form.create({ name: 'coordinated' })(OkBaoming);

export default OkBaoming;