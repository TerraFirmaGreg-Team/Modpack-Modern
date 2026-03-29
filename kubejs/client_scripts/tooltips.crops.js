"use strict";

/**
 * @param {Internal.ItemTooltipEventJS} event 
 */
const registerCropTooltips = (event) => {

	// Load enum classes because I avoid manual labor :)
	const $Crop = Java.loadClass('net.dries007.tfc.common.blocks.crop.Crop');
	const $SpreadingBush = Java.loadClass('net.dries007.tfc.common.blocks.plant.fruit.FruitBlocks$SpreadingBush');
	const $StationaryBush = Java.loadClass('net.dries007.tfc.common.blocks.plant.fruit.FruitBlocks$StationaryBush');
	const $FruitTree = Java.loadClass('net.dries007.tfc.common.blocks.plant.fruit.FruitBlocks$Tree');
	const $Lifecycle = Java.loadClass('net.dries007.tfc.common.blocks.plant.fruit.Lifecycle');
	const $ClimateRanges = Java.loadClass('net.dries007.tfc.util.climate.ClimateRanges');
	const $Month = Java.loadClass('net.dries007.tfc.util.calendar.Month');
	const $MonthStyle = Java.loadClass('net.dries007.tfc.util.calendar.Month$Style');
	const $FLFruitTree = Java.loadClass('com.eerussianguy.firmalife.common.blocks.plant.FLFruitBlocks$Tree');
	const $FLStationaryBush = Java.loadClass('com.eerussianguy.firmalife.common.blocks.plant.FLFruitBlocks$StationaryBush');
	const $FLClimateRanges = Java.loadClass('com.eerussianguy.firmalife.common.util.FLClimateRanges');
	const $TFGFruitTree = Java.loadClass('su.terrafirmagreg.core.common.data.TFGFruitTree$FruitTreeType');

	//#region Helper Functions.
	// =======================================================================================

	/**
	 * Gets the fruiting months from a lifecycle array (12 entries, Jan-Dec).
	 * @param {$Lifecycle[]} stages - Array of 12 Lifecycle values.
	 * @returns {string[]} - Array of month translation keys where the plant is fruiting.
	 */
	function getFruitingMonths(stages) {
		let months = [];
		let allMonths = $Month.values();
		for (let i = 0; i < stages.length; i++) {
			if (stages[i].name() === 'FRUITING') {
				months.push(allMonths[i].getTranslationKey($MonthStyle.LONG_MONTH));
			};
		};
		return months;
	};

	/** Gets a private field value from an object instance.*/
	function getField(obj, fieldName) {
		let field = obj.getClass().getDeclaredField(fieldName);
		field.setAccessible(true);
		return field.get(obj);
	};

	// Cant access lifecycle stages for cranberry and bananas directly.
	const CRANBERRY_STAGES = [$Lifecycle.DORMANT, $Lifecycle.DORMANT, $Lifecycle.DORMANT, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.FLOWERING, $Lifecycle.FLOWERING, $Lifecycle.FRUITING, $Lifecycle.DORMANT, $Lifecycle.DORMANT];
	const BANANA_STAGES = [$Lifecycle.DORMANT, $Lifecycle.DORMANT, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.HEALTHY, $Lifecycle.FLOWERING, $Lifecycle.FLOWERING, $Lifecycle.FRUITING, $Lifecycle.DORMANT, $Lifecycle.DORMANT, $Lifecycle.DORMANT];

	/**
	 * @type {Record<string, string>} dimensionNames
	 * A mapping of dimension IDs to their translation keys.
	 */
	const dimensionNames = {
		'minecraft:overworld': 'dimension.minecraft.overworld',
		'minecraft:the_nether': 'dimension.minecraft.the_nether',
		'ad_astra:mars': 'dimension.ad_astra.mars',
		'ad_astra:venus': 'dimension.ad_astra.venus'
	};
	/**
	 * @type {Record<string, string>} fertilizerNames
	 * A mapping of fertilizer types to their translation keys.
	 */
	const fertilizerNames = {
		'NITROGEN': 'tfg.tooltip.fertilizer.nitrogen',
		'POTASSIUM': 'tfg.tooltip.fertilizer.potassium',
		'PHOSPHOROUS': 'tfg.tooltip.fertilizer.phosphorus'
	};
	/**
	 * @type {Record<string, string>} cropTraits
	 * A mapping of crop traits to their info translation keys.
	 */
	const cropTraits = {
		'rice': 'tfg.tooltip.crop.flooded',
		'green_bean': 'tfg.tooltip.crop.stick',
		'tomato': 'tfg.tooltip.crop.stick'
	};

	/**
	 * 
	 * @param {Internal.ItemTooltipEventJS} event
	 * @param {Internal.ItemStackJS} item - The item the tooltip is being applied to.
	 * @param {number|null} minHydration - The minimum hydration level for the plant.
	 * @param {number|null} maxHydration - The maximum hydration level for the plant.
	 * @param {number|null} minTemp - The minimum temperature for the plant.
	 * @param {number|null} maxTemp - The maximum temperature for the plant.
	 * @param {'NITROGEN'|'POTASSIUM'|'PHOSPHOROUS'|null} fertilizer - The type of fertilizer used by the plant.
	 * @param {'minecraft:overworld'|'minecraft:the_nether'|'ad_astra:mars'|'ad_astra:venus'|null} dimension - The dimension the plant comes from.
	 * @param {string[]|null} fruitingMonths - Array of month translation keys when the plant fruits, or null.
	 * @param {string[]|null} moreInfo - Additional info lines to add to the tooltip, or null.
	 */
	function plantTooltip(event, item, minHydration, maxHydration, minTemp, maxTemp, fertilizer, dimension, fruitingMonths, moreInfo) {

		if (!item) {
			throw new Error('Item ID is required for plant tooltip generation.')
		};

		event.addAdvanced([item], (_item, _advanced, text) => {
			let idx = 1;

			if (!event.isShift()) {
				text.add(1, Text.translate("tfg.tooltip.shift_hint").color('gold'))
			} else {
				if ((minHydration !== null && maxHydration !== null) && (minHydration !== undefined && maxHydration !== undefined)) {
					text.add(idx++, Text.translate('tfg.tooltip.crop.hydration').color('gray').append(Text.ofString(`${minHydration}% - ${maxHydration}%`).color('blue')));
				};
				if ((minTemp !== null && maxTemp !== null) && (minTemp !== undefined && maxTemp !== undefined) ) {
					text.add(idx++, Text.translate('tfg.tooltip.crop.temperature').color('gray').append(Text.ofString(`${minTemp}°C - ${maxTemp}°C`).color('dark_red')));
				};
				if (fertilizer) {
					text.add(idx++, Text.translate('tfg.tooltip.crop.fertilizer').color('gray').append(Text.translate(fertilizer)));
				};
				if (dimension) {
					text.add(idx++, Text.translate('tfg.tooltip.crop.dimension').color('gray').append(Text.translate(dimension).color('dark_green')));
				};
				if (fruitingMonths && fruitingMonths.length > 0) {
					let monthText = Text.translate('tfg.tooltip.crop.fruiting_months').color('gray');
					for (let m = 0; m < fruitingMonths.length; m++) {
						if (m > 0) monthText = monthText.append(Text.ofString(', ').color('gray'));
						monthText = monthText.append(Text.translate(fruitingMonths[m]).color('yellow'));
					}
					text.add(idx++, monthText);
				};
				if (moreInfo) {
					text.add(idx++, Text.translate(moreInfo));
				};
			};
		});
	};

	//#region Custom Crops
	// =======================================================================================

	global.CROP_CLIMATE_DATA.forEach((crop) => {

		if (!crop.genTooltip) return;

		if (crop.id.includes('fruit_tree')) {
			let entry = $TFGFruitTree.valueOf(crop.id.split('/').pop().toUpperCase());
			let name = entry.getSerializedName();
			let stages = entry.getStages();
			let dimension = entry.getDimension().toString();
			let resolvedDimension = dimensionNames[dimension] || dimension;

			plantTooltip(event, `tfg:fruit_trees/${name}_sapling`,
				crop.minHydration, crop.maxHydration, crop.minTemp, crop.maxTemp,
				null, resolvedDimension, getFruitingMonths(stages), crop.moreInfo
			);
		} else {
			const resolvedDimension = dimensionNames[crop.dimension] || crop.dimension || undefined;
			const resolvedFertilizer = fertilizerNames[crop.fertilizer] || undefined;

			plantTooltip(event, crop.seed, crop.minHydration, crop.maxHydration, crop.minTemp, crop.maxTemp, resolvedFertilizer, resolvedDimension, null, crop.moreInfo);
		}

	});

	//#endregion
	//#region TFC Crops
	// =======================================================================================

	/** 
	 * Registers crop tooltips for all TFC crops by iterating over the Crop enum and extracting climate and nutrient data.
	 */
	const allCrops = $Crop.values();
	for (let i = 0; i < allCrops.length; i++) {
		let tfcCrop = allCrops[i];
		let name = tfcCrop.getSerializedName();
		let seedId = `tfc:seeds/${name}`;

		let nutrient = tfcCrop.getPrimaryNutrient().name();
		let resolvedNutrient = fertilizerNames[nutrient] || undefined;

		let climateRange = tfcCrop.getClimateRange().get();
		let minHydration = climateRange.getMinHydration(false);
		let maxHydration = climateRange.getMaxHydration(false);
		let minTemp = climateRange.getMinTemperature(false);
		let maxTemp = climateRange.getMaxTemperature(false);

		plantTooltip(event, seedId, minHydration, maxHydration, minTemp, maxTemp, resolvedNutrient, dimensionNames['minecraft:overworld'], null, cropTraits[name] || null);
	};

	//#endregion
	//#region Fruits
	// =======================================================================================

	/**
	 * Registers fruit tooltips for an array of enum values with climate ranges and lifecycle stages.
	 * @param {Object[]} values - Enum values array.
	 * @param {Object} climateMap - ClimateRanges map.
	 * @param {function} idFn - Function name returning the item ID.
	 */
	function registerFruitTooltips(values, climateMap, idFn) {
		for (let i = 0; i < values.length; i++) {
			let entry = values[i];
			let name = (entry.getSerializedName || entry.name).call(entry).toLowerCase();
			let itemId = idFn(name);
			let climateRange = climateMap.get(entry).get();
			let stages = getField(entry, 'stages');
			plantTooltip(event, itemId,
				climateRange.getMinHydration(false), climateRange.getMaxHydration(false),
				climateRange.getMinTemperature(false), climateRange.getMaxTemperature(false),
				null, dimensionNames['minecraft:overworld'], getFruitingMonths(stages));
		};
	};

	// TFC Fruits.
	registerFruitTooltips($SpreadingBush.values(), $ClimateRanges.SPREADING_BUSHES, (n) => { return `tfc:plant/${n}_bush`; });
	registerFruitTooltips($StationaryBush.values(), $ClimateRanges.STATIONARY_BUSHES, (n) => { return `tfc:plant/${n}_bush`; });
	registerFruitTooltips($FruitTree.values(), $ClimateRanges.FRUIT_TREES, (n) => { return `tfc:plant/${n}_sapling`; });

	// FirmaLife Fruits.
	registerFruitTooltips($FLFruitTree.values(), $FLClimateRanges.FRUIT_TREES, (n) => { return `firmalife:plant/${n}_sapling`; });
	registerFruitTooltips($FLStationaryBush.values(), $FLClimateRanges.STATIONARY_BUSHES, (n) => { return `firmalife:plant/${n}_bush`; });

	// Cranberry Exception.
	let cranberryRange = $ClimateRanges.CRANBERRY_BUSH.get();
	plantTooltip(event, 'tfc:plant/cranberry_bush', null, null,
		cranberryRange.getMinTemperature(false), cranberryRange.getMaxTemperature(false),
		null, dimensionNames['minecraft:overworld'], getFruitingMonths(CRANBERRY_STAGES), 'tfg.tooltip.crop.flooded'
	);

	// Banana Exception.
	let bananaRange = $ClimateRanges.BANANA_PLANT.get();
	plantTooltip(event, 'tfc:plant/banana_sapling',
		bananaRange.getMinHydration(false), bananaRange.getMaxHydration(false),
		bananaRange.getMinTemperature(false), bananaRange.getMaxTemperature(false),
		null, dimensionNames['minecraft:overworld'], getFruitingMonths(BANANA_STAGES)
	);

	// Grape Exceptions.
	let grapeRange = $FLClimateRanges.GRAPES.get();
	let grapeSeeds = ['firmalife:seeds/red_grape', 'firmalife:seeds/white_grape'];
	for (let i = 0; i < grapeSeeds.length; i++) {
		plantTooltip(event, grapeSeeds[i],
			grapeRange.getMinHydration(false), grapeRange.getMaxHydration(false),
			grapeRange.getMinTemperature(false), grapeRange.getMaxTemperature(false),
			null, dimensionNames['minecraft:overworld'], null, 'tfg.tooltip.crop.grape_trellis');
	};

	//#endregion
	// Maybe regular tree data can go here one day ;)

};
