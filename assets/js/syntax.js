document.addEventListener("DOMContentLoaded", function loaded() {
	var pres = document.querySelectorAll("pre, code");
	[].forEach.call(pres, function each(pre) {
		hljs.highlightBlock(pre);
	});
});
