let tierListData = {
  title: "",
  tiers: [],
};

function setupPublishTierList() {
  let publishButton = document.getElementById("publish-list");
  publishButton.addEventListener("click", async (event) => {
    if (!publishButton.classList.contains("open-publish-list")) {
      publishButton.textContent = '';

      let publishNavBar = document.createElement("div");
      publishNavBar.id = 'publish-nav-bar';

      let publishPNG = document.createElement("div");
      publishPNG.id = 'publish-png';
      publishPNG.classList.add('publish-option');
      publishPNG.textContent = 'Save as PNG';

      let publishTierList = document.createElement("div");
      publishTierList.id = 'publish-general'
      publishTierList.classList.add('publish-option');
      publishTierList.textContent = 'Publish Tier List';

      let publishTemplate = document.createElement("div");
      publishTemplate.id = 'publish-template';
      publishTemplate.classList.add('publish-option');
      publishTemplate.textContent = 'Publish Template';

      publishNavBar.appendChild(publishPNG);
      publishNavBar.appendChild(publishTierList);
      publishNavBar.appendChild(publishTemplate);

      publishButton.appendChild(publishNavBar);

      publishButton.classList.toggle("open-publish-list");
    }
    // publishButton.textContent = "";
    // let title = document.getElementById("add-title").textContent;
    // tierListData.title = title;

    // let tiers = document.querySelectorAll(".sign");
    // for (let i = 0; i < tiers.length; i++) {
    //   let tierName = tiers[i].childNodes[0].textContent.trim();
    //   tierListData.tiers.push({
    //     name: tierName,
    //     elements: [],
    //     color: tiers[i].style.backgroundColor,
    //   });
    // }
    // let tierDropZones = document.querySelectorAll(".tier-drop-zone");
    // for (let i = 0; i < tierDropZones.length; i++) {
    //   let tierItems = tierDropZones[i].children;
    //   for (let j = 0; j < tierItems.length; j++) {
    //     let curElement = tierItems[j];
    //     let curElementName = curElement.children[0].textContent;
    //     let curElementImage = getComputedStyle(curElement)
    //       .getPropertyValue("--bg-image")
    //       .trim();
    //     tierListData.tiers[i].elements.push({
    //       elementName: curElementName,
    //       imageURL: curElementImage,
    //     });
    //   }
    // }

    // // const { error } = await supabaseClient.from("tierlist-data").insert({
    // //   tier_data: tierListData,
    // //   user_id: "jonathan"
    // // });
  });
}

export { setupPublishTierList };
