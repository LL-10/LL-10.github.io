void async function main() {
	try {
		const HTMLElement = await (await import './DevLib/HTML:JS/HTMLElement.js');
		const body = new HTMLElement(document.body);
		const head = new HTMLElement(document.head);
		const icon = head.append('link', null, {
			rel: 'icon',
			type: 'image/png',
			href: './Resources/main/icon.png'
		});
		const style = head.append('link', null, {
			rel: 'stylesheet',
			type: 'text/css',
			href: './style/menu.css'
		});
		var menu = body.append('div', null, {
			id: 'menu',
			'style*': null
		});
		menu.style = 'width: 96%; float: left; margin: 2%; padding: 0; border-top: 3px solid #AABAAF; border-right: 3px solid #AABAAF; border-bottom: 3px solid #AABAAF; background: #DDEADF; font-size: 112.5%;';
		var list = menu.append('ul');
		var l1 = list.append('li');
		var l2 = list.append('li');
		l1.write('hello');
		var lb = l1.append('ul');
		var ll1 = lb.append('li')
		var othello = ll1.append('a', null, {
			href: './othello',
		});
		othello.write('Othello');
	} catch (e) {
		alert (e)
	}
}
