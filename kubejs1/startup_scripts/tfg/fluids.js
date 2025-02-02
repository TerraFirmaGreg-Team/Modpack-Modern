const registerTFGFluids = (event) => {
	
	event.create('tfg:nether_slurry')
		.thickTexture(0x6b281b)
		.bucketColor(0x6b281b)
		.temperature(1000)
		.luminosity(7)
		.noBlock()
		
	event.create('tfg:enriched_nether_slurry')
		.thickTexture(0x99594d)
		.bucketColor(0x99594d)
		.temperature(1000)
		.luminosity(7)
		.noBlock()
		
	event.create('tfg:ender_slurry')
		.thickTexture(0x1b5c51)
		.bucketColor(0x1b5c51)
		.luminosity(2)
		.noBlock()
		
	event.create('tfg:enriched_ender_slurry')
		.thickTexture(0x3a9178)
		.bucketColor(0x3a9178)
		.luminosity(2)
		.noBlock()
}