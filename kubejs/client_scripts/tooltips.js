ItemEvents.tooltip(event => {
    event.addAdvanced(['tfc:red_kaolin_clay','tfc:pink_kaolin_clay','tfc:white_kaolin_clay','gtceu:brass_block'], (item, advanced, text) => {
        text.add(1, [text.of('Used in glassblowing as a replacement for Brass Plated Blocks')])
    })
    event.addAdvanced(['gtceu:lv_macerator','gtceu:mv_macerator', 'gtceu:hp_steam_macerator'], (item, advanced, text) => {
        text.add(1, [text.of('Only outputs the first slot shown in EMI/JEI until HV.')])
    })
    event.addAdvanced(['minecraft:name_tag'], (item, advanced, text) => {
        text.add(1, [text.of('Used on a Scribing Table along with an item to name it, or with black dye to name the tag.')])
    })
    event.addAdvanced(['gtceu:greenhouse'], (item, advanced, text) => {
        text.add(1, [text.of('Currently, due to some errors in GTCEu regarding forgeCapacities, outputs rotten food.')])
    })
    event.addAdvanced(['toolbelt:belt'], (item, advanced, text) => {
        text.add(1, [text.of('Press the §o§6Swap Tool§r keybind to open the radial menu.')]),
        text.add(2, [text.of(`You can also right click with it in hand to add or remove tools.`)])
        text.add(3, [text.of(`§cDo not dye this or you won't be able to upgrade.`)])
    })
    event.addAdvanced(['toolbelt:pouch'], (item, advanced, text) => {
        text.add(1, [text.of('Used to upgrade your toolbelt to add more slots')]),
        text.add(2, [text.of(`Can't be used with §cd§ey§ae§9d §rbelts or belts that have tools inside.`)])
    })
    event.addAdvanced(['firmalife:bucket/yeast_starter'], (item, advanced, text) => {
        text.add(1, [text.of('Created with dried fruit')])
    })
	event.addAdvanced(['firmalife:beehive'], (item, advanced, text) => {
        text.add(1, [text.of('Needs to be filled with empty frames and surrounded by flowers to attract bees.')])
    })
	event.addAdvanced(['gtceu:nether_dome'], (item, advanced, text) => {
		text.add(1, text.of('Artificial enviroment to simulate the Nether.')),
		text.add(2, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})
	event.addAdvanced(['gtceu:end_dome'], (item, advanced, text) => {
		text.add(1, text.of('Artificial enviroment to simulate the End.')),
		text.add(2, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})
})
