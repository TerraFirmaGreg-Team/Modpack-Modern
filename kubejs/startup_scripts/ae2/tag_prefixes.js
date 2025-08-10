// priority: 0
"use strict";

const registerAE2TagPrefixes = (event) => {
	const $AE_BLOCKS = Java.loadClass('appeng.core.definitions.AEBlocks');
	const $AE_ITEMS = Java.loadClass('appeng.core.definitions.AEItems');

	const Fluix = GTCEuAPI.materialManager.getMaterial('tfg:fluix')

	TagPrefix.block.setIgnored(Fluix, $AE_BLOCKS.FLUIX_BLOCK);

	TagPrefix.dust.setIgnored(Fluix, $AE_ITEMS.FLUIX_DUST);
	TagPrefix.gem.setIgnored(Fluix, $AE_ITEMS.FLUIX_CRYSTAL);

	TagPrefix.dust.setIgnored(GTMaterials.CertusQuartz, $AE_ITEMS.CERTUS_QUARTZ_DUST);
	TagPrefix.gem.setIgnored(GTMaterials.CertusQuartz, $AE_ITEMS.CERTUS_QUARTZ_CRYSTAL);

	TagPrefix.dust.setIgnored(GTMaterials.EnderPearl, $AE_ITEMS.ENDER_DUST);
}