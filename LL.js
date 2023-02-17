void async function main() {
	try {
		await import("./DevLib/JS(num)/Random.js");
		await import("./DevLib/JS(debug)/Object display.js");
		const XMLElement = await (await import('./DevLib/XML:JS/XMLElement.js')).default();
		const HTMLElement = await (await import('./DevLib/HTML:JS/HTMLElement.js')).default();
		const SVGElement = await (await import('./DevLib/SVG:JS/SVGElement.js')).default();
	} catch (e) {
		alert (e);
	}
}();
