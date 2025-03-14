// priority: 0

const registerAE2TagPrefixes = (event) => {

	const $AE_BLOCKS = Java.loadClass('appeng.core.definitions.AEBlocks');
	const $AE_ITEMS = Java.loadClass('appeng.core.definitions.AEItems');

	//const KJSTagPrefix = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.built.KJSTagPrefix')


	const Fluix = GTCEuAPI.materialManager.getMaterial('tfg:fluix')


	let blockPrefix = TagPrefix.block;
	let dustPrefix = TagPrefix.dust;
	let gemPrefix = TagPrefix.gem;

	blockPrefix.setIgnored(Fluix, $AE_BLOCKS.FLUIX_BLOCK);
	dustPrefix.setIgnored(Fluix, $AE_ITEMS.FLUIX_DUST);
	gemPrefix.setIgnored(Fluix, $AE_ITEMS.FLUIX_CRYSTAL);


	// TODO: make fluid solidifier/extractor recipes for fluix block
	//blockPrefix.modifyMaterialAmount(Fluix, 4);
}