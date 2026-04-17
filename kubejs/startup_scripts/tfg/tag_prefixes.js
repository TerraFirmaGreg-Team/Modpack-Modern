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
	
	TagPrefix.rawOre.setIgnored(GTMaterials.Coal);
	TFGTagPrefix.richRawOre.setIgnored(GTMaterials.Coal);
	TFGTagPrefix.poorRawOre.setIgnored(GTMaterials.Coal);
	TagPrefix.crushed.setIgnored(GTMaterials.Coal);
	TagPrefix.crushedPurified.setIgnored(GTMaterials.Coal);
	TagPrefix.crushedRefined.setIgnored(GTMaterials.Coal);
	TagPrefix.dustImpure.setIgnored(GTMaterials.Coal);
	TagPrefix.dustPure.setIgnored(GTMaterials.Coal);
	TagPrefix.plate.setIgnored(GTMaterials.Coal);

	TagPrefix.dust.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.rawOre.setIgnored(GTMaterials.get('lignite'));
	TFGTagPrefix.richRawOre.setIgnored(GTMaterials.get('lignite'));
	TFGTagPrefix.poorRawOre.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.crushed.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.crushedPurified.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.crushedRefined.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.dustImpure.setIgnored(GTMaterials.get('lignite'));
	TagPrefix.dustPure.setIgnored(GTMaterials.get('lignite'));
	
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

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.plateDouble.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.plate.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.bolt.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.screw.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.rod.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	//TagPrefix.turbineBlade.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))
	TagPrefix.ingot.setIgnored(GTMaterials.get('tfg:silicon_carbide_silicon_carbide'))

	TagPrefix.block.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.plateDouble.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.bolt.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	TagPrefix.screw.setIgnored(GTMaterials.get('tfg:diamond_tipped_mo_50_re'))
	
	TagPrefix.block.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TagPrefix.ingot.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TagPrefix.nugget.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TagPrefix.dust.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TagPrefix.dustSmall.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TagPrefix.dustTiny.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadSword.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadButcheryKnife.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadMiningHammer.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadSpade.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadPickaxe.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadAxe.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadShovel.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadHoe.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadHammer.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadSaw.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadScythe.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
	TFGTagPrefix.toolHeadKnife.setIgnored(GTMaterials.get('tfg:arsenic_bronze'))
}

function excludeAllGemsButNormal(material) {
	TagPrefix.gemChipped.setIgnored(material);
	TagPrefix.gemFlawed.setIgnored(material);
	TagPrefix.gemFlawless.setIgnored(material);
	TagPrefix.gemExquisite.setIgnored(material);
}