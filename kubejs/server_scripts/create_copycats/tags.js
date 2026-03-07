"use strict";

const registerCreateCopycatsItemTags = (event) => {
  global.CREATE_COPYCATS_DISABLED_ITEMS.forEach((item) => {
    event.removeAllTagsFrom(item);
    event.add("c:hidden_from_recipe_viewers", item)
  })
}
