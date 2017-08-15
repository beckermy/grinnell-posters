// This document contains the array that contains the names of the concert poster images

var conImageNames = [
  "allan_kingdom.jpeg",
  "gallant.jpg",
  "goldlink.jpg",
  "grin_concerts.jpg"];

function numberOfImages(conImageNames) {
  return conImageNames.length;
}

//pictures is an array of pictures
var pictures = new Array();
var im = "";
for(var i=0; i < numberOfImages(conImageNames); i++) {
  im = "images/concerts_images/" + conImageNames[i];
  pictures.push(im);
}
