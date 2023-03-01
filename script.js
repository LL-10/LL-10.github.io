document.palette = {
	background: '#FFEOEO',
	color: '#420D09',
	light: '#F7B6B6',
	red: '#D90F0F',
	hover: '#B71C10',
	back: '#EC7575',
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
		const bord = 14;
		loader.style.position = 'absolute';
		loader.style.top = '50%';
		loader.style.left = '50%';
		loader.style.width = x + 'px';
		loader.style.height = x + 'px';
		loader.style.margin = '-' + ( x / 2 + bord ) + 'px 0 0 -' + ( x / 2 + bord ) + 'px';
		loader.style.borderRadius = '50%';
		loader.style.border = bord + 'px solid ' + document.palette.light;
		loader.style.borderTop = bord + 'px solid ' + document.palette.red;
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
	const submenu = l1.append('ul', null, ['style*']);
	const OTHELLO = submenu.append('li', null, ['style*']).write('Othello').on('click', () => {
		load(othello);
	}).on('mouseover touchstart', () => {
		OTHELLO.style.background = document.palette.hover;
	}).on('mouseout touchend touchleave touchcancel', () => {
		OTHELLO.style.background = document.palette.back;
	});
	OTHELLO.style.background = document.palette.back;
});

const home = new HTMLDocument(body => {
	nav.use();
}, 'LL');

const othello = new HTMLDocument(body => {
	nav.use();
	body.write('work in progress');
}, 'LL - Othello');
load(home);
