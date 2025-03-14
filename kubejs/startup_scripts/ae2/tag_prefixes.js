// priority: 0

const registerAE2TagPrefixes = (event) => {

	const $AE_BLOCKS = Java.loadClass('appeng.core.definitions.AEBlocks')
	const $AE_ITEMS = Java.loadClass('appeng.core.definitions.AEItems')

	const KJSTagPrefix = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.built.KJSTagPrefix')


	const Fluix = GTCEuAPI.materialManager.getMaterial('tfg:fluix')


	let blockPrefix = KJSTagPrefix.getPrefix("block");
	let dustPrefix = KJSTagPrefix.getPrefix("dust");
	let gemPrefix = KJSTagPrefix.getPrefix("gem");

	blockPrefix.setIgnored(Fluix, () => $AE_Blocks.FLUIX_BLOCK.get());
	dustPrefix.setIgnored(Fluix, () => $AE_Items.FLUIX_DUST.get());
	gemPrefix.setIgnored(Fluix, () => $AE_Items.FLUIX_CRYSTAL.get());


	blockPrefix.modifyMaterialAmount(Fluix, 4);
}