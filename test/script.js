import './modules/default.js';
import {html, head, title, body} from './modules/HTMLelement.js';
import Page from './modules/HTMLpage.js';
import HEX from './modules/colors.js';

body.clear();
var div = body.append('div');
var username = div.append('input');
var password = div.append('input');
var submit = div.append('input');
/*var server = body.append('div');
var host = server.append('input');
var port = server.append('input');*/

username.setAttribute('type','text');
username.setAttribute('placeholder','Username');
password.setAttribute('type','password');
password.setAttribute('placeholder','Password');
submit.setAttribute('type','submit');
/*host.setAttribute('type','text');
host.setAttribute('placeholder','host [0.0.0.0]');
port.setAttribute('type','number');
port.setAttribute('min','1024');
port.setAttribute('max','65535');
port.setAttribute('placeholder','port [1024]');*/

div.setStyle('margin','3px 0');
//server.setStyle('margin','3px 0');
username.setStyle('width','132px');
username.setStyle('margin','0 1px');
password.setStyle('width','132px');
password.setStyle('margin','0 1px');
submit.setStyle('width','66px');
submit.setStyle('margin','0 1px');
/*host.setStyle('width','132px');
host.setStyle('margin','0 1px');
port.setStyle('width','132px');
port.setStyle('margin','0 1px');*/

submit.on('click', ()=>{
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
   console.log(xhr.response);
  }
 }
 var conn = 'https://ggrindelwald1234s.loca.lt';
 /*host.value?conn+=host.value:conn+='0.0.0.0';
 conn+=':';
 port.value?conn+=port.value:conn+='1024';
 conn+='/';*/
 xhr.open('POST', conn, true);
 xhr.setRequestHeader('Bypass-Tunnel-Reminder','');
 xhr.setRequestHeader('action','del');
 xhr.setRequestHeader('username', username.value);
 xhr.setRequestHeader('password', password.value);
 xhr.send();
});
