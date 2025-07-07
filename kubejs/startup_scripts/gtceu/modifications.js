function registerGTCEuItemModifications(event) {

	event.modify('gtceu:nanomuscle_helmet', item => {
		item.armorProtection = 5
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_chestplate', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_leggings', item => {
		item.armorProtection = 8
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_boots', item => {
		item.armorProtection = 4
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:avanced_nanomuscle_chestplate', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.2
	})

	event.modify('gtceu:quarktech_helmet', item => {
		item.armorProtection = 7
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_chestplate', item => {
		item.armorProtection = 12
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_leggings', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_boots', item => {
		item.armorProtection = 6
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:advanced_quarktech_chestplate', item => {
		item.armorProtection = 12
		item.armorKnockbackResistance = 0.25
	})
}