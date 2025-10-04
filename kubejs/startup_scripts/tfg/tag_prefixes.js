// priority: 0
"use strict";

function registerTFGTagPrefixes(event) {

	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:apt'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:tetrafluoroethane'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:crimsene'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:warpane'));

	excludeAllOresButDust(TFGHelpers.getMaterial('gtceu:plutonium'));
}

function excludeAllGemsButNormal(material) {
	TagPrefix.gemChipped.setIgnored(material);
	TagPrefix.gemFlawed.setIgnored(material);
	TagPrefix.gemFlawless.setIgnored(material);
	TagPrefix.gemExquisite.setIgnored(material);
	TagPrefix.block.setIgnored(material);
}

function excludeAllOresButDust(material) {
	TagPrefix.rawOre.setIgnored(material);
	TagPrefix.poorRawOre.setIgnored(material);
	TagPrefix.richRawOre.setIgnored(material);
	TagPrefix.rawOreBlock.setIgnored(material);
	TagPrefix.crushedRefined.setIgnored(material);
	TagPrefix.crushedPurified.setIgnored(material);
	TagPrefix.crushed.setIgnored(material);
	TagPrefix.dustImpure.setIgnored(material);
	TagPrefix.dustPure.setIgnored(material);
	TagPrefix.surfaceRock.setIgnored(material);

}