import { setUpMusicDragDrop, setUpTierDragDrop, addNewTier, editResults } from "./dragDrop.js";
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
  editResults();
});
