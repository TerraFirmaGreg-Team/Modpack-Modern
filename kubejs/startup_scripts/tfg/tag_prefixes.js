// priority: 0
"use strict";

function registerTFGTagPrefixes(event) {

	registerTFGRocksTagPrefixes(event)

	excludeAllGemsButNormal(GTMaterials.get('tfg:apt'));
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:apt'));
	excludeAllGemsButNormal(GTMaterials.get('tfg:tetrafluoroethane'));
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:tetrafluoroethane'));
	excludeAllGemsButNormal(GTMaterials.get('tfg:crimsene'));
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:crimsene'));
	excludeAllGemsButNormal(GTMaterials.get('tfg:warpane'));
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:warpane'));

	excludeAllGemsButNormal(GTMaterials.Coke)
	
	TagPrefix.nugget.setIgnored(GTMaterials.RawRubber);
	TagPrefix.ingot.setIgnored(GTMaterials.RawRubber);
	TagPrefix.plate.setIgnored(GTMaterials.RawRubber);
	TagPrefix.plateDouble.setIgnored(GTMaterials.RawRubber);

	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:magnesia_refractory_brick'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:magnesia_refractory_brick'))
	
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:rough_silicon_carbide'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:rough_silicon_carbide'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:silicon_carbide'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:silicon_carbide'))
	TagPrefix.plateDouble.setIgnored(GTMaterials.get('tfg:silicon_carbide'))
}

function excludeAllGemsButNormal(material) {
	TagPrefix.gemChipped.setIgnored(material);
	TagPrefix.gemFlawed.setIgnored(material);
	TagPrefix.gemFlawless.setIgnored(material);
	TagPrefix.gemExquisite.setIgnored(material);
}