const nav = new HTMLFragment((nav) => {
	const box = nav.append('div', null, {
		id: 'menu',
		'style*': null
	});
	const menu = box.append('ul');
	const HOME = menu.append('li').write('HOME').on('click', () => {
		home.load();
});
	const l1 = menu.append('li').write('GAMES');
	const submenu = l1.append('ul');
	const OTHELLO = submenu.append('li').write('Othello').on('click', () => {
		othello.load();
	});
});

const home = new HTMLDocument((body, head) => {
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
home.load();
