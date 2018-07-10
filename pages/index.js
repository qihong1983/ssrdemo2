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
	notification
} from 'antd';
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;

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
import * as actionCreators from './actions';


class Index extends React.Component {
	static async getInitialProps({
		query,
		store,
		isServer
	}) {

		if (isServer == false) {
			NProgress.start();
		}
		console.log(11);
		// global.token = 'aaa';

		let data = store.getState();

		let params = {
			limit: data.limit,
			offset: 1
		}
		await store.dispatch(actionCreators.getTables(params));

	}

	constructor(props) {
		super(props);
	}


	componentWillMount() {


		

	}

	componentDidMount() {
		if (document != undefined) {
		 NProgress.done();
		}
		
		notification['success']({
			message: 'SSR 秒开(有数据变化的)',
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

		this.props.getTables(params);
	}

	render() {

		var pagination = {
			current: this.props.index.offset,
			pageSize: this.props.index.limit,
			total: this.props.index.total
		}

		this.addKey(this.props.index.tableData, 'index' + new Date().getTime());

		return (
			<div>
			    <Head>
					<title>变化的数据</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<link rel="stylesheet" href="/static/antd.css" />
				</Head>
				<Layout>
					<Header style={{color:"white"}}>
					<div className="logo" >SSR+PWA DEMO</div>
				      <Menu
				        theme="dark"
				        mode="horizontal"
				        selectedKeys={['1']}
				        style={{ lineHeight: '64px' }}
				      >
				        <Menu.Item key="1">变化的数据</Menu.Item>
				        <Menu.Item key="2"><Link href='/about'><a>不变化的数据</a></Link></Menu.Item>
				      </Menu>
					</Header>

					<Content>

						<div style={{ background: '#f2f2f2',padding: '30px' }}>
						    <Card title="SSR刷新后用户无感知的性能体验、PWA其中被访问过后的页面断网后依然能访问" bordered={false}>
								<Table 
									columns={this.props.index.columns} 
									dataSource={this.props.index.tableData} 
									hoverable={true} 
									loading={this.props.index.loading} 
									pagination={pagination}
									onChange={this.handleTableChange.bind(this)}
								/>
		  					</Card>
	  					</div>
						
					</Content>
					<Footer>Footer</Footer>

				</Layout>
			</div>
		)
	}
}

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		index: state.About
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

Index = connect(mapStateToProps, mapDispatchToProps)(Index);

Index = withRedux(initializeStore)(Index);

export default withRouter(Index);