"use strict";

const NORMAL_QUESTS = [
	"3687ACAD307EE7EF", // clay
	"5301A38F7EA81140", // fire pit
	"3630ED3B85753BB2", // pit kiln
	"6EBC3E2B59B1833D", // primitive tools
	"0D1E3CAF5D4B6B7B", // garlic bread
	"76B145EFF9B5DB67", // saw
	"560B17BFBE8D477D", // leather
	"30BB29532979260A", // bed
	"6EEBBF78AFA3F42A", // copper ingot
	"4D1CD95482EE2CDD", // forge
	"5E186CD5E83BFDF0", // quern
	"706A1824B1487385", // stone anvil
	"564258B25C477A28", // canoe
	"6D6270D9B2F1EC01", // clothing

	"1637121D67CB91B0", // beeswax
	"2936976FC773ABE4", // rosin
	"0E1A20D0790AAFEB", // kayak
	"021D3DEEB15A3D17", // bellows
	"5B860F2BECC8BC93", // crafting station
	"611EB6284CA7119C", // helve
	"48C1E980F7D64317", // millstone
	"1059288C22CB56BB", // animal crank
	"43CF266DE09B3413", // backpack
	"07400BEB7BC0C58D", // rowboat
	"4964F9A696865AD0", // climate station
	"0D0D461AE3A3F7BF", // coke oven
	"1F1C8CD694E233E4", // salves
	"1AF194B74265872C", // sloop
	"3A9289CF6C833E00", // lunchbox
	"7058443D91C8D461", // greenhouse automation
	"19CF6D922179DFF9", // iron flask
	"6A3CF1CD0A79DF7E", // schematicannon
	"56BE73FC3D25BCCB", // oven appliances
	"414835BADD34513F", // rotation speed controller
	"616E28977F3216D9", // encased fan
	"0AC614966CCA8294", // kinetic bridge
	"51CBF7378FFAD514", // steel pump
	"620DEF4A7F08EE15", // best supports
	"2B25B8F950B75BCD", // horseshoes
	"32A6A6BF942C4AB5", // trains
	"6B6494B071AC5584", // springfield rifle
	"7A9DC5EB8E994D9F", // cooling lunchbox
	"30D49878F3CEB08A", // red steel flask
	"3249AB9EB552BB77", // red steel backpack
	"310D96268266D787", // colored steel equipment

	"799288FB7A4DCA11", // furnace
	"59F7F7A8C76DE31C", // forge hammer
	"6CF7DCC996BACBFA", // macerator
	"1912758422EEB006", // alloy smelter
	"0805CCABC8E7F6CF", // steam bloomery
	"2491CB5921B66446", // rock crusher
	"7DB7AB5349218605", // compressor
	"3259A3431E873F1B", // engines
	"281D25FF34849430", // paving cart
	"4F3D0D746D26B59F", // crushing wheels
	"6AA07588374B59AB", // deployers
	"5F3063C539C9CBBF", // vac chamber
	"0ED2F015B1ABE9E0", // rubber ingot
	"37F9CB2837DD3FB6", // sticky resin
	"1F7AAF65CC0A4ADF", // LBB
	"4C22BE513927247B", // rolling mill
	"49896161B31DB7B4", // mech mixer
	"072F6E48A1C5ECE9", // coiling machine
	"6A92E8396DE40577", // belt grinder
	"0078B9234C554C6E", // steel mech saw
	"1E8CC993E0251828", // vibrating table
	"6ABACC7B9967851D", // curving press
	"474B85F52F14AF52", // tablets

	"22510C5F2386B453", // lv hull
	"7EED0084BA59FED1", // first motor
	"170B544373A16112", // combustion gen
	"6E186F9C57155BFA", // steam gen
	"1AD51E2B66EA7F67", // gas gen
	"6771D2D96EEA8FD0", // rose quartz lens
	"45CEDBD3A2092C71", // glowstone block
	"37F316C0599B52DE", // electric lunch box
	"2E36E5755B2F551C", // lv prospector
	"4F6C86CA85019228", // vulcanizer
	"671F90ADCDF476A8", // phenolic resin
	"7567E885B7166603", // alum ingot
	"1C5F5EDAEE355130", // bakelite
	"1A77CA35F054F988", // oxygen
	"39F6BCF4B8DFC7D4", // nitrogen
	"4651E1A7756AD80A", // electric flask
	"36BF3283BEBCCEBF", // factory gauge
	"1F41C35890E2C44F", // EGH
	"35BA757ACDB3ED82", // rancher
	"46AD7A6F3B6775F5", // lv superconductor
	"1354904154948913", // ms greate
	"62737DC459F6F5F5", // lv jetpack

	"22B5AD670496C02D", // mv extruder
	"317C71249EBA0F15", // heat pump
	"682C26579EDDCA76", // vanadium steel
	"64CACABB48635904", // HCl
	"316FF60D6FFE97CE", // sulf acid
	"53DC6E32C41C94C3", // pyro oven
	"05ADBAE5B6F38956", // fluid rig
	"47DDBCD42985A993", // rhenium
	"54A255C1C6E33165", // liquefaction tower
	"16A6AE5C770DB83A", // stainless ingot
	"0DE5C3FBC9A6A690", // mv circass
	"1F73EFB819A489A9", // chromium
	"6DCF1E5EFFE24901", // large steel boiler
	"21F70EACF6D81E6A", // mv jetpack
	"0053E98892F910BF", // dismantler
	"738E8E10951E17C6", // HTPF
	"71412502C81F21C1", // boules
	"6DDDE2268B691F74", // multi smelter
	"403AEA52CF8A3048", // hazmat
	"5865A1E9D48261C9", // molybdenum
	"7A184101B8426F52", // mv superconductor
	"6602AE559D49CE65", // hs greate

	"6B7762F672BAE76F", // hv macerator
	"0278967C0472ECE6", // large steam turbine
	"3568BC9742092FC5", // cleanroom
	"04ADA3B900F182A0", // fishery
	"528CE69DA4358B2E", // LCR
	"2124BF15006733D5", // hv prospector
	"74C6DD5F67B1731F", // hv guns
	"4C25552DC291F49A", // ultimet
	"55552589C581EE9E", // energium
	"017019EB38F7A18C", // phos boules
	"1137D2BA7E03D685", // implosion compressor
	"038B204DAC9C863D", // space suit
	"403B34B669894C26", // breathable gas
	"11514DCB02911D9E", // oxy distributor
	"01E5ECAB3D167CBC", // matter manipulator
	"3FC6D346B3EE4A92", // multi structure manager
	"47E88A5E8AE13326", // railgun
	"159A0DAEE55DCAC0", // hypertubes
	"6958029B5514D4EC", // vac freezer
	"6A21CCAEB1FDF38E", // moon harvester
	"3274381865E7D011", // LSA
	"45F9AAE4ABE32033", // hv superconductor
	"7FA0ACB7F161F378", // titanium ingot
	"04799A40C5910B3F", // es greate

	"5EC5566546591DEE", // tungsten
	"601B05D5F3888C74", // btx
	"397546E863E9835E", // gasoline
	"3A2E442E4D84C891", // dist tower
	"36B9B5024356C53C", // cracker
	"55FB2776B724FB63", // epoxy
	"601088B7920140B2", // ev assembler
	"2FFC51987440B656", // gravity emitter
	"5A52FAABE58F7CCC", // building gadgets
	"4B1F957EB41A5E9B", // interplanetary card
	"0FB5E513356117C1", // tungstensteel ingot
	"3F77D528961D5C5E", // large miner
	"34D8F961B341868B", // ev fluid drill
	"51BEA1053F203050", // mineral rich wool
	"24ECDF70031B39C4", // ABS
	"351AED1612D00EF8", // large combustion gen
	"3467E14C8BB54214", // large gas turbine
	"3AEAB1930F4CC034", // LSA 2
	"236F53188110F6D5", // ostrum harvester
	"321F8E326EDF54F6", // matter manipulator 2
	"10F870BCEC5D5C74", // large centrifuge
	"75725B3F6603F1D0", // heat exchanger
	"2AE4C12203E5F15E", // rod factory
	"77CB4AE5B3AF5263", // thorium fuel rod
	"232977FC8CFF1872", // uranium fuel rod
	"2BE373381980C85F", // ev superconductor
	"2151F8AA263F1D6E", // active transformer
	"26AA29016BA23396", // heat battery
	"4C0E5C517F0137B9", // plutonium fuel rod
	"4B600E20614EB886", // schematic interface
	"4AF566E0800A8D24", // ev circass
	"7E7F18A8422A6A28", // nanoprocessor

	"4AC4D681124751EE", // extreme combustion
	"7CA3A5EFE3D5B688", // LSA 3
	"4659447C85CDC058", // SMR
	"7F2F435C727C7AB3", // nuclear cooling tower

	"379F434116632A89", // mattock
	"7560DC5AA338F0CD", // music disc
	"1074B137571B3F94", // amogus
	"60D7605B4286C007", // tape measure
	"615361AD621B588E", // swimming gear
	"4425519187BF28FE", // digger helmet
	"343A712E8869482A", // feeding troughs
	"2301E2248A3560C8", // scraping knife
	"2A57C41D681E4611", // fishing net
	"75C6BF1C9405B4C7", // walking cane
	"5B0A9757F1EF1B9E", // harvest basket
	"382FC8824F311665", // glass
	"674B27738ADA1830", // lightning rod
	"275C8EA942AB49DD", // camera
	"5443F4F5AE53B91A", // frame pack
	"21C58B2541BFA2EE", // ore sack
	"4433748B4DA986B0", // toolbelt
	"7A200766AAC1EE19", // grappling hook

	"79A0CA1EB77DEB7B", // piglin disguise
	"1A8751142C4D5942", // metal shield
	"0F100B271DD4A689", // metal armor
	"5CDA3E5AEB6D6339", // ammo
	"4E87F4BB0D441E00", // flintlock
	"25CD360CC4287805", // blue steel diving gear
	"35F893275E728B14", // nano saber
	"2E86CDE7C64B88B0", // t2 space suit

	"673433C6D5A451F8", // fluix
	"31F7F3379D17FFD6", // MERC
	"25007C5E43D28DB2", // interface
	"378E2294EFD85C65", // pat prov
	"349620A86711E263", // stock bridge
	"57C98F43A9818B49", // mega patprov
	"59D42D755D58D18F", // extended patprov
	"1BD1BB1FFF9A70A9", // extended interface
	"68CCEBFC927C9956", // oversize interface
];

const BIG_QUESTS = [
	"4C444814F1C7B600", // workbench
	"48A8E3210B2BAE1C", // copper anvil

	"3C173357029AB649", // bronze anvil
	"0A92F5C4BB6AF972", // bloomery
	"174DA15847665CF8", // wrought anvil
	"31CE13462759950C", // graphite
	"72F1C122FC26229C", // kaolin clay
	"12CB3B9ADC586521", // crucible
	"5996A3A0D475B8A6", // blast furnace
	"04DE7C58F20B535A", // steel anvil
	"52DAF93E2F3D688A", // black steel anvil
	"56CA2EB7812529C5", // colored steel anvil
	"25551B8DB67BE0A9", // bucket

	"46FA9DD4755A5548", // boilers
	"033E74BC588E7EAD", // electron tube
	"2C35D4E01AEC02AA", // vacuum tube
	"3D8174C64DDC268B", // first circuit

	"551B1AC08D0BE017", // stock ticker
	"63CD0236B337EAAD", // lv assembler
	"1E9BE8D3F8A602DC", // EBF
	"0DBC148D92A9F69F", // first mv circuit
	"199361B5FEC959EA", // lv circass
	"71A3D034BBA13CF0", // mv hull

	"10FB27DD3C7BEC2F", // polyethylene
	"3E25696C98A6F123", // hv hull
	"1C55AE6AD5BDE304", // kanthal coils
	"26394C1290D70AB6", // first hv circuit

	"6A451F43F3D7A671", // ev circuits
	"3FBDC8552F7D8008", // t1 rocket
	"00A2566109144D7F", // moon
	"6B08799BCFD01D3D", // nichrome coils
	"4214D5C501C35876", // hv hull

	"52AB0BDC64293253", // t2 rocket
	"2979AFD231E5B37B", // mars
	"29E0829816B9DBA0", // fission reactor
	"7F4E529627AD9148", // RTM coils
	"691A36800DC755C1", // OLA
	"3EC8D58DB73CEFE5", // iv hull
	"3E0ABDFCC0FC6928", // tritiated water
	"7AC97F7850E31D95", // first iv circuit
	
	"0C7E9422BF567F2C", // adv nano
	"67F9A71A21D9C7C1", // quarktech

	"3CD0A43CE62CF618", // MERF
	"1AAD526450E5A732", // ae2 controller
	"5B4AD301357488D6", // accumulation processor
	"426B327852C46764", // 64m mega storage component
];

const QUEST_CHAPTERS = [
	"66469D508CDD9C7E", // stone age
	"5F560FF28458A555", // metallurgy age
	"784A885090386609", // steam age
	"7D50771C3FE033D7", // lv
	"43E779CEEB25D55B", // mv
	"237BDB19A9495869", // hv
	"6B1AD2350778D945", // ev
	"32EF20533F323E02", // iv

	"254D02A31AA8EB49", // tools
	"72E4C93BA4A0AD00", // equipment
	"28EBC0FF82EFD94B", // progression table

	"24C1683140DBB5F2", // oreproc
	"6540429F3CA4DA1B", // gt energy
	"19B072F39A8AC31F", // ae2
	"1A6D6B70EC13DDC6", // cc
	"2477DBCE1DD223C0", // periodic table
];

function getTitle(event) {
	const title = event.object.getRawTitle();
	return Text.translate(title.substring(1, title.length() - 1))
		.underlined()
		.clickRunCommand(`/showcaser ftbquests open ${TFGHelpers.getQuestID(event.object)}`);
}

function broadcastNormalQuest(event) {
	if (!TFGConfig.SERVER.enableQuestBroadcasts.get())
		return;

	let message = (event.data.name == null 
		? Text.translate("quests.player_completed_quest", event.player.username)
		: Text.translate("quests.team_completed_quest", event.player.username, event.data.name))
		.append("[").append(getTitle(event).green()).append("]");

	event.server.playerList.broadcastSystemMessage(message, false);
}

function broadcastBigQuest(event) {
	if (!TFGConfig.SERVER.enableQuestBroadcasts.get())
		return;

	let message = (event.data.name == null 
		? Text.translate("quests.player_completed_quest", event.player.username)
		: Text.translate("quests.team_completed_quest", event.player.username, event.data.name))
		.append("[").append(getTitle(event).bold().darkGreen()).append("]");

	event.server.playerList.broadcastSystemMessage(message, false);
}

function broadcastChapter(event) {
	if (!TFGConfig.SERVER.enableQuestBroadcasts.get())
		return;

	let message = (event.data.name == null 
		? Text.translate("quests.player_completed_chapter", event.player.username)
		: Text.translate("quests.team_completed_chapter", event.player.username, event.data.name))
		.append("[").append(getTitle(event).bold().lightPurple()).append("]");

	event.server.playerList.broadcastSystemMessage(message, false);
}

NORMAL_QUESTS.forEach(quest => {
	FTBQuestsEvents.completed(quest, broadcastNormalQuest);
});

BIG_QUESTS.forEach(quest => {
	FTBQuestsEvents.completed(quest, broadcastBigQuest);
});

QUEST_CHAPTERS.forEach(quest => {
	FTBQuestsEvents.completed(quest, broadcastChapter);
})