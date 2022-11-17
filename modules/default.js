import {html, body} from './HTMLelement.js';

function setDimension() {
    html.setStyle('width',(0.98*window.innerWidth)+'px');
    html.setStyle('height',(0.98*window.innerHeight)+'px');
    html.setStyle('padding','0');
    html.setStyle('border','0');
    html.setStyle('margin','0');
    body.setStyle('padding','1%');
    body.setStyle('border','0');
    body.setStyle('margin','0');
}

setDimension();
window.addEventListener('resize',setDimension);
