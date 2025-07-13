// priority: 0

const registerKnightsOfTerraFirmaRecipies = (event) => {
	// FUCK I have to jurry rig a damn replacer for all the
	// stupid ass welding recipies because the generic recipie substiution
	// function isn't capturing any of the welding recipies.

	// THE JAVASCRIPT ENGINE DOESN'T SUPPORT CLASSES ;-;
	// Gotta use the fallback conventions
	// XXX: This class does a TON of heavy lifting to make items with
	//   with confusing mod connections uniform for iterating. It's usually
	//   where bugs are both made and addressed. Look here if there's a problem
	//   with TFK recipies.
	const Item = function(modID, objectName, variant) {
		this.modID = modID;
		this.objectName = objectName;
		this.variant = variant;

		// Generic Items get to use forge's powerful auto-tagging system.
		// This simplifies fixing:
		//   - Gregtech doesn't migrate over all new metal types under it's
		//     mod ID. for ingots and double ingots
		//   - Gregtech renamed TFC Sword Blade to Sword Head :facepalm:
		//   - Gregtech doesn't have naming conventions and constantly has
		//     item names which while patterned don't have itterable ids
		//     across objectName(s)
		//
		if (modID !== "tfc") {
			// TFC is referenced for swap, only use tags when not a TFC direct
			// reference
			switch (this.objectName) {
			case "ingot":
			case "double_ingot":
			case "plate":
			case "double_plate":
			case "sword_head":
			case "knife_head":
			case "rod":
				this.modID = "#forge";
			};
		}

		// KnightsOfTerraFirma inherits it's weapons and behavior from
		// magistuarmory and antiquelegacy, so we need to normalize all the
		// item id tomfoolery here.

		if (modID === "knightsofterrafirma") {
			const antiqueUnique = [
				"iron_thorax",
				"sava_helmet",
				"heddernheim_helmet",
				"iron_niederbieber_helmet"
			];
			if (antiqueUnique.includes(objectName) && variant === "bronze") {
				this.modID = "antiquelegacy"
			}

			const magistuArmorUnique = [
				"halfarmor_helmet",
				"maximilian_boots",
				"knight_boots",
				"minicrown_decoration",
			];
			if (magistuArmorUnique.includes(objectName)) {
				if (variant === "steel")
					this.modID = "magistuarmory";
				
				// Halfarmor helmet is specially named barbute when made of
				// steel for some reason.
				if (objectName === "halfarmor_helmet" && variant === "steel")
					this.objectName = "barbute";
			}

			const magistuCrownUnique = [
				"minicrown_decoration",
				"crown_decoration",
			];
			if (magistuCrownUnique.includes(objectName)) {
				if (variant === "gold")
					this.modID = "magistuarmory";
			}
		}

		if (
			["buckler", "target"].includes(objectName) && 
			(["copper", "bronze", "steel", "wrought_iron"].includes(variant))
		)
		{
			// Wierd that it's just the buckler and targets right?
			// It's because the buckler and target are the only direct-from-weld
			// weapon recipies. All the primary weapon recipies for magistu
			// behave this way otherwise. If the mod changes to require
			// welding the pommel or hilt to the blades in the future, this
			// clause will become more dominant. 
			this.modID = "magistuarmory";
		}
		else if (modID === "antiquelegacy" && variant !== "bronze") {
			this.modID = "knightsofterrafirma";
		}
		else if (modID === "magistuarmory" && !["steel", "gold "].includes(variant)) {
			this.modID = "knightsofterrafirma";
		}
	};
	Item.prototype.asID = function(){
		// DON'T TRANSFORM THIS OBJECT'S DATA FFS
		let modID = this.modID;
		let objectName = this.objectName;
		let variant = this.variant;
		let prefix;
		let tfcGroup;

		switch (objectName) {
			case "ingot":
			case "double_ingot":
			case "sword_head":
			case "sword_blade":
			case "buckler":
			case "target":
			case "javelin_head":
			case "mace_head":
			case "knife_head":
			case "rod":
			case "sheet":
			case "double_sheet":
				tfcGroup = "metal"; break;
		}

		if (modID === "knightsofterrafirma") {
			if (objectName === "halfarmor_helmet_unfinished" && variant === "steel")
				variant = null;
			else if (variant === "wrought_iron")
				variant = "iron";
		}
		else if (modID === "antiquelegacy") {
			if (variant === "bronze" && objectName !== "plate")
				variant = null;
		}
		else if (modID === "magistuarmory") {
			const magisteelNoPrefix = [
				"barbute",
				"halfarmor_helmet", 
				"maximilian_boots",
				"knight_boots",
			];
			const crownNoPrefix = [
				"minicrown_decoration",
				"crown_decoration",
			];

			if (variant === "gold" && crownNoPrefix.includes(objectName))
				variant = null;
			else if (variant === "steel" && magisteelNoPrefix.includes(objectName))
				variant = null;
			else if (variant === "wrought_iron")
				variant = "iron";
		}
		else if (modID === "#forge") {
			// Forge and TFC are smarter than the average modder apparently.
			if (variant == null)
				return modID
				+ ":" + objectName + "s";
			else
				return modID
					+ ":" + objectName + "s"
					+ "/" + variant;
		}
		else if (modID === "tfc") {
			return modID 
				+ ":" + tfcGroup 
				+ "/" + objectName 
				+ "/" + variant;
		}

		
		return modID + ":" + (variant ? variant + "_" : "") + objectName;
	};

	const tfcMetalTypes = [
		"bismuth",
		"tin",
		"zinc",
		"copper",
		"bronze",
		"black_bronze",
		"bismuth_bronze",
		"brass",
		"lead",
		"gold",
		"rose_gold",
		"silver",
		"sterling_silver",
		"platinum",
		"wrought_iron",
		"nickel",
		"pig_iron",
		"steel",
		"black_steel",
		"red_steel",
		"blue_steel",
	];

	const tierFromMetal = (metal_name) => {
		// Source: https://1710-wiki.terrafirmacraft.com/Metals
		switch(metal_name) {
		case "bismuth":
		case "tin":
		case "zinc": return 0;
		case "copper": return 1;
		case "bronze":
		case "black_bronze":
		case "bismuth_bronze":
		case "brass":
		case "lead":
		case "gold":
		case "rose_gold":
		case "silver":
		case "sterling_silver": return 2;
		case "platinum":
		case "wrought_iron": return 3;
		case "nickel":
		case "pig_iron":
		case "steel": return 4;
		case "black_steel": return 5;
		case "red_steel":
		case "blue_steel": return 6;
		default:
			// for instance, if metal is null or other value
			return 0;
		}
	}

	const recastWeldRecipies = (modID, objectName, variants, recipie) => {
		variants.forEach((variant) => {
			let item = new Item(modID, objectName, variant);
			let firstInput, secondInput; 

			if (recipie.firstInput instanceof Function)
				firstInput = recipie.firstInput(item.variant);
			else
				firstInput = recipie.firstInput;

			if (recipie.secondInput instanceof Function)
				secondInput = recipie.secondInput(item.variant);
			else
				secondInput = recipie.secondInput;

			// I may be extremely pissed that I had to write all this code because
			// the generic wouldn't work; but I'm still extremly happy TFC supports
			// datapacks and we can even issue this fix in the first place from
			// kubejs. Very lucky.
			//
			// HOWEVER, KubeJS misreports errors when registering recipies that
			// have ingredients that don't exist within the item registry as
			// the input fields for the definition being empty. I need to fix that
			// at a later date maybe. It may have been fixed by now.
			// XXX: REMOVAL OF ITEM IDs RESULTS IN CATASTROPHIC FAILURE
			//   UNRELATED RECIPIES BECOME EFFECTED
			//event.remove({item: item.asID()});

			// Other dev who worked on this pack introduced this in the tfc scripts
			// And holy damn, it actually fucking works
			// Wiki says I should use "event.custom()", and it doesn't work.
			// no matter what way I try it.
			event.recipes.tfc
				.welding(
					item.asID(),
					firstInput.asID(),
					secondInput.asID(),	
					Math.max(
						variant == null ? 0 : tierFromMetal(variant),
						tierFromMetal(firstInput.variant),
						tierFromMetal(secondInput.variant)
					)
				)
				.id(
					"tfc:welding/" + item.variant + "_" + item.objectName
				);
		});
	};

	const bronzes = tfcMetalTypes.filter((m) => m.endsWith("bronze"));
	recastWeldRecipies("knightsofterrafirma", "segmentata_lower_part", bronzes, {
		firstInput: new Item("gtceu", "plate", "wrought_iron"),
		secondInput: (v) => new Item("antiquelegacy", "plate", v)
	});
	recastWeldRecipies("knightsofterrafirma", "segmentata_upper_part", bronzes, {
		firstInput: new Item("gtceu", "plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "double_ingot", v)
	});	
	recastWeldRecipies("knightsofterrafirma", "musculata_lower_part", bronzes, {
		firstInput: new Item("gtceu", "double_plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "ingot", v)
	});
	recastWeldRecipies("knightsofterrafirma", "musculata_upper_part", bronzes, {
		firstInput: new Item("gtceu", "plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "plate", v)
	});
	recastWeldRecipies("knightsofterrafirma", "iron_thorax", bronzes, {
		firstInput: new Item("gtceu", "double_plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "plate", v),
	});
	recastWeldRecipies("knightsofterrafirma", "sava_helmet", bronzes, {
		firstInput: new Item("gtceu", "double_plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "double_ingot", v),
	});
	recastWeldRecipies("knightsofterrafirma", "heddernheim_helmet", bronzes, {
		firstInput: new Item("gtceu", "double_plate", "wrought_iron"),
		secondInput: (v) => new Item("gtceu", "ingot", v),
	});
	recastWeldRecipies("knightsofterrafirma", "iron_niederbieber_helmet", bronzes, {
		firstInput: new Item("gtceu", "double_plate", "wrought_iron"),
		secondInput: (v) => new Item("antiquelegacy", "plate", v),
	});


	const steels = tfcMetalTypes.filter((m) => m.endsWith("steel"));
	recastWeldRecipies("knightsofterrafirma", "halfarmor_helmet", steels, {
		firstInput: (v) => new Item("knightsofterrafirma", "halfarmor_helmet_unfinished", v),
		secondInput: (v) => new Item("gtceu", "plate", v),
	});
	recastWeldRecipies("knightsofterrafirma", "maximilian_boots", steels, {
		firstInput: (v) => new Item("knightsofterrafirma", "knight_boots", v),
		secondInput: (v) => new Item("gtceu", "rod", v),
	});

	
	const weaponRegex = /(bronze|steel|copper|wrought_iron)/g;
	const weaponMetals = tfcMetalTypes.filter((m) => m.match(weaponRegex));
	recastWeldRecipies("knightsofterrafirma", "estoc_blade", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "sword_head", v),
		secondInput: (v) => new Item("gtceu", "knife_head", v),
	});
	recastWeldRecipies("knightsofterrafirma", "bastard_sword_blade", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "sword_head", v),
		secondInput: (v) => new Item("gtceu", "ingot", v),
	});
	recastWeldRecipies("knightsofterrafirma", "zweihander_blade", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "sword_head", v),
		secondInput: (v) => new Item("gtceu", "sword_head", v),
	});
	recastWeldRecipies("knightsofterrafirma", "heavy_mace_head", weaponMetals, {
		firstInput: (v) => new Item("tfc", "mace_head", v),
		secondInput: (v) => new Item("gtceu", "sword_head", v),
	});
	recastWeldRecipies("knightsofterrafirma", "claymore_blade", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "sword_head", v),
		secondInput: (v) => new Item("gtceu", "double_ingot", v),
	});
	recastWeldRecipies("knightsofterrafirma", "retiarius_head", weaponMetals.slice(1,5), {
		firstInput: (v) => new Item("tfc", "javelin_head", v),
		secondInput: (v) => new Item("tfc", "javelin_head", v),
	});
	recastWeldRecipies("knightsofterrafirma", "buckler", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "double_ingot", v),
		secondInput: (v) => new Item("knightsofterrafirma", "shield_brace", v),
	});
	recastWeldRecipies("knightsofterrafirma", "target", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "plate", v),
		secondInput: (v) => new Item("knightsofterrafirma", "shield_brace", v),
	});
	recastWeldRecipies("knightsofterrafirma", "heavy_war_hammer_head", weaponMetals, {
		firstInput: (v) => new Item("gtceu", "hammer_head", v),
		secondInput: (v) => new Item("gtceu", "double_ingot", v),
	});


	const crownRegex = /(bronze|_steel|copper|gold|silver|brass)/g;
	const crownMetals = tfcMetalTypes.filter((m) => m.match(crownRegex));	
	recastWeldRecipies("knightsofterrafirma", "crown_decoration", crownMetals, {
		firstInput: (v) => new Item("knightsofterrafirma", "minicrown_decoration", v),
		secondInput: new Item("#forge", "exquisite_gem", null),
	});

	
	const translateMaterials = [
		"ingot",
		//"double_ingot",
		// NOTE: all of the above already handled by another script
		"sheet",
		"double_sheet",
		"sword_blade",
		"rod",
	];
	// Translate generic recipies
	translateMaterials.forEach((fromMaterial) => {
		tfcMetalTypes.forEach((metal) => {
			const from = new Item("tfc", fromMaterial, metal);
			// Gregtech replaces TFC sheets with TFG plates
			const toMaterial = fromMaterial.replace("sheet", "plate");
			const to = new Item("gtceu", toMaterial, metal);
			event.replaceInput(
			 { input: from.asID() }, // Arg 1: the filter
			 from.asID(),            // Arg 2: the item to replace
			 to.asID()               // Arg 3: the item to replace it with
			 // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
			);
		});
	});

	// NOTE: Moved to tagging script to hide from recipie viewers instead.
	// XXX: REMOVING ITEM IDs BREAKS SHIT FOR SOME REASON AUGH
	// purgeMagistuVariants.forEach((variant) => {
	// 	purgeMagistuItems.forEach((objectName) => {
	// 		const item = new Item("magistuarmory", objectName, variant);
	// 		event.remove({item: item.asID()});
	// 	});
	// });
};