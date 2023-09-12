document.palette = {
	background: '#FFE0E0',
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

document.text = {
	load: {
		title: 'LL - loading',
	},
	menu: {
		HOME: {
			button: 'HOME',
		},
		GAMES: {
			button: 'GAMES',
		}
	},
	home: {
		title: 'LL',
	},
	othello: {
		title: 'LL - Othello',
	},
};

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

function load(page) {
	new HTMLDocument((body) => {
		navigation.use();
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

const navigation = new HTMLFragment(navigation => {
	const box = navigation.append('div', ['style*']);
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
	navigation.use();
}, document.text.home.title);

const othello = new HTMLDocument(body => {
	block();
	navigation.use();
	const restart = body.append('button', ['style*']).write('RESTART GAME').on('click', () => {
		reset();
	});
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
			this.clear().write(fonts[value]);
		}
		new Style({
			gridArea: (i + 1) + '/' + (j + 1),
			background: document.palette.light,
			cursor: 'default',
			textAlign: 'center',
		}).apply(squares[i][j]);
	}
	const fonts = {
		'-1': '',
		0: '\u26ab',
		1: '\u26aa',
	}
	
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
					fontSize: length * 11 / 125 - 4 + 'px',
				}).apply(squares[i][j]);
			});
		});
	};
	box.resize();
	window.on('resize', box.resize);
	
	start();
	
	function start() {
		if (localStorage.getItem('othello') === null)
			reset();
		const data = JSON.parse(localStorage.getItem('othello'));
		for (let i = 0; i < 8; i++)
			data[i].map((value, j) => {
				squares[i][j].set(value);
			});
		let {
			moves,
			turn,
			passCount,
			border,
		} = data;
		(async function () {
			while (moves < 60) {
				let done = false;
				let playable = false;
				let active = false;
				const possibleMoves = {};
				for (let square of border) {
					const [a, b] = square;
					const reversible = [];
					for (let [i, j] = [-1, -1]; i < 2; (() => {
						j++;
						if (j === 2) {
							j = -1;
							i++;
						}
					})()) {
						let [x, y] = [a, b];
						x += i;
						y += j;
						if (-1 < x < 8 && -1 < y < 8) {
							const newReversible = [];
							if (squares[x][y].value === (turn + 1) % 2) {
								let check = false;
								while (-1 < x < 8 && -1 < y < 8 && squares[x][y].value !== -1) {
									if (squares[x][y].value === turn) {
										if (check)
											active = true;
										break;
									} else {
										newReversible.push([x, y]);
										x += i;
										y += j;
										check = true;
									}
								}
							}
							if (active)
								reversible.push(...newReversible);
						}
					}
					possibleMoves[square] = reversible;
					if (active) {
						playable = true;
						squares[a][b].on('click', function () {
							done = true;
							for (let square of border)
								squares[square[0]][square[1]].on('click', () => false);
							border.splice(border.findIndex(square => (square[0] === a && square[1] === b)), 1);
							squares[a][b].set(turn);
							possibleMoves[[a, b]].map(square => {
								squares[square[0]][square[1]].set(turn);
							});
							for (let [i, j] = [-1, -1]; i < 2; (() => {
								j++;
								if (j === 2) {
									j = -1;
									i++;
								}
							})()) {
								const [x, y] = [a + i, b + j];
								if (-1 < x < 8 && -1 < y < 8)
									if (squares[x][y].value === -1)
										if (border.findIndex(square => (square[0] === x && square[1] === y)) === -1)
											border.push([x, y]);
							}
						}, 'once');
						active = false;
					}
				}
				if (playable) {
					while (!done)
						await new Promise(src => setTimeout(src, 1));
					turn++;
					turn %= 2;
					moves++;
					passCount = 0;
				} else {
					turn++;
					turn %= 2;
					passCount++;
					await new Promise(src => setTimeout(src, 200));
					alert('No possible moves - PASS - ' + (turn === 0 ? 'black' : 'white') + '\'s turn');
					if (passCount === 2)
						break;
				}
			}
			await new Promise(src => setTimeout(src, 200));
			let black = 0;
			let white = 0;
			for (let [i, j] = [0, 0]; i < 8; (() => {
				j++;
				if (j === 8) {
					j = 0;
					i++;
				}
			})())
				if (squares[i , j].value === 0)
					black++;
				else if (squares[i, j].value === 1)
					white++;
			if (black > white)
				alert('Black wins ' + black + ' - ' + white);
			else if (black < white)
				alert('White wins ' + white + ' - ' + black);
			else
				alert('Draw ' + black + ' - ' + white);
		})();
	};
	
	function reset() {
		const data = {};
		for (let i = 0; i < 8; i++)
			data[i] = new Array(8).fill(-1);
		data[3][3] = 0;
		data[4][4] = 0;
		data[3][4] = 1;
		data[4][3] = 1;
		data.moves = 0;
		data.turn = 0;
		data.passCount = 0;
		data.border = [[2, 2], [2, 3], [2, 4], [2, 5], [3, 2], [3, 5], [4, 2], [4, 5], [5, 2], [5, 3], [5, 4], [5, 5]];
		localStorage.setItem('othello', JSON.stringify(data));
		start();
	};
}, document.text.othello.title);

load(home);