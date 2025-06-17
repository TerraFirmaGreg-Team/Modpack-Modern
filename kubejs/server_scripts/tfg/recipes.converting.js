// priority: 0

function registerTFGConvertingRecipes(event) {

	event.shapeless("afc:tree_tap", "treetap:tap")
	event.shapeless("tfcea:refrigerator", "tfg:mv_food_refrigerator")

	event.shapeless('greate:steel_cogwheel', 'create:cogwheel')
	event.shapeless('greate:large_steel_cogwheel', 'create:large_cogwheel')
	event.shapeless('greate:steel_shaft', 'create:shaft')
	event.shapeless('greate:steel_crushing_wheel', 'create:crushing_wheel')
	event.shapeless('greate:steel_encased_fan', 'create:encased_fan')
	event.shapeless('greate:steel_gearbox', 'create:gearbox')
	event.shapeless('greate:steel_mechanical_mixer', 'create:mechanical_mixer')
	event.shapeless('greate:steel_mechanical_saw', 'create:mechanical_saw')
	event.shapeless('greate:steel_mechanical_pump', 'create:mechanical_pump')
	event.shapeless('greate:steel_vertical_gearbox', 'create:vertical_gearbox')
	event.shapeless('greate:rubber_belt_connector', 'create:belt_connector')

	event.shapeless('create:zinc_ingot', 'gtceu:zinc_ingot')
	event.shapeless('create:brass_ingot', 'gtceu:brass_ingot')
	event.shapeless('vintageimprovements:vanadium_ingot', 'gtceu:vanadium_ingot')
	event.shapeless('tfc:metal/ingot/black_steel', 'gtceu:black_steel_ingot')
	event.shapeless('tfc:metal/ingot/red_steel', 'gtceu:red_steel_ingot')
	event.shapeless('tfc:metal/ingot/blue_steel', 'gtceu:blue_steel_ingot')

	event.shapeless('tfc:metal/double_ingot/cast_iron', 'gtceu:iron_double_ingot')
	event.shapeless('tfc:metal/double_ingot/black_steel', 'gtceu:black_steel_double_ingot')
	event.shapeless('tfc:metal/double_ingot/red_steel', 'gtceu:red_steel_double_ingot')
	event.shapeless('tfc:metal/double_ingot/blue_steel', 'gtceu:blue_steel_double_ingot')

	event.shapeless('create:zinc_nugget', 'gtceu:zinc_nugget')
	event.shapeless('create:brass_nugget', 'gtceu:brass_nugget')
	event.shapeless('create:copper_nugget', 'gtceu:copper_nugget')
	event.shapeless('vintageimprovements:vanadium_nugget', 'gtceu:vanadium_nugget')

	event.shapeless('create:copper_sheet', 'gtceu:copper_plate')
	event.shapeless('create:brass_sheet', 'gtceu:brass_plate')
	event.shapeless('create:golden_sheet', 'gtceu:gold_plate')
	event.shapeless('vintageimprovements:cast_iron_sheet', 'gtceu:iron_plate')
	event.shapeless('vintageimprovements:cobalt_sheet', 'gtceu:cobalt_plate')
	event.shapeless('vintageimprovements:rose_gold_sheet', 'gtceu:rose_gold_plate')
	event.shapeless('vintageimprovements:aluminum_sheet', 'gtceu:aluminium_plate')
	event.shapeless('vintageimprovements:invar_sheet', 'gtceu:invar_plate')
	event.shapeless('vintageimprovements:lead_sheet', 'gtceu:lead_plate')
	event.shapeless('vintageimprovements:nickel_sheet', 'gtceu:nickel_plate')
	event.shapeless('vintageimprovements:osmium_sheet', 'gtceu:osmium_plate')
	event.shapeless('vintageimprovements:palladium_sheet', 'gtceu:palladium_plate')
	event.shapeless('vintageimprovements:platinum_sheet', 'gtceu:platinum_plate')
	event.shapeless('vintageimprovements:rhodium_sheet', 'gtceu:rhodium_plate')
	event.shapeless('vintageimprovements:silver_sheet', 'gtceu:silver_plate')
	event.shapeless('vintageimprovements:vanadium_sheet', 'gtceu:vanadium_plate')
	event.shapeless('vintageimprovements:zinc_sheet', 'gtceu:zinc_plate')

	event.shapeless('vintageimprovements:vanadium_block', 'gtceu:vanadium_block')
	event.shapeless('create:zinc_block', 'gtceu:zinc_block')
	event.shapeless('create:brass_block', 'gtceu:brass_block')

	event.shapeless('create:crushed_raw_gold', 'gtceu:gold_purified_ore')
	event.shapeless('create:crushed_raw_copper', 'gtceu:copper_purified_ore')
	event.shapeless('create:crushed_raw_zinc', 'gtceu:zinc_purified_ore')
	event.shapeless('create:crushed_raw_silver', 'gtceu:silver_purified_ore')
	event.shapeless('create:crushed_raw_tin', 'gtceu:tin_purified_ore')
	event.shapeless('create:crushed_raw_lead', 'gtceu:lead_purified_ore')


	event.shapeless('tfc:ore/rich_native_copper', 'gtceu:rich_raw_copper')
	event.shapeless('tfc:ore/normal_native_copper', 'minecraft:raw_copper')
	event.shapeless('tfc:ore/poor_native_copper', 'gtceu:poor_raw_copper')

	event.shapeless('tfc:ore/rich_native_gold', 'gtceu:rich_raw_gold')
	event.shapeless('tfc:ore/normal_native_gold', 'minecraft:raw_gold')
	event.shapeless('tfc:ore/poor_native_gold', 'gtceu:poor_raw_gold')

	event.shapeless('tfc:ore/rich_tetrahedrite', 'gtceu:rich_raw_tetrahedrite')
	event.shapeless('tfc:ore/normal_tetrahedrite', 'gtceu:raw_tetrahedrite')
	event.shapeless('tfc:ore/poor_tetrahedrite', 'gtceu:poor_raw_tetrahedrite')

	event.shapeless('tfc:ore/rich_malachite', 'gtceu:rich_raw_malachite')
	event.shapeless('tfc:ore/normal_malachite', 'gtceu:raw_malachite')
	event.shapeless('tfc:ore/poor_malachite', 'gtceu:poor_raw_malachite')

	event.shapeless('tfc:ore/rich_hematite', 'gtceu:rich_raw_hematite')
	event.shapeless('tfc:ore/normal_hematite', 'gtceu:raw_hematite')
	event.shapeless('tfc:ore/poor_hematite', 'gtceu:poor_raw_hematite')

	event.shapeless('tfc:ore/rich_cassiterite', 'gtceu:rich_raw_cassiterite')
	event.shapeless('tfc:ore/normal_cassiterite', 'gtceu:raw_cassiterite')
	event.shapeless('tfc:ore/poor_cassiterite', 'gtceu:poor_raw_cassiterite')

	event.shapeless('tfc:ore/rich_bismuthinite', 'gtceu:rich_raw_bismuth')
	event.shapeless('tfc:ore/normal_bismuthinite', 'gtceu:raw_bismuth')
	event.shapeless('tfc:ore/poor_bismuthinite', 'gtceu:poor_raw_bismuth')

	event.shapeless('tfc:ore/rich_magnetite', 'gtceu:rich_raw_magnetite')
	event.shapeless('tfc:ore/normal_magnetite', 'gtceu:raw_magnetite')
	event.shapeless('tfc:ore/poor_magnetite', 'gtceu:poor_raw_magnetite')

	event.shapeless('tfc:ore/rich_limonite', 'gtceu:rich_raw_yellow_limonite')
	event.shapeless('tfc:ore/normal_limonite', 'gtceu:raw_yellow_limonite')
	event.shapeless('tfc:ore/poor_limonite', 'gtceu:poor_raw_yellow_limonite')

	event.shapeless('tfc:ore/rich_garnierite', 'gtceu:rich_raw_garnierite')
	event.shapeless('tfc:ore/normal_garnierite', 'gtceu:raw_garnierite')
	event.shapeless('tfc:ore/poor_garnierite', 'gtceu:poor_raw_garnierite')

	event.shapeless('tfc:ore/rich_native_silver', 'gtceu:rich_raw_silver')
	event.shapeless('tfc:ore/normal_native_silver', 'gtceu:raw_silver')
	event.shapeless('tfc:ore/poor_native_silver', 'gtceu:poor_raw_silver')

	event.shapeless('tfc:ore/rich_sphalerite', 'gtceu:rich_raw_sphalerite')
	event.shapeless('tfc:ore/normal_sphalerite', 'gtceu:raw_sphalerite')
	event.shapeless('tfc:ore/poor_sphalerite', 'gtceu:poor_raw_sphalerite')
}