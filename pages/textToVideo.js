/**
 * 引入公共文件开始
 */
import React, {
	Component
} from 'react';


import {
	Layout,
	Table,
	Card,
	Menu,
	notification,
	Form,
	Icon,
	Input,
	Button,
	Divider,
	Checkbox
} from 'antd';
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;

// import * as ReactAudioPlayer from "react-audio-player";
// import Audio from 'react-audioplayer';

import Head from 'next/head'; // 引入内置组件
import Link from 'next/link';



import NProgress from 'nprogress';

import {
	withRouter
} from 'next/router';

import withRedux from 'next-redux-wrapper';

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';


import initializeStore from '../store/initializeStore';
import * as actionCreators from '../actions/index';

const FormItem = Form.Item;
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '/static/js/font_475028_caaiz33gkk.js',
});

const {
	TextArea
} = Input;

/**
 * 引入公共文件结束
 */

class TextToVideo extends Component {
	static async getInitialProps({
		query,
		store,
		isServer
	}) {

		if (isServer == false) {
			NProgress.start();
		}
		// let data = store.getState();

		// let params = {
		// 	limit: data.limit,
		// 	offset: 1
		// }
		// await store.dispatch(actionCreators.getTablesNoData(params));

	}

	constructor(props) {
		super(props);

		this.audioRef = React.createRef();

		this.state = {
			utterThis: null,
			audio: "https://api.youyong.ba/default.wav"
		}
	}

	componentWillMount() {


	}

	componentDidMount() {

		// NProgress.done();

		if (document !== undefined) {
			NProgress.done();
		}

		// notification['success']({
		// 	message: 'SSR 秒开（无数据变化的）',
		// 	description: '用户刷新无感知性能体验',
		// });

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

		this.props.getTablesNoData(params);
	}


	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields(['text'], (err, values) => {
			if (!err) {
				this.setState({
					utterThis: new window.SpeechSynthesisUtterance(values.text)
				}, () => {
					window.speechSynthesis.speak(this.state.utterThis);
				});
			}
		});
	}

	pauseBtn(e) {
		window.speechSynthesis.pause();
	}


	resumeBtn(e) {
		window.speechSynthesis.resume();
	}

	stopBtn(e) {
		window.speechSynthesis.cancel();

	}

	handleSubmit1(e) {
		e.preventDefault();
		this.props.form.validateFields(['title2', 'text2'], async (err, values) => {
			if (!err) {

				console.log(values.text2, 'values.text2');
				console.log(values)


				let res = await fetch("https://api.youyong.ba/textToAudio?title=" + values.title2 + "&text=" + values.text2, {
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
				console.log(json);

				this.setState({
					"audio": json.data
				})



			}
		});
	}


	render() {
		const {
			getFieldDecorator
		} = this.props.form;

		console.log(this.props, 'this.props');

		var pagination = {
			current: this.props.about.offset,
			pageSize: this.props.about.limit,
			total: this.props.about.total
		}

		this.addKey(this.props.about.tableData, 'about' + new Date().getTime());

		return (
			<div>
				<Head>
					<title>游泳吧</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />

					<link rel="stylesheet" href="/static/textToVideo.css" />
				</Head>
				<Layout>
					<Header style={{ color: "white" }}>
						<div className="logo" ><IconFont type="icon-LOGOyouyongba" className="logoIconStyle" /> <span className="logoTitle">游泳吧 swimming club</span></div>
						<Menu
							theme="dark"
							mode="horizontal"
							selectedKeys={['3']}
							style={{ lineHeight: '60px', width: "350px", float: "left" }}
						>
							<Menu.Item key="1"><Link href='/'><a>结伴</a></Link></Menu.Item>
							<Menu.Item key="2"><Link href='/about'><a>demo演示</a></Link></Menu.Item>
							<Menu.Item key="3">文字转语音工具</Menu.Item>
						</Menu>
					</Header>
					<Content>
						<div style={{ background: '#f2f2f2', padding: '30px' }}>
							<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
								<FormItem>
									{getFieldDecorator('text', {
										rules: [{ required: true, message: '必填项' }],
									})(
										<TextArea placeholder="在这里粘贴要语音播报的文字" autosize={{ minRows: 2, maxRows: 6 }} />
									)}
								</FormItem>

								<FormItem>

									<Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: "10px" }}>
										播放
						          </Button>

									<Button onClick={this.pauseBtn.bind(this)} className="login-form-button">
										暂停
						          </Button>


									<Button onClick={this.resumeBtn.bind(this)} className="login-form-button">
										继续
						          </Button>

									<Button onClick={this.stopBtn.bind(this)} className="login-form-button">
										停止
						          </Button>
								</FormItem>
							</Form>
							<Divider dashed style={{ background: "#cccccc" }} />
							<Form onSubmit={this.handleSubmit1.bind(this)} className="login-form">
								<FormItem style={{ margin: 0 }}>
									<strong>只支持500个汉字，1000个字节</strong>
								</FormItem>
								<FormItem>
									{getFieldDecorator('title2', {
										rules: [{ required: true, message: '必填项' }],
									})(
										<Input placeholder="这里填写语音文件名称" />
									)}
								</FormItem>
								<FormItem>
									{getFieldDecorator('text2', {
										rules: [{ required: true, message: '必填项' }],
									})(
										<TextArea placeholder="接口方式--在这里粘贴要语音播报的文字" autosize={{ minRows: 2, maxRows: 6 }} />
									)}
								</FormItem>
								<FormItem>
									{/* <ReactAudioPlayer
										// src={encodeURI(this.state.audio)}
										src={this.state.audio}
										//autoPlay
										controls
									/> */}

									<audio src={encodeURI(this.state.audio)} autoplay="autoplay" controls >
										<track kind="captions" />
										您的浏览器不支持 audio 元素。
									</audio>
								</FormItem>
								<FormItem>
									<Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: "10px" }}>
										生成音频文件
						          </Button>
								</FormItem>
							</Form>

						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}

TextToVideo = Form.create()(TextToVideo);

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		about: state.About
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

TextToVideo = connect(mapStateToProps, mapDispatchToProps)(TextToVideo);

TextToVideo = withRedux(initializeStore)(TextToVideo);

export default withRouter(TextToVideo);