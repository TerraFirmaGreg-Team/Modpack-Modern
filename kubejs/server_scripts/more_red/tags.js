// priority: 0
"use strict";

function registerMoreRedItemTags(event) {
	event.add('morered:redstone_devices', [
		'minecraft:comparator',
		'morered:and_2_gate',
		'morered:and_gate',
		'morered:bitwise_and_gate',
		'morered:bitwise_diode',
		'morered:bitwise_not_gate',
		'morered:bitwise_or_gate',
		'morered:bitwise_xnor_gate',
		'morered:bitwise_xor_gate',
		'morered:diode',
		'morered:latch',
		'morered:multiplexer',
		'morered:nand_2_gate',
		'morered:nand_gate',
		'morered:nor_gate',
		'morered:not_gate',
		'morered:or_gate',
		'morered:pulse_gate',
		'morered:xnor_gate',
		'morered:xor_gate',
		'create:powered_latch',
		'create:powered_toggle_latch'
	])
}