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
	notification
} from 'antd';
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;


import Head from 'next/head'; // 引入内置组件
import Link from 'next/link';

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

/**
 * 引入公共文件结束
 */

class About extends Component {
	componentDidMount() {

		notification['success']({
			message: 'SSR 秒开（无数据变化的）',
			description: '用户刷新无感知性能体验',
		});

	}

	render() {

		return (
			<div>
				<Head>
	         		<title>不变化的数据</title>
	         		<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
	      			<link rel="stylesheet" href="/static/antd.css" />
	      			<link rel="stylesheet" href="/static/demo.css" />
	      		</Head>
	      		<Layout>
	      			<Header style={{color:"white"}}>
						<div className="logo" >SSR demo</div>
				      <Menu
				        theme="dark"
				        mode="horizontal"
				        selectedKeys={['2']}
				        style={{ lineHeight: '64px' }}
				      >
				        <Menu.Item key="1"><Link href='/' replace><a>变化的数据</a></Link></Menu.Item>
				        <Menu.Item key="2">不变化的数据</Menu.Item>
				      </Menu>
					</Header>
	      		</Layout>
	        </div>
		)
	}
}

export default About;