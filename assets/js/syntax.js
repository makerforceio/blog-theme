(function () {
    var i = setInterval(function testLoaded() {
        if (hljs && document.readyState === "complete") {
            clearInterval(i);
            highlight();
        }
    }, 10);
    function highlight() {
    	var blocks = document.querySelectorAll('code');
    	[].forEach.call(blocks, function each(block) {
    		var languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i;
    		var classes = block.className + ' ';
    		classes += block.parentNode ? block.parentNode.className : '';
    		var match = languagePrefixRe.exec(classes);
    
    		if (match && !hljs.getLanguage(match[1])) {
    			var head = document.head;
    			var script = document.createElement('script');
    			script.src = '/assets/js/highlight/languages/' + match[1] + '.min.js';
    			script.addEventListener('load', function canHighlight() {
    				hljs.highlightBlock(block);
    			});
    			head.appendChild(script);
    			return;
    		}
    
    		hljs.highlightBlock(block);
    	});
    }
})();