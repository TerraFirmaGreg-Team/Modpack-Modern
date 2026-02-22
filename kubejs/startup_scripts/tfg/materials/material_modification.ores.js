// priority: 0
"use strict";

function registerTFGOresMaterialModification(event) {
	const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials");
	
	// Ores
	GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	GTMaterials.Borax.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());

	let rose_quartz = $GreateMaterials.RoseQuartz;
	rose_quartz.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	rose_quartz.getProperty(PropertyKey.ORE).setOreByProducts(rose_quartz, GTMaterials.Redstone, rose_quartz);

	// Change byproducts so you can't get certus from normal quartzite
	GTMaterials.Quartzite.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.NetherQuartz, GTMaterials.Barite, GTMaterials.NetherQuartz);
	GTMaterials.CertusQuartz.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.CertusQuartz, GTMaterials.Quartzite, GTMaterials.CertusQuartz);

	// Change Beryllium to add Chemical Bath recipe and Thorium byproduct
	GTMaterials.Beryllium.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Emerald, GTMaterials.Emerald, GTMaterials.Thorium, GTMaterials.Thorium);
	GTMaterials.Beryllium.getProperty(PropertyKey.ORE).setWashedIn(GTMaterials.SodiumPersulfate);

	// Remove old stone dusts
	GTMaterials.GraniticMineralSand.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.get('tfg:igneous_felsic'), GTMaterials.Magnetite, GTMaterials.Magnetite);
	GTMaterials.BasalticMineralSand.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.get('tfg:igneous_mafic'), GTMaterials.Magnetite, GTMaterials.Magnetite);
	
}