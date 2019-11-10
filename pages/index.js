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

// const IconFont = Icon.createFromIconfontCN({
// 	scriptUrl: '//at.alicdn.com/t/font_475028_caaiz33gkk.js',
// });

const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '/static/js/font_475028_caaiz33gkk.js',
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

import SendForm from '../components/SendForm';

import OkBaoming from '../components/OkBaoming';

import LoginGroup from '../components/LoginGroup';



import moment from 'moment';


//读取cookies 
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if (arr = document.cookie.match(reg))

		return unescape(arr[2]);
	else
		return null;
}


function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function clearCookie(name) {
	setCookie(name, "", -1);
}


const { Meta } = Card;

// function onSelect(value) {
// 	console.log('onSelect', value);
// }

function getRandomInt(max, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
	return (new Array(getRandomInt(5))).join('.').split('.')
		.map((item, idx) => ({
			query,
			category: `${query}${idx}`,
			count: getRandomInt(200, 100),
		}));
}


function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJPG) {
		message.error('只能上传jpg和png图片');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('图片必需小于2MB!');
	}
	return isJPG && isLt2M;
}


function renderOption(item) {

	return (
		<Option key={item.title} text={item.title} data-text={item.title} >
			{item.title} {/*<b>({item.pinyin})</b>*/}
		</Option>
	);
}

const data = [
	'小洪',
	'小洪1',
	'小洪2',
	'小洪3',
	'小洪4',
	'小洪5',
	'小洪6',
];

function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

const pStyle = {
	fontSize: 16,
	color: 'rgba(0,0,0,0.85)',
	lineHeight: '24px',
	display: 'block',
	marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
	<div
		style={{
			fontSize: 14,
			lineHeight: '22px',
			marginBottom: 7,
			color: 'rgba(0,0,0,0.65)',
		}}
	>
		<p
			style={{
				marginRight: 8,
				display: 'inline-block',
				color: 'rgba(0,0,0,0.85)',
			}}
		>
			{title}:
	  </p>
		{content}
	</div>
);


const Dragger = Upload.Dragger;


class Index extends React.Component {
	static async getInitialProps({
		query,
		store,
		isServer,
		req,
		res
	}) {


		var token = null;
		if (isServer == false) {

			token = getCookie("token");

			NProgress.start();
		} else {


			var cookies = req.headers.cookie;


			var userInfo = {};

			console.log(cookies, 'cookies');

			if (cookies) {
				cookies.split(';').forEach(item => {

					if (!item) {

						return

					}

					var arr = item.split('=')

					var key = trim(arr[0]);

					var val = arr[1]


					console.log(arr[0], '--->', arr[1]);
					// req.coolie[key] = val;

					userInfo[key] = val;

					console.log(userInfo, '@@@@@@@@@@@@@@@@');

					// console.log(JSON.parse(userInfo));


					token = userInfo.token;

				});

			}




			await store.dispatch(actionCreators.setUserCookie(userInfo));
			// console.log(userInfo.userId, 'userInfo.userId');

			// console.log(cookies, '####cookies####');
			// // let data = store.getState();



			// console.log(token, 'token ---------------');

			// console.log(cookies.token, 'cookies.tokencookies.tokencookies.tokencookies.token');

		}



		console.log(token, '***token****');

		if (token != null) {

			console.log('这里走了吗');

			if (isServer == false) {
				var getUserInfoParam = {
					userName: getCookie("userName"),
					userAvatar: getCookie("avatar")
				}
			} else {

				console.log(userInfo.userName, 'userInfo.userName');

				console.log(userInfo.avatar, 'userInfo.avatar');

				var getUserInfoParam = {
					userName: userInfo.userName,
					userAvatar: userInfo.avatar
				}
			}

			await store.dispatch(actionCreators.setUserInfo(getUserInfoParam));
		}







		let page = 1;
		if (query.page == undefined) {
			page = 1;
		} else {
			page = query.page;
		}

		let keyword = "";
		if (query.keyword == undefined) {
			keyword = "";
		} else {
			keyword = query.keyword;
		}

		let params = {
			offset: page,
			keyword: keyword
		}
		await store.dispatch(actionCreators.getList(params));


	}




	constructor(props) {
		super(props);

		this.state = {
			current: 3,
			dataSource: [],
			visible: false,
			userCenterVisible: false,
			size: 'large',
			sendVisible: false,
			loginModalState: false,
			wangqiData: [
				'英东游泳-健身趴',
				'英东游泳-健身趴1',
				'英东游泳-健身趴2',
				'英东游泳-健身趴3',
				'英东游泳-健身趴4',
			],
			loading: false,
			imageUrl: "/static/default.png",
			changeLogin: 'phoneLogin',
			checkVolid: true,
			count: 60,
			userName: ""
		}
	}


	// clickSearchText(e) {
	// 	console.log(e.currentTarget);
	// }


	async handleChange(info) {

		console.log(info, 'info');

		if (info.file.status === 'uploading') {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			// getBase64(info.file.originFileObj, imageUrl => this.setState({
			// 	imageUrl,
			// 	loading: false,
			// }));

			console.log(info.file.response.data, 'info.file.response.data');
			await setTimeout(() => {
				this.setState({
					imageUrl: info.file.response.data,
					loading: false
				})
			}, 1000);
		}
	}

	setPrice(e) {
		console.log(e);
	}

	onChange(page) {
		console.log(page);
		// this.setState({
		// 	current: page,
		// });

		// this.props.router.push(youyong.ba?page);

		NProgress.start();
		this.props.router.push(`/?page=${page}&keyword=${this.props.Index.keyword}`);
		NProgress.done();
		console.log(this.props, '#########');

		// var params = {
		// 	offset: page
		// }

		// this.props.getList(params);
	}


	componentWillMount() {
		// NProgress.start();
	}

	componentDidMount() {
		if (document != undefined) {
			NProgress.done();
		}

		console.log('%c游泳吧 swiming club', 'color:#e56045;font-family:"yahei";text-shadow:5px 5px 2px #fff, 5px 5px 2px #373E40, 5px 5px 5px #A2B4BA, 5px 5px 10px #82ABBA;font-weight:bolder;font-size:55px;border:5px solid #e56045;padding:20px; text-align:center;box-shadow: 20px 20px 15px yellow;background-color:#f2f2f2; width:300px; height:100px;');
		console.log("%c ", "background: url(https://sponsor-static.segmentfault.com/d7c03f1c9111484e0f9fdb1a576f334f.png) no-repeat center; display:block; padding-left:504px; padding-bottom:421px; width:504px; height:421px;")

		if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
			if (window.location.href.indexOf("?mobile") < 0) {
				try {
					if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
						// window.location.href = "http://shipei.qq.com/index.htm";
						window.location.href = "https://m.youyong.ba";
					} else if (/iPad/i.test(navigator.userAgent)) {
						window.location.href = "https://m.youyong.ba";
					}
				} catch (e) { }
			}
		}


		var avatar = getCookie("avatar");
		var userName = getCookie("userName");


		this.setState({
			imageUrl: avatar,
			userName: userName
		});



		this.getWxLogin();



	}

	async getWxLogin() {
		if (this.props.router.query.code && this.props.router.query.state) {
			console.log(this.props.router.query.code, 'code');
			console.log(this.props.router.query.state, 'state');

			const { code, state } = this.props.router.query;

			let isWxLogin = await this.props.wxLogin(code, state);


			if (isWxLogin) {

				this.props.router.reload();
			}
			// if (isWxLogin) {
			// 	console.log('微信登录成功');
			// 	//登录成功后
			// 	console.log(isWxLogin);
			// } else if () {

			// 	console.log('微信登录不成功');
			// }


		}
	}



	addKey(data, str) {
		var arr = [];

		data.map((v, k) => {
			v.key = str + k;
			arr.push(v);
		});

		return arr;
	}

	handleTableChange(pagination, filters, sorter) {
		let params = {

			offset: pagination.current,
			limit: pagination.pageSize
		}

		this.props.getTables(params);
	}


	handleSearch(value) {

		console.log(value, 'valuevalue');

		value = value.replace(/\s/g, "");

		let lang = "cn";
		if (/[^\x00-\xff]/g.test(value))
			lang = 'cn';
		else
			lang = 'en';

		var data = {
			"searchName": value,
			"lang": lang
		}

		// console.log(this.props.getSearch, '是不是搜索');
		this.props.getSearch(data);


		this.setState({
			dataSource: value ? searchResult(value) : [],
		});
	}

	async clickAddActive(id, price) {


		var token = getCookie('token');

		if (token) {
			// await this.props.changePrice(e.currentTarget.dataset.price);
			await this.props.changePrice(price);
			// console.log(e.Target, 'e.target');
			// console.log(e.currentTarget.dataset.price, 'e.currentTarget.dataset.price');
			// console.log(e.currentTarget.dataset, 'e.currentTarget.dataset.id');
			await this.props.changeId(id);
			// this.props.changeId(e.currentTarget.dataset.id);

			// let status = this.props.getEntered(e.currentTarget.dataset.id, token);
			let status = await this.props.getEntered(id, token);

			if (status == -1) {

				this.setState({
					loginModalState: true,
					visible: false
				});
			} else {

				this.setState({
					visible: true
				});
			}




		} else {
			this.setState({
				loginModalState: true
			});
		}



	}

	onClose() {
		this.setState({
			visible: false,
		});
	};

	clickAvatar() {

		// 先注释掉
		// this.setState({
		// 	userCenterVisible: true
		// });

		var token = getCookie('token');

		if (token != null) {
			this.setState({
				userCenterVisible: true
			});
		} else {
			this.setState({
				loginModalState: true
			});
		}






	}


	handleOk(e) {
		this.setState({
			userCenterVisible: false,
		});
	}

	handleCancel(e) {
		console.log(e);
		this.setState({
			userCenterVisible: false,
		});
	}

	/**
	 * 发志报名
	 */
	sendVisibleClose() {
		this.setState({
			sendVisible: false
		})
	}

	sendActive() {

		var token = getCookie('token');

		if (token) {
			//先先注释掉
			this.setState({
				sendVisible: true
			});
		} else {
			this.setState({
				loginModalState: true
			});
		}



	}


	handleSubmit(e) {
		e.preventDefault();
		console.log('这是什么');
		this.props.form.validateFields(async (err, values) => {

			if (!err) {

				var data = {
					userid: getCookie('userId'),
					avatar: this.state.imageUrl,
					username: values.username,
					phone: getCookie('phone')
				}

				var token = getCookie('token');
				console.log(token, 'token');

				var auth = await this.props.saveUserInfo(data, token);

				if (auth == -1) {
					this.setState({
						loginModalState: true
					});

					clearCookie("token");


					clearCookie('userId');
					clearCookie('userName');
					clearCookie('avatar');
					clearCookie('phone');


				}

				this.setState({
					userCenterVisible: false
				});

				//xxxxx


				//xxxxx
				// var temp = JSON.parse(values.dragger[0].response.split(values.dragger[0].name)[1] + values.dragger[0].response.split(values.dragger[0].name)[2]);

				// var img = temp.data + values.dragger[0].name;

				// var data = {
				// 	"classroot": values.address,
				// 	"endTime": moment(values.endTime).format("YYYY-MM-DD HH:mm"),
				// 	"price": values.price,
				// 	"img": img,
				// 	"py": pinyinUtil.getPinyin(values.address).replace(/\s/g, "")
				// }

				// await this.props.sendSwim(data);

				// let params = {
				// 	offset: 1,
				// 	keyword: ""
				// }

				// await this.props.getList(params);
				// // this.props.

				// this.props.form.resetFields();

				// this.sendVisibleClose();
			}
		});
	}

	handleSelectChange(value) {
		console.log(value);
		this.props.form.setFieldsValue({
			note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
		});
	}


	handleOpenChange(open) {
		if (open) {
			this.setState({ mode: 'time' });
		}
	}

	handlePanelChange(value, mode) {
		this.setState({ mode });
	}


	/**
	 * 点击搜索
	 * @method clickSearch
	 */
	clickSearch(e) {

		NProgress.start();
		this.props.router.push(`/?page=1&keyword=`);
		NProgress.done();
	}


	searchSelect(e) {
		console.log(e);
		NProgress.start();

		// data.searchName = this.searchName.replace(/\s/g, "");


		// if (/[^\x00-\xff]/g.test(data.searchName))
		//     data.lang = 'cn';
		// else
		//     data.lang = 'en';
		if (e == '空') {
			e = '';
		}

		this.props.router.push(`/?page=1&keyword=${e}`);
		NProgress.done();

	}

	normFile(e) {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	}


	userListRender() {

		var arr = [];
		this.props.Index.userList.map((v, k) => {

			console.log(v.avatar);
			arr.push(<Col span={2} key={v.user}>
				<Tooltip title={v.user}>
					<Avatar size="large" src={v.avatar} alt={v.user} style={{ marginTop: "10px" }} />
				</Tooltip>
			</Col>);
		});
		return arr;
	}


	/**
	 * 确认登录
	 * @method loginHandleOk
	 * @param {Object} e 
	 */
	loginHandleOk(e) {
		console.log('确认登录');
		console.log(e);
		// this.refs.loginSubmitPhone.props.onSubmit();
		//this.loginSubmitPhone();

		this.loginSubmitPhone();



	}

	/**
	 * 取消登录
	 * @method loginHandleCancel
	 * @param {Object} e 
	 */
	loginHandleCancel(e) {
		console.log('取消登录');

		this.setState({
			loginModalState: false
		});
	}


	/**
	 * 登录
	 * @param {} e 
	 */

	closeLoginModal() {
		this.setState({
			loginModalState: false
		});
	}

	/**
	 * 登录切换
	 * @method loginChangeHandle
	 */
	loginChangeHandle(e) {
		console.log(e.target.value);

		this.setState({
			changeLogin: e.target.value
		});
	}

	/**
	 * 提交登录表单
	 * @method loginSubmitPhone
	 */
	loginSubmitPhone(e) {
		console.log(e);

		this.props.form.validateFields((err, values) => {

			console.log(values);

			if (values.phoneNumber == '' || values.volidCode == '') {
				console.log('有错误');
			}
			// if (!err) {
			// 	console.log('Received values of form: ', values);
			// }
		});
	}
	/**
	 * 点击二维码
	 * @method checkVolidFn
	 */
	checkVolidFn() {
		var { count } = this.state;
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


	/**
	 * 渲染登录
	 * @method getChangeCard
	 */
	getChangeCard() {
		const { getFieldDecorator } = this.props.form;


		if (this.state.changeLogin == 'phoneLogin') {

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
				</Form>

			</div>)
		} else if (this.state.changeLogin == 'wxLogin') {
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



	handleSubmit1(e) {
		// debugger;
		e.preventDefault();

		this.props.form.validateFields(async (err, values) => {
			console.log(err, 'err');
			console.log(values, 'values');
			console.log('aaaa');
		})


	}

	autoSelect(value, option) {
		console.log(value, option);


		NProgress.start();
		this.props.router.push(`/?page=1&keyword=${value}`);
		NProgress.done();
	}

	logout() {


		this.setState({
			userCenterVisible: false
		}, () => {
			console.log(this.state.loginModalState);
			console.log('看看关没关闭');
		});

		clearCookie("token");


		clearCookie('userId');
		clearCookie('userName');
		clearCookie('avatar');
		clearCookie('phone');

		var params = {
			id: "",
			username: "",
			avatar: "",
			phone: "",
			token: ""
		}

		this.props.setUserCookie(params);
		console.log('88888888');


	}

	render() {
		const size = this.state.size;
		// var pagination = {
		// 	current: this.props.index.offset,
		// 	pageSize: this.props.index.limit,
		// 	total: this.props.index.total
		// }

		// this.addKey(this.props.index.tableData, 'index' + new Date().getTime());


		const { getFieldDecorator } = this.props.form;


		const listData = [];
		for (let i = 0; i < 23; i++) {
			listData.push({
				href: 'http://ant.design',
				title: `ant design part ${i}`,
				avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
				content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
			});
		}

		const IconText = ({ type, text }) => (
			<span>
				<Icon type={type} style={{ marginRight: 8 }} />
				{text}
			</span>
		);
		const { dataSource } = this.state;



		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 14 },
		};




		const props = {
			name: 'file',
			multiple: true,
			action: '//jsonplaceholder.typicode.com/posts/',
			onChange(info) {
				// const status = info.file.status;
				// if (status !== 'uploading') {
				// 	console.log(info.file, info.fileList);
				// }
				// if (status === 'done') {
				// 	message.success(`${info.file.name} file uploaded successfully.`);
				// } else if (status === 'error') {
				// 	message.error(`${info.file.name} file upload failed.`);
				// }
			},
		};


		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Upload</div>
			</div>
		);

		const imageUrl = this.state.imageUrl;

		console.log(this.props.Index, 'this.props.Index.userAvatar');




		return (
			<LocaleProvider locale={zhCN}>
				<div>
					<Head>
						<title>游泳吧</title>
						<meta name="keywords" content="游泳吧社区 swimming club" />
						<meta name="description" content="游泳吧社区 swimming club" />
						<meta name="viewport" content="initial-scale=1.0, width=device-width" />
						<link rel="stylesheet" href="/static/antd.css" />
						<link rel="stylesheet" href="/static/demo.css" />
					</Head>
					<Layout>
						<Header style={{ color: "white" }}>
							<div className="logo" ><IconFont type="icon-LOGOyouyongba" className="logoIconStyle" /> <span className="logoTitle">游泳吧 swimming club</span></div>
							<Menu
								theme="dark"
								mode="horizontal"
								selectedKeys={['1']}
								style={{ lineHeight: '60px', width: "350px", float: "left" }}
							>
								<Menu.Item key="1">结伴</Menu.Item>
								<Menu.Item key="2"><Link href='/about'><a>demo演示</a></Link></Menu.Item>
								<Menu.Item key="3"><Link href='/textToVideo'><a>文字转语音工具</a></Link></Menu.Item>
							</Menu>
							<div className="userInfo">
								<Button type="primary" className="wrapSend" onClick={this.sendActive.bind(this)} ><IconFont type="icon-send1" className="send" />结伴游泳</Button>
								{/* <Badge count={1}> */}
								<Badge>
									{this.props.Index.token ? (<Tooltip placement="leftBottom" title={unescape(this.props.Index.userName)}><Avatar className="avatarStyle" shape="square" src={this.props.Index.avatar} onClick={this.clickAvatar.bind(this)} /></Tooltip>) : (<Avatar className="avatarStyle" shape="square" icon="user" onClick={this.clickAvatar.bind(this)} />)}
								</Badge>
							</div>
						</Header>

						{/* <Content style={{ minWidth: "1200px" }}> */}
						<Content>
							<div style={{ background: '#f2f2f2', padding: '30px' }}>
								<div className="global-search-wrapper" style={{ width: 400 }}>
									<AutoComplete
										className="global-search"
										size="large"
										style={{ width: '260px', marginRight: "10px" }}
										dataSource={this.props.Index.search.map(renderOption.bind(this))}

										onSearch={this.handleSearch.bind(this)}
										placeholder="input here"
										optionLabelProp="text"
										onSelect={this.autoSelect.bind(this)}
									//xxxx
									>
										{/* <Input
											ref="searchDom"
											placeholder="找伴游"
											suffix={(
												<Button className="search-btn" size="large" type="primary" onClick={this.clickSearch.bind(this)}>
													<Icon type="search" />
												</Button>
											)}
										/> */}

										<Input
											ref="searchDom"
											placeholder="找伴游"
											suffix={(

												<Icon className="search-btn" type="search" />

											)}
										/>

										{/* <Input
											ref="searchDom"
											placeholder="找伴游"
											suffix={(
												<Icon type="search" style={{marginRight:"15px"}} />
											)}
										/> */}
									</AutoComplete>
									<Button className="search-btn" size="large" type="primary" onClick={this.clickSearch.bind(this)}>
										全部
												</Button>
								</div>

								<List
									header={<div>结伴游泳 </div>}
									footer={<div><Pagination style={{ textAlign: "right" }} current={parseInt(this.props.Index.page, 10)} onChange={this.onChange.bind(this)} total={parseInt(this.props.Index.total, 10)} /></div>}
									bordered
									dataSource={this.props.Index.list}
									className="indexList"
									grid={{ gutter: 24, column: 4 }}
									renderItem={item => (<List.Item key={item.id}>
										<Card
											cover={<img alt="example" src={`${item.img}`} />}
											actions={[<Button
												type="primary"
												disabled={moment(item.startTime).unix() < moment(new Date()).unix() ? 'disabled' : ''} className="wrapAdd"
												data-id={item.id}
												data-price={item.price}
												// onClick={this.clickAddActive.bind(this)}
												onClick={async () => {
													await this.clickAddActive(item.id, item.price);
												}}
											><Icon type="plus" />报名</Button>]}
										>

											<Meta
												avatar={<Avatar src={`${item.thumb}`} />}
												title={`${item.title}`}
												description={`发起人：${item.sendUser}`}
											/>

											<Tag color="#e5e5e5" style={{ marginTop: "20px" }}>{item.startTime}</Tag>
											<Tag color="#e5e5e5" style={{ marginTop: "20px" }}>{item.num}人</Tag>
											<Tag color="#e5e5e5" style={{ marginTop: "20px" }}>{item.isOver ? '结束' : '未结束'}</Tag>
										</Card>
									</List.Item>)}
								/>

								{/** 发起报名 */}

								<SendForm
									sendVisible={this.state.sendVisible}
									sendVisibleClose={this.sendVisibleClose.bind(this)}
									sendSwim={this.props.sendSwim.bind(this)}
									list={this.props.getList.bind(this)}
								/>
								{/* http://pinyin.netease.com/uploadfile.php */}

								{/* 确认报名 */}
								<OkBaoming
									onClose={this.onClose.bind(this)}
									visible={this.state.visible}
									showPrice={this.props.Index.showPrice}
									userList={this.props.Index.userList}
								/>
							</div>


							{/* 登录框 */}

							<LoginGroup
								loginModalState={this.state.loginModalState}
								// loginModalState={false}
								onOk={this.loginHandleOk.bind(this)}
								loginHandleCancel={this.loginHandleCancel.bind(this)}
								changeLogin={this.state.changeLogin}
								loginChangeHandle={this.loginChangeHandle.bind(this)}
								loginHandleOk={this.loginHandleOk.bind(this)}
								closeLoginModal={this.closeLoginModal.bind(this)}
							/>

							{/* 个人中心  */}
							<Modal
								title="个人中心"
								visible={this.state.userCenterVisible}
								onOk={this.handleOk.bind(this)}
								onCancel={this.handleCancel.bind(this)}
								okText="确认"
								cancelText="取消"
								wrapClassName="userCenter"
							>
								<Radio.Group value={size} style={{ marginBottom: "20px" }} onChange={this.handleSizeChange}>
									{/* <Radio.Button value="large">往期参加</Radio.Button>
									<Radio.Button>我发布的</Radio.Button> */}
									<Radio.Button>基本信息</Radio.Button>
								</Radio.Group>

								<Button type="primary" style={{ marginLeft: "10px" }} onClick={this.logout.bind(this)}>登出</Button>

								{/* <List
									bordered
									dataSource={this.state.wangqiData}
									renderItem={item => (<List.Item >
										<div >{item}</div>
										<Radio.Group value={"small"} size={"small"} onChange={this.handleSizeChange}>
											<Radio.Button value="small" size={"small"}>不参加了</Radio.Button>
											<Radio.Button value="default" size={"small"}>编辑</Radio.Button>
											<Radio.Button value="default" size={"small"}>删除</Radio.Button>
										</Radio.Group>

									</List.Item>)}
								/> */}


								<Form onSubmit={this.handleSubmit.bind(this)}>
									<Form.Item
										label="昵称"
										labelCol={{ span: 5 }}
										wrapperCol={{ span: 12 }}
									>
										{getFieldDecorator('username', {
											initialValue: this.state.userName,
											rules: [{ required: true, message: '用户名称不能为空' }],
										})(
											<Input />
										)}
									</Form.Item>

									<Form.Item
										label="用户头像"
										labelCol={{ span: 5 }}
										wrapperCol={{ span: 12 }}
									>
										{getFieldDecorator('dragger', {
											valuePropName: 'avatar1',
											getValueFromEvent: this.normFile,
											rules: [{ required: false, message: '用户头像必填' }],
										})(
											<Upload
												name="avatar"
												listType="picture-card"
												className="avatar-uploader"
												showUploadList={false}
												// action="http://pinyin.netease.com/uploadfile.php"
												action="https://api.youyong.ba/uploadimg"
												beforeUpload={beforeUpload}
												onChange={this.handleChange.bind(this)}
												accept="image/jpeg,image/png"
											>
												{imageUrl ? <img style={{ width: "86px", height: "86px" }} key={this.state.imageUrl} src={`${this.state.imageUrl}`} alt="avatar" /> : uploadButton}
											</Upload>

										)}
									</Form.Item>

									<Form.Item
										wrapperCol={{ span: 12, offset: 5 }}
									>
										<Button type="primary" htmlType="submit">
											修改
          									</Button>
									</Form.Item>
								</Form>


							</Modal>

						</Content>
						<Footer>

							页尾


					</Footer>

					</Layout>
				</div>
			</LocaleProvider >
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

Index = Form.create({ name: 'coordinated' })(Index);

Index = connect(mapStateToProps, mapDispatchToProps)(Index);

Index = withRedux(initializeStore)(Index);

export default withRouter(Index);