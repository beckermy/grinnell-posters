// This document contains the array that contains the names of the concert poster images
/**
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
      modal.style.display = "block";
              modalImg.src = this.src;
                      captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
**/
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

var bigString = '<tr><th> <a href="images/concerts_images/grin_concerts.jpg" data-lighter> <img src="images/concerts_images/grin_concerts.jpg" alt="need to rewrite w3 code to allow for multiple lines here" class="concerts_image"> </a><p> CONCERT ARTIST </p></p> CONCERT YEAR </p></th><th>  <a href="images/concerts_images/allan_kingdom.jpeg" data-lighter> <img src="images/concerts_images/allan_kingdom.jpeg" alt="allan_kingdom.jpeg" class="concerts_image"/> </a>  <p> Allan Kingdom </p> <p> Spring 2017 </p></th><th> <a href="images/concerts_images/gallant.jpg" data-lighter> <img src="images/concerts_images/gallant.jpg" alt="grin_concerts_test" class="concerts_image"> </a> <p> Gallant </p> <p> Fall 2015 </p> </th> </tr>'

var imageCounter = 0;
var iterCounter = Math.ceil(conImageNames.length / 3);

$(document).ready(function(){
   for(var i = 0; i< iterCounter; i++) {
     $("#testDiv").append('<tr><th> <a href="images/concerts_images/' + conImageNames[imageCounter] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter] +  '" alt="concerts image" class="concerts_image"> </a><p> CONCERT ARTIST </p></p> CONCERT YEAR </p></th><th>  <a href="images/concerts_images/' + conImageNames[imageCounter + 1] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter + 1] + '" alt="concerts image" class="concerts_image"/> </a>  <p> Allan Kingdom </p> <p> Spring 2017 </p></th><th> <a href="images/concerts_images/' + conImageNames[imageCounter + 2] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter + 2] + '" alt="concerts image" class="concerts_image"> </a> <p> Gallant </p> <p> Fall 2015 </p> </th> </tr>' );  
    imageCounter = imageCounter + 3;
  }
});
