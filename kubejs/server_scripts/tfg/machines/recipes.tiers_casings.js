"use strict";

function registerTFGTierCasingRecipes(event) {

//#region ULV

	// Maldonite Alloy Recipes

	event.recipes.gtceu.mixer('tfg:maldonite_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_dust', 3))
		.circuit(1)
		.duration(20 * 15)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_both_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_gold_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_ingot', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_bismuth_dust')
		.itemInputs(Item.of('minecraft:gold_ingot', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_both_ingot')
		.itemInputs(Item.of('minecraft:gold_ingot', 2), Item.of('gtceu:bismuth_ingot', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

    event.shaped('tfg:casings/machine_casing_maldonite', [
		'ACA',
		'ABA',
		'ADA'
	], {
		A: '#forge:plates/maldonite',
		B: 'gtceu:coke_oven_bricks',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	});

	event.recipes.gtceu.assembler('machine_casing_maldonite')
		.itemInputs('6x #forge:plates/maldonite', 'gtceu:coke_oven_bricks')
		.itemOutputs('tfg:casings/machine_casing_maldonite')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VH[GTValues.LV])
		.addMaterialInfo(true)

	// Blue Steel and Red Steel Shortcut recipes
	/* Ratio issue, I'm not sure it's really doable
	event.recipes.gtceu.mixer('tfg:red_steel_shortcut')
		.itemInputs(Item.of('gtceu:copper_dust', 4), Item.of('gtceu:gold_dust', 4), Item.of('gtceu:zinc_dust', 1), Item.of('gtceu:steel_dust', 2), Item.of('gtceu:black_steel_dust', 4))
		.itemOutputs(Item.of('tfg:red_steel_dust', 3))
		.circuit(4)
		.duration(20 * 15)
		.EUt(GTValues.VHA[GTValues.LV])
	*/

	//#region Steel

	event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_iron' })
	event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_wrought_iron' })

	event.recipes.gtceu.arc_furnace('tfg:steel_from_wrought')
		.itemInputs(Item.of('gtceu:wrought_iron_ingot', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 63))
		.itemOutputs(Item.of('gtceu:steel_ingot', 1))
		.duration(20 * 4.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:steel_from_dust')
		.itemInputs(Item.of('gtceu:steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 63))
		.itemOutputs(Item.of('gtceu:steel_ingot', 1))
		.duration(20 * 4.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:black_steel')
		.itemInputs(Item.of('gtceu:black_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/black_steel', 1))
		.duration(20 * 5.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:red_steel')
		.itemInputs(Item.of('gtceu:red_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/red_steel', 1))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:blue_steel')
		.itemInputs(Item.of('gtceu:blue_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/blue_steel', 1))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LV])

	//#region IV Material

	event.recipes.gtceu.mixer('tfg:ni-cr-al-y')
		.itemInputs(Item.of('gtceu:nickel_dust', 5), Item.of('gtceu:chromium_dust', 2), Item.of('gtceu:aluminium_dust', 1), Item.of('gtceu:yttrium_dust', 1))
		.itemOutputs(Item.of('tfg:ni-cr-al-y_dust', 9))
		.duration(20 * 26)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.mixer('tfg:telluride_tungstensteel')
		.itemInputs(Item.of('gtceu:tungsten_steel_dust', 7), Item.of('gtceu:tellurium_dust', 1), Item.of('gtceu:manganese_dust', 1))
		.itemOutputs(Item.of('tfg:telluride_tungstensteel_dust', 9))
		.duration(20 * 29)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.alloy_smelter('tfg:tungsten_diselenide')
		.itemInputs(Item.of('gtceu:tungsten_steel_dust', 1), Item.of('gtceu:selenium_dust', 2))
		.itemOutputs(Item.of('tfg:tungsten_diselenide_dust', 3))
		.duration(20 * 5030)
		.EUt(GTValues.VA[GTValues.IV])

	event.remove({ output: 'tfg:telluride_tungstensteel_plate' })
	event.remove({ output: 'tfg:double_telluride_tungstensteel_plate' })
    event.remove({ id: 'tfg:rolling/telluride_tungstensteel_plate' })
	
	event.recipes.gtceu.bender('tfg:telluride_tungstensteel_plate')
		.itemInputs(Item.of('tfg:telluride_tungstensteel_ingot', 1), Item.of('tfg:tiny_tungsten_diselenide_dust', 1))
		.itemOutputs(Item.of('tfg:telluride_tungstensteel_plate', 1))
		.duration(20 * 12.5)
		.EUt(GTValues.VA[GTValues.EV])

	//#region Machine Hulls

	// ULV Machine Hull

	event.remove({ id: 'gtceu:shaped/ulv_machine_hull' })
	event.shaped('gtceu:ulv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/maldonite',
		B: '#forge:plates/wrought_iron',
		C: 'gtceu:ulv_machine_casing',
		D: 'gtceu:red_alloy_single_cable',
		E: '#forge:plates/maldonite'
	}).id('tfg:shaped/ulv_machine_hull')

	event.recipes.gtceu.assembler('tfg:ulv_hull_bakelite')
		.itemInputs('gtceu:ulv_machine_casing', '2x #forge:single_cables/red_alloy')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:ulv_machine_hull')
		.duration(25)
		.EUt(16)

	TFGHelpers.registerMaterialInfo('gtceu:ulv_machine_hull',
		[
			TFGHelpers.getMaterial('maldonite'), 4,
			GTMaterials.WroughtIron, 4,
			GTMaterials.RedAlloy, 1
		])

	// LV Machine Hull

	event.remove({ id: 'gtceu:shaped/lv_machine_hull' })
	event.shaped('gtceu:lv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/red_steel',
		B: '#forge:plates/steel',
		C: 'gtceu:lv_machine_casing',
		D: 'gtceu:tin_single_cable',
		E: '#forge:plates/red_steel'
	}).id('tfg:shaped/lv_machine_hull')

	event.recipes.gtceu.assembler('tfg:lv_hull_bakelite')
		.itemInputs('gtceu:lv_machine_casing', '2x #forge:single_cables/tin')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:lv_machine_hull')
		.duration(50)
		.EUt(16)

	TFGHelpers.registerMaterialInfo('gtceu:lv_machine_hull',
		[
			GTMaterials.RedSteel, 4,
			GTMaterials.Steel, 4,
			GTMaterials.Tin, 1
		])

	// MV Machine Hull

	event.remove({ id: 'gtceu:shaped/mv_machine_hull'})
	event.shaped('gtceu:mv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/aluminum',
		B: '#forge:plates/bakelite',
		C: 'gtceu:mv_machine_casing',
		D: 'gtceu:copper_single_cable',
		E: '#forge:plates/blue_steel'
	}).id('tfg:shaped/mv_machine_hull')

	event.remove({ id: 'gtceu:assembler/hull_mv_annealed'})
	event.recipes.gtceu.assembler('tfg:mv_machine_hull')
		.itemInputs('gtceu:mv_machine_casing', '2x gtceu:copper_single_cable')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:mv_machine_hull')
		.duration(20*2.5)
		.EUt(GTValues.VH[GTValues.LV])

	TFGHelpers.registerMaterialInfo('gtceu:mv_machine_hull',
		[
			GTMaterials.BlueSteel, 4,
			GTMaterials.Aluminium, 4,
			GTMaterials.Copper, 1
		])

	// HV Machine Hull

	event.remove({ id: 'gtceu:shaped/hv_machine_hull'})
	event.shaped('gtceu:hv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#forge:plates/polyethylene',
		C: 'gtceu:hv_machine_casing',
		D: 'gtceu:gold_single_cable',
		E: '#forge:plates/platinum'
	}).id('tfg:shaped/hv_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:hv_machine_hull',
		[
			GTMaterials.Platinum, 8,
			GTMaterials.StainlessSteel, 8,
			GTMaterials.Gold, 1
		])

	// EV Machine Hull

	event.remove({ id: 'gtceu:shaped/ev_machine_hull'})
	event.shaped('gtceu:ev_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/titanium',
		B: '#forge:plates/polyethylene',
		C: 'gtceu:ev_machine_casing',
		D: 'gtceu:aluminium_single_cable',
		E: '#forge:plates/palladium'
	}).id('tfg:shaped/ev_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:ev_machine_hull',
		[
			GTMaterials.Palladium, 8,
			GTMaterials.Titanium, 8,
			GTMaterials.Aluminium, 1
		])
	// IV Machine Hull

	event.remove({ id: 'gtceu:shaped/iv_machine_hull'})
	event.shaped('gtceu:iv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/telluride_tungstensteel',
		B: '#forge:plates/polytetrafluoroethylene',
		C: 'gtceu:iv_machine_casing',
		D: 'gtceu:platinum_single_cable',
		E: '#forge:plates/ni-cr-al-y'
	}).id('tfg:shaped/iv_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:iv_machine_hull',
		[
			TFGHelpers.getMaterial('telluride_tungstensteel'), 8,
			TFGHelpers.getMaterial('ni-cr-al-y'), 8,
			GTMaterials.Platinum, 1
		])

	//#region Machine Casings

	modifyMachineCasing(event, 'ulv', 'plates/wrought_iron', 'plates/maldonite')
	modifyMachineCasing(event, 'lv', 'plates/steel', 'plates/red_steel')
	modifyMachineCasing(event, 'mv', 'plates/aluminium', 'plates/blue_steel')
	modifyMachineCasing(event, 'hv', 'double_plates/stainless_steel', 'double_plates/platinum')
	modifyMachineCasing(event, 'ev', 'double_plates/titanium', 'double_plates/palladium')
	modifyMachineCasing(event, 'iv', 'double_plates/telluride_tungstensteel', 'double_plates/ni-cr-al-y', 'tungsten_steel')

	function modifyMachineCasing(event, tier, base, added, original) {
		var originalPlate = `forge:plates/${original || base.split('/')[1]}`
		var basePlate = `#forge:${base}`
		var addedPlate = `#forge:${added}`

		event.remove({ id: `gtceu:shaped/casing_${tier}` })
		event.recipes.gtceu.shaped(`gtceu:${tier}_machine_casing`, [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: basePlate,
			B: addedPlate,
			C: '#forge:tools/wrenches'
		}).addMaterialInfo().id(`tfg:shaped/${tier}_machine_casing`)

		global.modifyRecipe(event, `gtceu:assembler/casing_${tier}`, {
			newId: `tfg:casing_${tier}`,
			removeItemInputs: [originalPlate],
			addItemInputs: [`4x ${basePlate}`, `4x ${addedPlate}`]
		})
	}
}