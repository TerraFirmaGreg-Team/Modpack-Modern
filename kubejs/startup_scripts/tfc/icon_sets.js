// priority: 0
"use strict";

function registerTFCIconSets(event) {

	event.create('tfc_borax').parent('rough')
	event.create('tfc_gypsum').parent('rough')
	event.create('tfc_graphite').parent('rough')
	event.create('tfc_saltpeter').parent('fine')
	event.create('tfc_sulfur').parent('fine')

	event.create('tfc_amethyst').parent('ruby')
	event.create('tfc_redstone').parent('fine')
	event.create('tfc_diamond').parent('diamond')
	event.create('tfc_emerald').parent('emerald')
	event.create('tfc_lapis').parent('lapis')
	event.create('tfc_opal').parent('opal')
	event.create('tfc_pyrite').parent('bright')
	event.create('tfc_ruby').parent('ruby')
	event.create('tfc_sapphire').parent('gem_horizontal')
	event.create('tfc_topaz').parent('gem_vertical')
	event.create('tfc_realgar').parent('emerald')
		
	event.create('tfc_bismuth').parent('bright')
	event.create('tfc_cassiterite').parent('bright')
	event.create('tfc_garnierite').parent('bright')
	event.create('tfc_hematite').parent('metallic')
	event.create('tfc_limonite').parent('metallic')
	event.create('tfc_magnetite').parent('dull')
	event.create('tfc_malachite').parent('shiny')
	event.create('tfc_copper').parent('bright')
	event.create('tfc_gold').parent('shiny')
	event.create('tfc_silver').parent('shiny')
	event.create('tfc_sphalerite').parent('dull')
	event.create('tfc_tetrahedrite').parent('dull')
	event.create('tfc_chromite').parent('dull')
		
	event.create('nether_quartz').parent('quartz')
}