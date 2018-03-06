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

import Head from 'next/head'; // 引入内置组件
import Link from 'next/link';

const cookieParser = require("cookie-parser");

class Index extends React.Component {
	static async getInitialProps({
		query,
		store,
		isServer
	}) {
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

	componentDidMount() {

		notification['success']({
			message: 'SSR 秒开(有数据变化的)',
			description: '用户刷新无感知性能体验',
		});

	}
	render() {
		return (
			<div>
			    <Head>
					<title>变化的数据</title>
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
				        selectedKeys={['1']}
				        style={{ lineHeight: '64px' }}
				      >
				        <Menu.Item key="1">变化的数据</Menu.Item>
				        <Menu.Item key="2"><Link href='/about' replace><a>不变化的数据</a></Link></Menu.Item>
				      </Menu>
					</Header>



				</Layout>
			</div>
		)
	}
}

export default Index