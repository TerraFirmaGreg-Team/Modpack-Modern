// priority: 0
"use strict";

function registerTFGTagPrefixes(event) {

	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:apt'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:tetrafluoroethane'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:crimsene'));
	excludeAllGemsButNormal(TFGHelpers.getMaterial('tfg:warpane'));

	TagPrefix.ingot.setIgnored(GTMaterials.RawRubber);
	TagPrefix.plate.setIgnored(GTMaterials.RawRubber);
	TagPrefix.plateDouble.setIgnored(GTMaterials.RawRubber);
}

function excludeAllGemsButNormal(material) {
	TagPrefix.gemChipped.setIgnored(material);
	TagPrefix.gemFlawed.setIgnored(material);
	TagPrefix.gemFlawless.setIgnored(material);
	TagPrefix.gemExquisite.setIgnored(material);
	TagPrefix.block.setIgnored(material);
}