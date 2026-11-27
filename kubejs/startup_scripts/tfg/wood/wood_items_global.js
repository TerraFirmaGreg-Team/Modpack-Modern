/**
 * 
 * @param {Registry.Item} event 
 */
function registerWoodStructItems(event)
{
    global.getWoodStructArray().forEach(wood => 
	{
		if(wood.tfgCore === false)
		{
			return;
		}
		
		event.create(`tfg:wood/lumber/${wood.name}`)
			.translationKey(`item.tfg.${wood.name}_lumber`)
			.tag('tfc:lumber');
		
		//Keep track of the twigs for this wood type, so we don't generate duplicates
		let generatedTwigs = [];
		if(wood.tree_data)
		{
			wood.tree_data.forEach(treeData => 
			{
				//Dont generate a twig item if we already made one with this ID
				if(!generatedTwigs.includes(treeData.twig))
				{
					generatedTwigs.push(treeData.twig);
					event.create(treeData.twig)
						.tag('tfc:twigs')
						.texture(`tfg:item/wood/twig/${wood.name}`);
				}
			});
		}
	})
}