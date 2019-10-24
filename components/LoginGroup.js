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



class LoginGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null,
            imageUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            checkVolid: true,
            count: 60
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

    loginHandleOk(e) {



        // console.log(this.refs.loginSubmitPhone.props.onSubmit());
        this.refs.loginSubmitPhone.props.onSubmit()
        // loginHandleOk()



        // this.props.loginHandleOk(e)
    }


    loginHandleCancel() {
        this.props.loginHandleCancel();
    }

    loginChangeHandle(e) {
        // console.log(e.target.value);

        // this.setState({
        // 	changeLogin: e.target.value
        // });


        console.log(e, 'eeeeee');

        console.log(this.refs.loginSubmitPhone);

        this.props.loginChangeHandle(e);
    }

    /**
     * 渲染登录
     * @method getChangeCard
     */
    getChangeCard() {
        const { getFieldDecorator } = this.props.form;

        if (this.props.changeLogin == 'phoneLogin') {

            return (<div style={{ marginTop: 16 }}>

                <Form ref="loginSubmitPhone" onSubmit={this.loginSubmitPhone.bind(this)}>

                    <div style={{ marginBottom: 16 }}>
                        <Form.Item
                            label="手机号"
                        >
                            {getFieldDecorator('phoneNumber', {
                                rules: [
                                    { required: true, message: '请输入手机号' },
                                    {
                                        pattern: new RegExp('[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$', 'g'),
                                        message: '手机号码有误'
                                    }
                                ],
                            })(
                                <Input addonAfter={this.state.checkVolid ? (<span style={{ cursor: "pointer" }} onClick={this.checkVolidFn.bind(this)}>点击发送验证码</span>) : (<span>{this.state.count}s</span>)} placeholder="请输入手机号" />
                            )}
                        </Form.Item>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                        <Form.Item
                            label="验证码"
                        >
                            {getFieldDecorator('volidCode', {
                                rules: [{ required: true, message: '请输入验证码' }],
                            })(
                                <Input placeholder="输入验证码" />
                            )}
                        </Form.Item>
                    </div>


                    {/* <div style={{ marginBottom: 16 }}>
                        <Form.Item
                            label=""
                        >
                          
                                <Button style={{float:"right"}} htmlType="submit">提交</Button>
                        
                        </Form.Item>
                    </div> */}
                </Form>

            </div>)
        } else if (this.props.changeLogin == 'wxLogin') {
            return (<div style={{ marginTop: 16 }}>
                <div style={{ marginBottom: 16 }}>
                    <Input addonAfter={<span style={{ cursor: "pointer" }}>微信扫码登录</span>} placeholder="请输入手机号" />
                </div>
            </div>);
        } else {
            return (<div style={{ marginTop: 16 }}>
                <div style={{ marginBottom: 16 }}>
                    <Input addonAfter={<span style={{ cursor: "pointer" }}>移动端扫码登录</span>} placeholder="请输入手机号" />
                </div>
            </div>);
        }



    }


    /**
     * 提交登录表单
     * @method loginSubmitPhone
     */
    loginSubmitPhone(e) {

        this.props.form.validateFields((err, values) => {

            console.log(values, '33333');



            if (!err) {

                var params = {
                    phone: values.phoneNumber,
                    password: values.volidCode
                }

                this.props.getToken(params);
                this.props.closeLoginModal();
            }
        });


    }

    /**
     * 点击二维码
     * @method checkVolidFn
     */
    async checkVolidFn(e) {
        var { count } = this.state;


        if (this.props.form.getFieldError('phoneNumber') == undefined) {
            this.props.sendPassword(this.props.form.getFieldValue('phoneNumber'));
        }


        // this.props.form.validateFields((err, values) => {

        //     console.log(err, values, 'values');
        //     if (!err) {

        //     }
        // });


        const timer = setInterval(() => {
            this.setState({ "count": (count--), checkVolid: false }, () => {
                if (count === 0) {
                    clearInterval(timer);
                    this.setState({
                        checkVolid: true,
                        count: 60
                    })
                }
            });
        }, 1000);
    }

    render() {


        return (
            <Modal
                width={350}
                title="登录"
                visible={this.props.loginModalState}
                onOk={this.loginHandleOk.bind(this)}
                onCancel={this.loginHandleCancel.bind(this)}
                okText="确认"
                cancelText="取消"
                wrapClassName="userCenter login"
            >

                <Radio.Group value={this.props.changeLogin} onChange={this.loginChangeHandle.bind(this)}>
                    <Radio.Button value="phoneLogin">手机验证码</Radio.Button>
                    <Radio.Button value="wxLogin">微信</Radio.Button>
                    <Radio.Button value="rnLogin">移动端</Radio.Button>
                </Radio.Group>

                {this.getChangeCard()}

            </Modal>
        )
    }

}


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


LoginGroup = Form.create({ name: 'coordinated' })(LoginGroup);

LoginGroup = connect(mapStateToProps, mapDispatchToProps)(LoginGroup);

LoginGroup = withRedux(initializeStore)(LoginGroup);

export default withRouter(LoginGroup);


// export default LoginGroup;