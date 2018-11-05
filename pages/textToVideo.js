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
	Checkbox
} from 'antd';
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;


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
import * as actionCreators from './actions';

const FormItem = Form.Item;


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
		let data = store.getState();

		let params = {
			limit: data.limit,
			offset: 1
		}
		await store.dispatch(actionCreators.getTablesNoData(params));

	}

	constructor(props) {
		super(props);

		this.state = {
			utterThis: null
		}
	}

	componentWillMount() {


	}

	componentDidMount() {

		// NProgress.done();

		if (document !== undefined) {
			NProgress.done();
		}

		notification['success']({
			message: 'SSR 秒开（无数据变化的）',
			description: '用户刷新无感知性能体验',
		});

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
		this.props.form.validateFields((err, values) => {
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
	render() {
		const {
			getFieldDecorator
		} = this.props.form;

		var pagination = {
			current: this.props.about.offset,
			pageSize: this.props.about.limit,
			total: this.props.about.total
		}

		this.addKey(this.props.about.tableData, 'about' + new Date().getTime());

		return (
			<div>
				<Head>
	         		<title>不变化的数据</title>
	         		<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
	      			<link rel="stylesheet" href="/static/antd.css" />
	      			<link rel="stylesheet" href="/static/TextToVideo.css" />
	      		</Head>
	      		<Layout>
	      			<Header style={{color:"white"}}>
						<div className="logo" >SSR DEMO</div>
				      <Menu
				        theme="dark"
				        mode="horizontal"
				        selectedKeys={['3']}
				        style={{ lineHeight: '64px' }}
				      >
				        <Menu.Item key="1"><Link href='/'><a>变化的数据</a></Link></Menu.Item>
				        <Menu.Item key="2"><Link href='/about'><a>不变化的数据</a></Link></Menu.Item>
				        <Menu.Item key="3">文字转语音</Menu.Item>
				      </Menu>
					</Header>
					<Content>
						<div style={{ background: '#f2f2f2', padding: '30px' }}>
					    	<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
						        <FormItem>
						          {getFieldDecorator('text', {
						            rules: [{ required: true, message: '必填项' }],
						          })(
						             <TextArea placeholder="在这里粘贴要语音播报的文字" autosize={{ minRows: 2, maxRows: 6 }}  />
						          )}
						        </FormItem>
						        
						        <FormItem>
						          
						          <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: "10px"}}>
						            播放
						          </Button>

						          <Button onClick={this.pauseBtn.bind(this)} className="login-form-button">
						            暂停
						          </Button>


						          <Button onClick={this.resumeBtn.bind(this)} className="login-form-button">
						            继续
						          </Button>

						          <Button onClick={this.stopBtn.bind(this)}  className="login-form-button">
						            停止
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