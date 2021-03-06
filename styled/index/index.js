import styled from "styled-components";

const Wrapper = styled.main`
body {
	overflow-y: scroll;
	background: #f2f2f2;
}

.global-search-wrapper {
    padding-right: 50px;
    margin:0 auto;
    margin-bottom:30px;
    background:#f2f2f2;
    display:flex;
  }


  .global-search-wrapper .ant-input-affix-wrapper {
      background: white;
  }

  .global-search-wrapper  .ant-select-auto-complete.ant-select .ant-select-search--inline {
      background:#f2f2f2;
  }

  .ant-select-dropdown-menu-item-active {
      background-color:#f2f2f2;
  }

  .ant-select-dropdown-menu-item:hover {
    background-color:#f2f2f2;
  }
  
  .global-search {
    width: 100%;
  }

  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
      border:1px solid #e56045;
  }
  
  .global-search.ant-select-auto-complete .ant-select-selection--single {
    /* margin-right: -46px; */
  }
  
  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 62px;
  }
  
  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {
    right: 0;
  }
  
  a{
      color:#e56045;
  }

  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background:#e56045;
    border-color: #e56045 !important;
  }
  
  .global-search-item-count {
    position: absolute;
    right: 16px;
  }

  .ant-select-auto-complete.ant-select .ant-input:focus, .ant-select-auto-complete.ant-select .ant-input:hover{
    border-color: #e56045;
  }

#nprogress {
    pointer-events: none
}

#nprogress .bar {
    background: #e56045;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px
}

#nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #e56045,0 0 5px #e56045;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0,-4px);
    -ms-transform: rotate(3deg) translate(0,-4px);
    transform: rotate(3deg) translate(0,-4px)
}

#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px
}

#nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-top-color: #e56045;
    border-left-color: #e56045;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite
}

.ant-layout-header {
	background: #4d4d4d;
}

.ant-menu-dark, .ant-menu-dark .ant-menu-sub {
	background: #4d4d4d;
}


.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected, .ant-menu.ant-menu-dark .ant-menu-item-selected {
	background-color: #e56045;
}
.logo {
    width: 230px;
    /* height: 31px; */
    float: left;
    background: #1b1b1b;
    padding-left: 24px;
}


.logo .logoTitle {
    margin-left:5px;
    opacity: 0.87;
}

.userInfo {
    float:right;
}

.userInfo .wrapSend {
    background:#00aeef;
    border:1px solid #00aeef;
    position: relative;
    top:1px;
    right:10px;
}


.userInfo .wrapSend:hover {
    
    opacity: 0.87;
}

.userInfo .ant-btn-primary:focus, .userInfo .ant-btn-primary:hover {
    color: #fff;
    background-color: #00aeef !important;
    border-color: #00aeef !important;
    opacity: 0.87;
}

.wrapAdd {
    background:#e56045;
    border:1px solid #e56045;
}

.wrapAdd:hover {
    background:#e56045;
    border:1px solid #e56045;
    opacity: 0.87;
}

.indexList .send {
   font-size:18px;
}

.indexList .ant-btn-primary.active,.indexList  .ant-btn-primary:active {
    color: #fff;
    background-color: #e56045 !important;
    border-color: #e56045 !important;
}

.indexList .ant-btn-primary:focus, .ant-btn-primary:hover {
    color: #fff;
    background-color: #e56045;
    border-color: #e56045;
}

.ant-badge:not(.ant-badge-not-a-wrapper) {
    margin-right: 24px;
  }
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
  }

.ant-card-wider-padding {
	padding:0px;
	margin:0px;
}

.ant-card-wider-padding .ant-card-head {
	padding: 0 24px;
}

.ant-card-wider-padding .ant-card-body {
	padding: 24px 24px;
}

.ant-table-tbody>tr.ant-table-row-hover>td,.ant-table-tbody>tr:hover>td,.ant-table-thead>tr.ant-table-row-hover>td,.ant-table-thead>tr:hover>td{
	 background: #e56045;
	 color:white;
}

.ant-pagination-item-active {
	border-color: #e56045;
	color:#e56045;
}

.ant-pagination-item-active a {
	color:#e56045;
}
.ant-pagination-item:focus, .ant-pagination-item:hover{
	border-color: #e56045;
	color:#e56045;
}

.ant-pagination-item:focus, .ant-pagination-item:hover a{

	color:#e56045;
}

.ant-pagination-next .ant-pagination-item-link:hover , .ant-pagination-prev .ant-pagination-item-link:hover {
	border-color: #e56045;
	color:#e56045;
}

.ant-pagination-item-active:focus a, .ant-pagination-item-active:hover a {
	color:#e56045;
}

.ant-pagination-next:hover, .ant-pagination-prev:hover {
	border-color: #e56045;
	color:#e56045;
}

.ant-pagination-next:hover a, .ant-pagination-prev:hover a {
	color:#e56045;
}

.ant-layout-footer {
	background: #f2f2f2;
}


.logoIconStyle {
    font-size:40px;
    color:#e56045;
    vertical-align: middle;
}

.avatarStyle {
    cursor: pointer;
}

.ant-layout-header {
    height:60px;
    line-height:60px;
    padding:0;
}

.indexList {
background-color: white;
border:1px solid #e5e5e5;
padding:20px;
}

.indexList .ant-list-header {
    margin-bottom:20px;

}

.indexList .ant-list-split .ant-list-header {
    border:1px solid #e5e5e5;
}

.indexList .ant-card-bordered {
    border:1px solid #e5e5e5;
}

.userCenter .ant-list-item-content-single {
    justify-content: space-between;
}



.ant-radio-button-wrapper-checked:first-child{
    border-color: #e56045;
}

.ant-radio-button-wrapper-checked {
    color: #e56045;
}

.ant-radio-button-wrapper-checked:hover {
    color:#e56045;
}

.ant-radio-button-wrapper-focused, .ant-radio-button-wrapper:hover {
    color:#e56045;
}

.ant-btn:focus, .ant-btn:hover {
    color: #e56045;
    background-color: #fff;
    border-color:#e56045;

}

.ant-btn-primary {
    background-color: #e56045;
    border-color: #e56045;
}

.ant-btn-primary:hover {
    color: white;
    background-color: #e56045;
    border-color: #e56045;
    opacity: 0.87;
}

.ant-input:focus, .ant-input:hover {
    border:1px solid #e56045;
}

.ant-calendar-picker:hover {
    /* border:1px solid #e56045; */
}

.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled) {
    border:1px solid #e56045;
}

.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
    border:1px dashed #e56045;
}

.ant-calendar .ant-calendar-ok-btn {
    border-color: #e56045;
    background-color: #e56045;
}

.ant-calendar .ant-calendar-ok-btn:focus, .ant-calendar .ant-calendar-ok-btn:hover{
    border-color: #e56045;
    background-color: #e56045;
    opacity: 0.87;
}

a:hover{
    color:#e56045;
}

.ant-calendar-time-picker-select li:hover{
    background:#e56045;
    color:white;
}

.ant-upload.ant-upload-select-picture-card:hover {
    border-color:#e56045;
}


.ant-radio-button-wrapper-checked {
    background: #fff;
    border-color: #e56045;
    color: #e56045;
    -webkit-box-shadow: -1px 0 0 0 #e56045;
    box-shadow: -1px 0 0 0 #e56045;
    z-index: 1;
}


.ant-radio-button-wrapper-checked:active {
    border-color: #e56045;
    -webkit-box-shadow: -1px 0 0 0 #e56045;
    box-shadow: -1px 0 0 0 #e56045;
    color: #e56045;
}

.ant-radio-button-wrapper-checked:hover {
    border-color: #e56045;
    -webkit-box-shadow: -1px 0 0 0 #e56045;
    box-shadow: -1px 0 0 0 #e56045;
    color: #e56045;
}

.ant-card-cover img {
    /* width: 227px;*/
    height: 138px; 
}


.search-btn {
    margin-right: 10px;
    /* color: #e56045; */


}



`;

export default Wrapper;