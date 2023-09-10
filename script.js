(async () => {
	await import('./globals/palette.js');
	await import('./globals/text.js');
	
	new Style({
		width: '100vw',
		height: '100vh',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'stretch',
		overflow: 'hidden',
		background: document.palette.background,
		fontFamily: 'sans-serif',
	}).apply(document.documentElement);
	new Style({
		margin: '0',
		padding: '4px',
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		overflow: 'hidden',
		background: 'inherit',
		color: document.palette.color,
	}).apply(document.body);
	
	const load = function (page) {
		new HTMLDocument((body) => {
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
				margin: '-' + (x / 2 + bord) + 'px 0 0 -' + (x / 2 + bord) + 'px',
				borderRadius: '50%',
				border: bord + 'px solid ' + document.palette.light,
				borderTop: bord + 'px solid ' + document.palette.red,
				transition: 'transform linear 1200ms',
			}).apply(loader);
			setTimeout(() => {
				loader.style.transform = 'rotate(1.5turn)';
			}, 2);
		}, document.text.load.title).load();
		setTimeout(() => {
			page.load();
		}, 1200);
	}
	
	const nav = new HTMLFragment(nav => {
		const box = nav.append('div', ['style*']);
		const menu = box.append('ul', ['style*']);
		new Style({
			position: 'sticky',
			display: 'flex',
			top: '0',
			margin: '0',
			padding: '0',
			listStyleType: 'none',
			background: document.palette.back,
			borderTop: '2px solid' + document.palette.dark,
			borderLeft: '2px solid' + document.palette.dark,
			borderBottom: '2px solid' + document.palette.dark,
		}).apply(menu);
		const HOME = menu.append('li', ['style*']).write(document.text.menu.HOME.button).on('click', () => {
			load(home);
		});
		const GAMES = menu.append('li', ['style*']).write(document.text.menu.GAMES.button);
		new Style({
			flex: '1',
			borderRight: '2px solid' + document.palette.dark,
		}).apply(HOME).apply(GAMES);
		const submenu = GAMES.append('ul', ['style*']);
		new Style({
			listStyleType: 'none',
			display: 'none',
			flexDirection: 'column',
			position: 'absolute',
			zIndex: '1',
			width: '150px',
			padding: '0',
			margin: '0 0 0 -2px',
			background: document.palette.back,
		}).apply(submenu);
		GAMES.on('mouseover touchstart hover', () => {
			submenu.style.display = 'flex';
		}).on('mouseout touchleave touchcancel', () => {
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
		unblock();
		nav.use();
	}, document.text.home.title);
	
	const othello = new HTMLDocument(body => {
		block();
		nav.use();
		const restart = body.append('button', ['style*']).write('RESTART GAME').on('click', () => {
			reset();
		});
		if (localStorage.getItem('othello') == null) {
			reset();
		}
		const box = body.append('div', ['style*']);
		new Style({
			flex: 'auto',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
		}).apply(box);
		const board = box.append('div', ['style*']);
		new Style({
			display: 'grid',
			grid: 'repeat(8, 11%) / repeat(8, 11%)',
			placeItems: 'stretch',
			placeContent: 'space-evenly',
			background: document.palette.dark,
		}).apply(board);
		const squares = [];
		for (let [i, j] = [0, 0]; i < 8; (() => {
			j++;
			if (j === 8) {
				j = 0;
				i++;
			}
		})()) {
			squares[i] ? () => false : (() => {
				squares[i] = [];
			})();
			squares[i][j] = board.append('div', ['style*']);
			squares[i][j].value = -1;
			squares[i][j].set = function (value) {
				this.value = value;
				this.write(fonts[value]);
			}
		}
		const fonts = {
			'-1': '',
			0: '\u26ab',
			1: '\u26aa',
		}
		const data = JSON.parse(localStorage.getItem('othello'));
		data.map((line, i) => {
			line.map((value, j) => {
				squares[i][j].set(value);
			});
		});
		
		box.resize = function () {
			const rect = box.HTMLObject.getBoundingClientRect();
			const length = Math.min(rect.width, rect.height);
			new Style({
				width: length + 'px',
				height: length + 'px',
			}).apply(board);
			squares.map((line, i) => {
				line.map((square, j) => {
					new Style({
						gridArea: (i + 1) + '/' + (j + 1),
						background: document.palette.light,
						cursor: 'default',
						textAlign: 'center',
						verticalAlign: 'middle',
						fontSize: length / 16 + 'px',
					}).apply(squares[i][j]);
				});
			});
		};
		box.resize();
		window.on('resize', box.resize);
		
		function start() {
		};
		
		function reset() {
			const data = new Array(8);
			for (let i = 0; i < data.length; i++) {
				data[i] = new Array(8).fill(-1);
			}
			data[3][3] = 0;
			data[4][4] = 0;
			data[3][4] = 1;
			data[4][3] = 1;
			localStorage.setItem('othello', JSON.stringify(data));
			start();
		};
	}, document.text.othello.title);
	
	load(home);
	
	function block() {
		document.body.oncontextmenu = () => false;
		document.body.onselectstart = () => false;
		document.body.ondragstart = () => false;
	}
	
	function unblock() {
		document.body.oncontextmenu = () => true;
		document.body.onselectstart = () => true;
		document.body.ondragstart = () => true;
	}
	
})();