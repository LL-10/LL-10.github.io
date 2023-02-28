document.palette = {
	background: '#FFFDFB',
	color: '#333333',
	grey: '#f3f3f3',
	red: '#E9A29F',
	b: '#955555',
	c: '#F9F2EF',
};
document.body.style.background = document.palette.background;
document.body.style.color = document.palette.color;

const load = function(page) {
	new HTMLDocument((body, head) => {
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
		const loader = body.append('div', null, ['style*']);
		const x = 40;
		loader.style.position = 'absolute';
		loader.style.top = '50%';
		loader.style.left = '50%';
		loader.style.width = x + 'px';
		loader.style.height = x + 'px';
		loader.style.margin = '-' + x / 2 + 'px 0 0 -' + x / 2 + 'px';
		loader.style.borderRadius = '50%';
		loader.style.border = '14px solid ' + document.palette.grey;
		loader.style.borderTop = '14px solid ' + document.palette.red;
		loader.style.transition = 'transform linear 1200ms';
		setTimeout(()=>{
			loader.style.transform = 'rotate(1.5turn)';
		}, 2);
	}, 'LL - loading').load();
	setTimeout(()=>{
		page.load();
	}, 1200);
}

const nav = new HTMLFragment(nav => {
	const box = nav.append('div', null, {
		id: 'menu',
		'style*': null
	});
	const menu = box.append('ul');
	const HOME = menu.append('li').write('HOME').on('click', () => {
		load(home);
});
	const l1 = menu.append('li').write('GAMES');
	const submenu = l1.append('ul');
	const OTHELLO = submenu.append('li', null, ['style*']).write('Othello').on('click', () => {
		load(othello);
	}).on('mouseover touchstart', () => {
		OTHELLO.style.background = document.palette.b;
	}).on('mouseout touchend', () => {
		OTHELLO.style.background = document.palette.c;
	});
});

const home = new HTMLDocument(body => {
	nav.use();
}, 'LL');

const othello = new HTMLDocument(body => {
	nav.use();
	body.write('work in progress');
}, 'LL - Othello');
load(home);
