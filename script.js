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

 
 const menu = body.append('div', null, {
  id: 'menu',
  'style*': null
 });
  const list = menu.append('ul');
  const l1 = list.append('li').write('hello');
  const l2 = list.append('li');
  const lb = l1.append('ul');
  const ll1 = lb.append('li')
  const othello = ll1.append('a', null, {
   href: './othello',
  }).write('Othello');
}, "LL");
main.load();
