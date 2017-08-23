var kdicImageNames = [
  ["kdicLogo.jpg", "KDIC", "88.5 FM"],
  ["kdicLogo.jpg", "KDIC", "88.5 FM"],
  ["kdicLogo.jpg", "KDIC", "88.5 FM"],
  ["kdicLogo.jpg", "KDIC", "88.5 FM"],
  ["kdicLogo.jpg", "KDIC", "88.5 FM"],
  ["kdicLogo.jpg", "KDIC", "88.5 FM"]
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


