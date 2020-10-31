'use strict';

document.querySelectorAll('.post.tag-hash-uses-math code').forEach((block) => {
	// Detect language and check if loaded
	const languageDetectRe = /\blang(?:uage)?-([\w-]+)\b/i;
	const match = languageDetectRe.exec(block.className);

	if (!match) {
		return;
	}

	if (match && match[1] !== 'latex') {
		return;
	}

	const mathText = block.innerText;
	const display = block.parentNode.tagName.toLowerCase() === "pre";
	const newBlock = document.createElement(display ? "p" : "span");

	if (display) {
		block = block.parentNode;
	}

	// Strip out parent element, replace with a span or div
	block.replaceWith(newBlock);
	// Render to the final block
	katex.render(mathText, newBlock, {
		throwOnError: false,

		displayMode: display,
	});
});

document.querySelectorAll('.post.tag-hash-uses-math').forEach((block) => {
	renderMathInElement(block, {
		throwOnError: false,

		delimiters: [
			{left: "\\(", right: "\\)", display: false},
			{left: "\\[", right: "\\]", display: true},
		],
	});
});
