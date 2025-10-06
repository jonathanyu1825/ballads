import { setUpMusicDragDrop, setUpTierDragDrop, addNewTier } from "./dragDrop.js";
import { setupPublishTierList } from "./publish.js";
import { setupSearch, setupAddElement } from "./search.js";

// const { data, error } = await supabaseClient.from('songs').select()
// console.log(data);

document.addEventListener("DOMContentLoaded", () => {
  setUpMusicDragDrop();
  setUpTierDragDrop();
  addNewTier();
  setupPublishTierList();
  setupSearch();
  setupAddElement();
});
