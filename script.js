void async function main() {
	try {
		const HTMLElement = await (await import './DevLib/HTML:JS/HTMLElement.js');
		const html = new HTMLElement(document.documentElement);
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
		const body = html.append('body');
		const menu = body.append('div', null, {
			id: 'menu',
			'style*': null
		});
		menu.style = 'width: 96%; float: left; margin: 2%; padding: 0; border-top: 3px solid #AABAAF; border-right: 3px solid #AABAAF; border-bottom: 3px solid #AABAAF; background: #DDEADF; font-size: 112.5%;';
		const list = menu.append('ul');
		const l1 = list.append('li').write(hello);
		const l2 = list.append('li');
		const lb = l1.append('ul');
		const ll1 = lb.append('li')
		const othello = ll1.append('a', null, {
			href: './othello',
		}).write('Othello');
	} catch (e) {
		alert (e)
	}
}
