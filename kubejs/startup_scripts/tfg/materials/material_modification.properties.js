// priority: 0
"use strict";

function registerTFGPropertyMaterialModification(event) {
	const $DUST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
	const $INGOT_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
	const $BLAST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
	const $ITEM_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties');
	const $FLUID_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties');
	const $HAZARD_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty');
	const $TFGT_MEDICAL_CONDITIONS = Java.loadClass('su.terrafirmagreg.core.common.data.tfgt.TFGTMedicalConditions');


	// Unhiding elements
	GTMaterials.Zirconium.setProperty(PropertyKey.DUST, new $DUST_PROPERTY());
	GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $INGOT_PROPERTY());
	GTMaterials.Zirconium.setProperty(PropertyKey.BLAST, new $BLAST_PROPERTY(4200, $BLAST_PROPERTY.GasTier.MID, GTValues.VA[GTValues.EV], 1300, GTValues.VA[GTValues.HV], 14.7 * 20));

	GTMaterials.Cadmium.setProperty(PropertyKey.INGOT, new $INGOT_PROPERTY());

	// Bismuth item pipe - 1/4 as good as tin
	GTMaterials.Bismuth.setProperty(PropertyKey.ITEM_PIPE, new $ITEM_PIPE_PROPERTY(16384, 0.125));
	// Bis bronze fluid pipe - same stats as bronze
	GTMaterials.BismuthBronze.getProperties().removeProperty(PropertyKey.BLAST);
	GTMaterials.BismuthBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	GTMaterials.BlackBronze.getProperties().removeProperty(PropertyKey.BLAST);
	GTMaterials.BlackBronze.getProperties().removeProperty(PropertyKey.ITEM_PIPE);
	GTMaterials.BlackBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	// Rose Gold & Sterling Silver
	GTMaterials.RoseGold.getProperties().removeProperty(PropertyKey.BLAST);
	GTMaterials.SterlingSilver.getProperties().removeProperty(PropertyKey.BLAST);
	// Red steel fluid pipe - same flow rate as aluminium, bad heat tolerance (same as PE) but can do cryo
	GTMaterials.RedSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(370, 75, true, false, true, false));
	// Blue steel fluid pipe - same flow rate as aluminium, same temp tolerance as tungsten
	GTMaterials.BlueSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(4618, 75, true, false, false, false));
	// Ostrum fluid pipe - same flow rate as titanium, higher temp range
	GTMaterials.get('ostrum').setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(3700, 150, true, false, true, false));

	// int is how fast the condition progresses (default 1.0)
	// bool is whether or not the condition applies to anything made with the material, other than dusts (default false) 
	GTMaterials.Realgar.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Cobaltite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Galena.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.WEAK_POISON, 1, false));
	GTMaterials.Chromite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.IRRITANT, 1, false));
	GTMaterials.Thorium.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.ANY, $TFGT_MEDICAL_CONDITIONS.RADIOACTIVE, 1, true));

	// This contains hazardous elements so GT tags it as hazardous automatically
	GTMaterials.get('ostrum').getProperties().removeProperty(PropertyKey.HAZARD);
	GTMaterials.get('ostrum_iodide').getProperties().removeProperty(PropertyKey.HAZARD);
	// Superconductors being radioactive at EV is a little evil
	GTMaterials.UraniumTriplatinum.getProperties().removeProperty(PropertyKey.HAZARD);

	// Make these the lowest tier of EBF instead
	GTMaterials.BlackSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)
	GTMaterials.RedSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)
	GTMaterials.BlueSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)

	// BLAST property
	let zirconium_diboride = TFGHelpers.getMaterial('zirconium_diboride');
	zirconium_diboride.setProperty(PropertyKey.BLAST, new $BLAST_PROPERTY(4500, $BLAST_PROPERTY.GasTier.HIGH, GTValues.VA[GTValues.EV], 2700, GTValues.VA[GTValues.HV], 12.5 * 20));

	// Remove properties
	GTMaterials.Glass.getProperties().removeProperty(PropertyKey.GEM)
	GTMaterials.Thorium.getProperties().removeProperty(PropertyKey.INGOT)
	GTMaterials.Thorium.getProperties().removeProperty(PropertyKey.FLUID)
	GTMaterials.Plutonium239.getProperties().removeProperty(PropertyKey.ORE)
}