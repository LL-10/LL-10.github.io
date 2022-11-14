import './modules/default.js';
import {html, head, title, body} from './modules/HTMLelement.js';
import Page from './modules/HTMLpage.js';
import HEX from './modules/colors.js';

var link1 = head.append('link');
var link2 = head.append('link');

link1.rel = "stylesheet"
link1.href = "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
link2.rel = "stylesheet"
link2.href = "./style/menu.css"

body.clear();

var menu = body.append('div');
var list = menu.append('ul');
var othello = list.append('li');
var l2 = list.append('li');

othello.href = "./othello/othello.html"
othello.innerHTML = "Othello"

/*
var div = body.append('div');
var username = div.append('input');
var password = div.append('input');
var submit = div.append('input');
var server = body.append('div');
var host = server.append('input');
var port = server.append('input');

username.setAttribute('type','text');
username.setAttribute('placeholder','Username');
password.setAttribute('type','password');
password.setAttribute('placeholder','Password');
submit.setAttribute('type','submit');
host.setAttribute('type','text');
host.setAttribute('placeholder','host [0.0.0.0]');
port.setAttribute('type','number');
port.setAttribute('min','1024');
port.setAttribute('max','65535');
port.setAttribute('placeholder','port [1024]');

div.setStyle('margin','3px 0');
server.setStyle('margin','3px 0');
username.setStyle('width','132px');
username.setStyle('margin','0 1px');
password.setStyle('width','132px');
password.setStyle('margin','0 1px');
submit.setStyle('width','66px');
submit.setStyle('margin','0 1px');
host.setStyle('width','132px');
host.setStyle('margin','0 1px');
port.setStyle('width','132px');
port.setStyle('margin','0 1px');
*/
