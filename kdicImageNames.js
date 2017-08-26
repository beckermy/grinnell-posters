var kdicImageNames = [
  "ACDC.jpg", 
  "Anti-Drug.jpg", 
  "Batman.jpg", 
  "BieberDrink.jpg", 
  "BlueTrain.jpg", 
  "BrainOnKDIC.jpg", 
  "CamelCigs.jpg", 
  "CaptainKDIC.jpg", 
  "CrystalSkull.jpg", 
  "ET.jpg", 
  "Flash.jpg", 
  "GetKidsHooked.jpg", 
  "GreenLantern.jpg", 
  "Heat.jpg", 
  "HeCanFly.jpg", 
  "HulkWolverine.jpg", 
  "Jaws.jpg", 
  "Junkie.jpg", 
  "JurassicPark.jpg", 
  "KimJong-il.jpg", 
  "McGruff.jpg", 
  "MoreMinerals.jpg", 
  "NewYorker.jpg",
  "NotoriousBIG.jpg", 
  "NukeEmFirst.jpg", 
  "Spongebob.jpg", 
  "StarWars.jpg", 
  "TheChronic.jpg",
  "ToBloodyKDIC.jpg", 
  "TribeCalledQuest.jpg",
  "WakeUp.jpg", 
  "ZacEfron.jpg",
  "Overflow.jpg", 
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
    $("#testDiv").append('<tr><th> <a href="images/kdic_images/' + kdicImageNames[imageCounter] + '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter] +  '" alt="kdic image" class="kdic_image"> </a> <a href="images/kdic_images/' + kdicImageNames[imageCounter] + '" download> <p>Download</p> </a></th><th>  <a href="images/kdic_images/' + kdicImageNames[imageCounter + 1]+ '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter + 1]+ '" alt="kdic image" class="kdic_image"/> </a> <a href="images/kdic_images/' + kdicImageNames[imageCounter + 1] + '" download> <p>Download</p> </a> </th><th> <a href="images/kdic_images/' + kdicImageNames[imageCounter + 2] + '" data-lighter> <img src="images/kdic_images/' + kdicImageNames[imageCounter + 2] + '" alt="kdic image" class="kdic_image"> </a> <a href="images/kdic_images/' + kdicImageNames[imageCounter + 2] + '" download> <p>Download</p> </a> </th> </tr>' );
    imageCounter = imageCounter + 3;
  }
});


