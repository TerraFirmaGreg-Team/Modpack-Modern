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

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:weak_inconel_718'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:homogenized_inconel_718'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:weak_inconel_718'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:homogenized_inconel_718'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:weak_inconel_718'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:homogenized_inconel_718'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:weak_inconel_718'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:homogenized_inconel_718'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:homogenized_inconel_718'))

	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:dirty_mo_si_b'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:dirty_mo_si_b'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:weak_mo_si_b'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:weak_mo_si_b'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:weak_mo_si_b'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:weak_mo_si_b'))
	TagPrefix.ingot.setIgnored(GTMaterials.get('tfg:weak_mo_si_b'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))
	TagPrefix.ingot.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:worked_mo_si_b'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:homogenized_mo_si_b'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:homogenized_mo_si_b'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:homogenized_mo_si_b'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:homogenized_mo_si_b'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:homogenized_mo_si_b'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:activated_mo_si_b'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:activated_mo_si_b'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:activated_mo_si_b'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:activated_mo_si_b'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:activated_mo_si_b'))
	
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:rough_silicon_carbide'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:rough_silicon_carbide'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:silicon_carbide'))
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:silicon_carbide'))
	TagPrefix.plateDouble.setIgnored(GTMaterials.get('tfg:silicon_carbide'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.plateDouble.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
	TagPrefix.ingot.setIgnored(GTMaterials.get('tfg:basalt_fiber'))
}

function excludeAllGemsButNormal(material) {
	TagPrefix.gemChipped.setIgnored(material);
	TagPrefix.gemFlawed.setIgnored(material);
	TagPrefix.gemFlawless.setIgnored(material);
	TagPrefix.gemExquisite.setIgnored(material);
}