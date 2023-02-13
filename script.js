void async function () {
	try {
		const HTMLElement = await (await import('./DevLib/HTML:JS/HTMLElement.js')).default();
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
		const body = html.append('body').write('hello');
	} catch (e) {
		alert (e);
	}
};
