
function registerTACZGunRecipes(event){
	
	
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ulv_guns:flintlock",HasBulletInBarrel:1b}'), [
		'ABC',
		' DD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_small_fluid_pipe',
		D: '#firmaciv:hard_wood',
		E: '#forge:tools/saws',
		F: '#forge:ingots/brass',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:flintlock_pistol');
	
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ulv_guns:blunderbuss",HasBulletInBarrel:1b}'), [
		'ABC',
		'DDD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_normal_fluid_pipe',
		D: '#firmaciv:hard_wood',
		E: '#forge:tools/saws',
		F: '#forge:ingots/brass',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:blunderbuss_shotgun');
	
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:springfield1873",HasBulletInBarrel:1b}'), [
		'ABC',
		'DDD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_small_fluid_pipe',
		D: 'gtceu:treated_wood_planks',
		E: '#forge:tools/saws',
		F: '#forge:ingots/black_steel',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:trapdoor_rifle');

}