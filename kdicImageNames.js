var kdicImageNames = [
  ["ACDC.jpg", "KDIC", "88.5 FM"],
  ["Anti-Drug.jpg", "KDIC", "88.5 FM"],
  ["Batman.jpg", "KDIC", "88.5 FM"],
  ["BieberDrink.jpg", "KDIC", "88.5 FM"],
  ["BlueTrain.jpg", "KDIC", "88.5 FM"],
  ["BrainOnKDIC.jpg", "KDIC", "88.5 FM"],
  ["CamelCigs.jpg", "KDIC", "88.5 FM"],
  ["CaptainKDIC.jpg", "KDIC", "88.5 FM"],
  ["CrystalSkull.jpg", "KDIC", "88.5 FM"],
  ["ET.jpg", "KDIC", "88.5 FM"],
  ["Flash.jpg", "KDIC", "88.5 FM"],
  ["GetKidsHooked.jpg", "KDIC", "88.5 FM"],
  ["GreenLantern.jpg", "KDIC", "88.5 FM"],
  ["Heat.jpg", "KDIC", "88.5 FM"],
  ["HeCanFly.jpg", "KDIC", "88.5 FM"],
  ["HulkWolverine.jpg", "KDIC", "88.5 FM"],
  ["Jaws.jpg", "KDIC", "88.5 FM"],
  ["Junkie.jpg", "KDIC", "88.5 FM"],
  ["JurassicPark.jpg", "KDIC", "88.5 FM"],
  ["KimJong-il.jpg", "KDIC", "88.5 FM"],
  ["McGruff.jpg", "KDIC", "88.5 FM"],
  ["MoreMinerals.jpg", "KDIC", "88.5FM"],
  ["NewYorker.jpg", "KDIC", "88.5FM"],
  ["NotoriousBIG.jpg", "KDIC", "88.5FM"],
  ["NukeEmFirst.jpg", "KDIC", "88.5FM"],
  ["Spongebob.jpg", "KDIC", "88.5FM"],
  ["StarWars.jpg", "KDIC", "88.5FM"],
  ["TheChronic.jpg", "KDIC", "88.5FM"],
  ["ToBloodyKDIC.jpg", "KDIC", "88.5FM"],
  ["TribeCalledQuest.jpg", "KDIC", "88.5FM"],
  ["WakeUp.jpg", "KDIC", "88.5FM"],
  ["ZacEfron.jpg", "KDIC", "88.5FM"],
  ["Overflow.jpg", "KDIC", "88.5 FM"]
];

function numberOfImages(kdicImageNames) {
  return kdicImageNames.length;
}

var pictures = new Array();
var im = "";
for(var i=0; i < numberOfImages(kdicImageNames); i++) {
  im = "images/kdic_images/" + kdicImageNames[i];
  pictures.push(im);
}

var imageCounter = 0;
var iterCounter = Math.ceil(kdicImageNames.length / 3);

$(document).ready(function(){
  for(var i = 0; i< iterCounter; i++) {
    $("#testDiv").append('<tr><th> <a href="images/kdic_images/' + kdicImageNames[imageCounter][0] + '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter][0] +  '" alt="kdic image" class="kdic_image"> </a><p>' + kdicImageNames[imageCounter][1] + ' </p></p>' + kdicImageNames[imageCounter][2] + ' </p></th><th>  <a href="images/kdic_images/' + kdicImageNames[imageCounter + 1][0] + '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter + 1][0] + '" alt="kdic image" class="kdic_image"/> </a>  <p>' + kdicImageNames[imageCounter + 1][1] + ' </p> <p>' + kdicImageNames[imageCounter + 1][2] + '</p></th><th> <a href="images/kdic_images/' + kdicImageNames[imageCounter + 2][0] + '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter + 2][0] + '" alt="kdic image" class="kdic_image"> </a> <p>' + kdicImageNames[imageCounter + 2][1] + '</p> <p>' + kdicImageNames[imageCounter + 2][2] + '</p> </th> </tr>' );
    imageCounter = imageCounter + 3;
  }
});


