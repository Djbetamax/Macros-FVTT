const item = game.items.getName("ITEMNAME");
  await actor.createEmbeddedDocuments('Item', [item.toObject()])