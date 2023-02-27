const nav = new HTMLFragment((nav) => {
	const box = nav.append('div', null, {
		id: 'menu',
		'style*': null
	});
	const menu = box.append('ul');
	const l0 = menu.append('li').write('HOME').on('click', () => {
	main.load();
});
	const l1 = menu.append('li').write('GAMES');
	const lb = l1.append('ul');
	const ll1 = lb.append('li')
	const othelloButton = ll1.append('a', null, {
		href: 'javascript:void(0)',
	}).write('Othello').on('click', () => {
		othello.load();
	});
});

const main = new HTMLDocument((body, head) => {
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
	nav.use();
}, 'LL');

const othello = new HTMLDocument((body) => {
	nav.use();
	body.write('work in progress');
}, 'LL - Othello');
main.load();
