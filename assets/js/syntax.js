'use strict';

// TODO: prevent double loading
document.querySelectorAll('pre code').forEach((block) => {
	// Detect language and check if loaded
	const languageDetectRe = /\blang(?:uage)?-([\w-]+)\b/i;
	const match = languageDetectRe.exec(block.className);

	if (match && !hljs.getLanguage(match[1])) {
		// Load language definition
		var script = document.createElement('script');
		script.src = '/assets/js/highlight/languages/' + match[1] + '.min.js';
		script.addEventListener('load', () => {
			hljs.highlightBlock(block);
		});
		document.head.appendChild(script);
		return;
	}

	// Highlight immediately
	hljs.highlightBlock(block);
});
