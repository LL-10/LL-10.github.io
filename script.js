const menu = new HTMLFragment((menu) => {
	const div = menu.append('div', null, {
		id: 'menu',
		'style*': null
	});
	const list = div.append('ul');
	const l0 = list.append('li').write('HOME').on('click', () => {
	main.load();
});
	const l1 = list.append('li').write('GAMES');
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
	menu.use(body);
}, 'LL');
const othello = new HTMLDocument((body) => {
	menu.use(body);
	body.write('work in progress');
}, 'LL - Othello');
main.load();
