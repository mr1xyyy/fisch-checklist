window.FischUtils = window.FischUtils || {};

const IMAGE_OVERRIDES = {
  "Anchor & Chain": "Anchor_n'_Chain.png",
  "Challengers Rod": "Challenger's_Rod.png",
  "Cryolash Rod": "Cryolash.png",
  "Crystallised Rod": "Crystalized_Rod.png",
  "Duskwire Rod": "Duskwire.png",
  "Elder Mossripper Rod": "Elder_Mossripper.png",
  "Hades Soul Scythe": "Hades'_Soul-Scythe.png",
  "Heavens Rod": "Heaven's_Rod.png",
  "Merlin Staff": "Merlin's_Staff.png",
  "Nico's Yarncaster Rod": "Nico's_Yarncaster.png",
  "NoLife Rod": "No-Life_Rod.png",
  "Pinions Aria": "Pinion's_Aria.png",
  "Poseidon Lance": "Poseidon's_Lance.png",
  "Requiem Rod": "Requiem.png",
  "Scarlet Spincaster": "Scarlet_Spincaster_Rod.png",
  "Thalassar Ruin": "Thalassar's_Ruin.png",
  "Boom Ball": "The_Boom_Ball.png",
  "Lost Rod": "The_Lost_Rod.png",
  "Zeus Thundermaul": "Zeus's_Thundermaul.png",
};

window.FischUtils.imageUrl = function imageUrl(name){
  const fileName = IMAGE_OVERRIDES[name] || `${name.replace(/\s+/g, '_')}.png`;
  return `assets/images/${encodeURIComponent(fileName)}`;
};
