// priority: 0
"use strict";

function registerBlockRunnerBlockTags(event) {

	// BlockRunner is only included as a dependency for Roads n Roofs, so things like jetpacks
	// and planes don't go supersonic when just above a road. We don't actually care about
	// BlockRunner's own boost effects

	event.removeAll('blockrunner:slow_blocks')
	event.removeAll('blockrunner:very_slow_blocks')
	event.removeAll('blockrunner:quick_blocks')
	event.removeAll('blockrunner:very_quick_blocks')
	event.removeAll('blockrunner:slightly_slow_blocks')
	event.removeAll('blockrunner:slightly_quick_blocks')
}