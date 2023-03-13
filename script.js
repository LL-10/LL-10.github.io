document.palette = {
	background: '#FFEOEO',
	light: '#F7B6B6',
	back: '#EC7575',
	coral: '#E34242',
	red: '#D90F0F',
	red2: '#C81610',
	hover: '#B71C10',
	t: '#942911',
	dark: '#571409',
	color: '#420D09',
};

new Style({
	background: document.palette.background,
}).apply(document.documentElement);
new Style({
	background: 'inherit',
	color: document.palette.color,
	fontFamily: 'sans-serif',
	margin: '0',
	padding: '4px',
}).apply(document.body);

const load = function(page) {
	new HTMLDocument((body, head) => {
		nav.use();
		const loader = body.append('div', ['style*']);
		const x = 40;
		const bord = 14;
		new Style({
			position: 'absolute',
			top: '50%',
			left: '50%',
			width: x + 'px',
			height: x + 'px',
			margin: '-' + ( x / 2 + bord ) + 'px 0 0 -' + ( x / 2 + bord ) + 'px',
			borderRadius: '50%',
			border: bord + 'px solid ' + document.palette.light,
			borderTop: bord + 'px solid ' + document.palette.red,
			transition: 'transform linear 1200ms',
		}).apply(loader);
		setTimeout(()=>{
			loader.style.transform = 'rotate(1.5turn)';
		}, 2);
	}, 'LL - loading').load();
	setTimeout(()=>{
		page.load();
	}, 1200);
}

const nav = new HTMLFragment(nav => {
	const box = nav.append('div', ['style*']);
	const menu = box.append('ul', ['style*']);
	new Style({
		listStyleType: 'none',
		display: 'flex',
		margin: '0',
		padding: '0',
		background: document.palette.back,
		borderTop: '2px solid' + document.palette.dark,
		borderLeft: '2px solid' + document.palette.dark,
		borderBottom: '2px solid' + document.palette.dark,
	}).apply(menu);
	const HOME = menu.append('li', ['style*']).write('HOME').on('click', () => {
		load(home);
});
	const GAMES = menu.append('li', ['style*']).write('GAMES');
	new Style({
		width: '100%',
		borderRight: '2px solid' + document.palette.dark,
	}).apply(HOME).apply(GAMES);
	const submenu = GAMES.append('ul', ['style*']);
	submenu.style.listStyleType = 'none';
	submenu.style.display = 'none';
	submenu.style.flexDirection = 'column';
	submenu.style.position = 'absolute';
	submenu.style.zIndex = '1';
	submenu.style.width = '150px';
	submenu.style.padding = '0';
	submenu.style.margin = '0 0 0 -2px';
	submenu.style.background = document.palette.back;
	GAMES.on('mouseover touchstart hover', () => {
		submenu.style.display = 'flex';
	}).on('mouseout touchleave touchcancel' , () => {
		submenu.style.display = 'none';
	});
	const OTHELLO = submenu.append('li', ['style*']).write('Othello').on('click', () => {
		load(othello);
	}).on('mouseover touchstart', () => {
		OTHELLO.style.background = document.palette.hover;
	}).on('mouseout touchend touchleave touchcancel', () => {
		OTHELLO.style.background = document.palette.back;
	});
	new Style({
		background: 'inherit',
		border: '2px solid' + document.palette.dark,
	}).apply(OTHELLO);
});

const home = new HTMLDocument(body => {
	nav.use();
}, 'LL');

const othello = new HTMLDocument(body => {
	nav.use();
	const restart = body.append('button', ['style*']).write('RESTART GAME').on('click', () => {
		localStorage.removeItem('othello');
		othello.load();
	});
	const board = body.append('div', ['style*']);
}, 'LL - Othello');
load(home);
