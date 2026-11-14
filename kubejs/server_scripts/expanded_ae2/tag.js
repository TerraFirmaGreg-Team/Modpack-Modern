// Temporary Tag to do a fast release then move it to ReliableRemover in the future but I was lazy

ServerEvents.tags('item', event => {
  event.add('c:hidden_from_recipe_viewers', '@expandedae')
  event.remove('c:hidden_from_recipe_viewers', ['expandedae:auto_complete_card', 'expandedae:pattern_refiller_card'])
})