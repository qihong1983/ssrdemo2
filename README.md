# SSR+PWA的service-worker demo 实践方案


### 技术栈

- next 
- redux
- antd 
- easy-mock
- mock.js
- nginx
- workbox-sw
- NProgress

### 核心价值点

- SSR
	- 刷新后用户无感知的用户体验（首屏同构直出）
- PWA
	- 将WebApp 图标添加到主屏上
	- 通过主屏上图标打开的表现
	- 推送通知
	- 离线运行

## 需要的条件

> 完全前后端分离

- ssr
 	- 完全前后端分离
 	- 私有数据用jwt
- pwa 
	- 必需是https的 
	- https://github.com/qihong1983/doc/wiki/PWA-(Progressive-Web-Apps)-%E4%BB%B7%E5%80%BC%E7%82%B9
