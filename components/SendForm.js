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

function beforeUpload(file) {

    console.log(file);
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


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class SendForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null,
            imageUrl: "/static/default.png"
        }
    }

    handleOpenChange(open) {
        if (open) {
            this.setState({ mode: 'time' });
        }
    }

    handleSubmit1(e) {
        // debugger;
        e.preventDefault();

        this.props.form.validateFields(async (err, values) => {
            console.log(err, 'err');
            console.log(values, 'values');
            console.log('aaaa');

            // console.log(moment(values.endTime).format("YYYY-MM-DD hh:mm:ss"), '***');

            var nowDate = new Date().getTime();

            var sendDate = new Date(moment(values.endTime).format("YYYY-MM-DD hh:mm:ss")).getTime();



            var data = {
                userId: 1,
                imageUrl: this.state.imageUrl,
                endTime: moment(values.endTime).format("YYYY-MM-DD hh:mm:ss"),
                price: values.price,
                title: values.title,
                userNum: values.userNum,
                sendUser: "小洪",
                thumb: "http://dummyimage.com/252x251/79f29d/f27a79.png?text=列亲级目则",
                py: pinyinUtil.getPinyin(values.title).replace(/\s/g, ""),
                isOver: 0
            }



            console.log(data, 'datadatadata');


            if (!err) {
                this.props.sendSwim(data);
                this.props.sendVisibleClose();

                let params = {
                    offset: 1,
                    keyword: ""
                }
                this.props.list(params);
            }
        })


    }


    handleChange(info) {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.

            console.log(info, 'info');



            this.setState({
                imageUrl: info.file.response.data,
                loading: false
            })

            // getBase64(info.file.originFileObj, imageUrl => this.setState({
            //     imageUrl,
            //     loading: false,
            // }));
        }
    }

    /**
     * 发志报名
     */
    sendVisibleClose() {
        // this.setState({
        // 	sendVisible: false
        // })

        this.props.sendVisibleClose();
    }

    handlePanelChange(value, mode) {
        this.setState({ mode });
    }



    render() {

        const { getFieldDecorator } = this.props.form;

        const imageUrl = this.state.imageUrl;

        return (<Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={this.sendVisibleClose.bind(this)}
            visible={this.props.sendVisible}
        >
            <Form onSubmit={this.handleSubmit1.bind(this)}>
                <Form.Item
                    label="结伴主题"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: '结伴主题' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    label="人数限制"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('userNum', {
                        initialValue: 10,
                        rules: [{ required: true, message: '不能为空' }],
                    })(
                        <InputNumber
                            formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\¥\s?|(,*)/g, '')}
                            onChange={this.setPrice}
                        />
                    )}
                </Form.Item>

                <Form.Item
                    label="报名截止时间"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('endTime', {
                        rules: [{ required: true, message: '请输入报名截止时间' }],
                    })(
                        <DatePicker
                            mode={this.state.mode}
                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                            format="YYYY-MM-DD HH:mm:ss"
                            onOpenChange={this.handleOpenChange.bind(this)}
                            onPanelChange={this.handlePanelChange.bind(this)}
                        />
                    )}
                </Form.Item>

                <Form.Item
                    label="费用"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('price', {
                        initialValue: 20,
                        rules: [{ required: true, message: '请输入金额' }],
                    })(
                        <InputNumber
                            formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\¥\s?|(,*)/g, '')}
                            onChange={this.setPrice}
                        />
                    )}
                </Form.Item>
                {/* http://pinyin.netease.com/uploadfile.php */}
                <Form.Item
                    label="上传封面(227x138) jpg"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    <div className="Dragge">

                        {/* action="http://pinyin.netease.com/uploadfile.php" */}
                        {getFieldDecorator('dragger', {
                            valuePropName: 'avatar1',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                // action="http://localhost:8081/uploadimg"
                                action="https://api.youyong.ba/uploadimg"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange.bind(this)}
                            >
                                {imageUrl ? <img style={{ width: "227px", height: "138px" }} src={imageUrl} alt="avatar" /> : uploadButton}
                            </Upload>

                        )}
                    </div>
                </Form.Item>
                <Divider />
                <Form.Item
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit">
                        发布
                      </Button>
                </Form.Item>
            </Form>

        </Drawer>)
    }

}


SendForm = Form.create({ name: 'coordinated' })(SendForm);

export default SendForm;