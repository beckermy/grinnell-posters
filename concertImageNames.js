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

var bigString = '<tr><th> <!-- Trigger the Modal --><img id="myImg" src="images/concerts_images/grin_concerts.jpg" alt="need to rewrite w3 code to allow for multiple lines here" class="concerts_image"><!-- The Modal --><div id="myModal" class="modal"><!-- The Close Button --><span class="close" onclick="document.getElementById(\'myModal\').style.display=\'none\'">&times;</span><!-- Modal Content (The Image) --><img class="modal-content" id="img01"><!-- Modal Caption (Image Text) --></div><p> CONCERT ARTIST </p></p> CONCERT YEAR </p></th><th><img src="images/concerts_images/allan_kingdom.jpeg" alt="grin_concerts_test" class="concerts_image"><p> Allan Kingdom </p><p> Spring 2017 </p></th><th><img src="images/concerts_images/gallant.jpg" alt="grin_concerts_test" class="concerts_image"><p> Gallant </p><p> Fall 2015 </p></th></tr>';

var imageCounter = 0;

$(document).ready(function(){
   for(var i = 0; i< 5; i++)
     $("#testDiv").append('<tr><th> <!-- Trigger the Modal --><img id="myImg" src="images/concerts_images/' + conImageNames[imageCounter] + '" alt="need to rewrite w3 code to allow for multiple lines here" class="concerts_image"><!-- The Modal --><div id="myModal" class="modal"><!-- The Close Button --><span class="close" onclick="document.getElementById(\'myModal\').style.display=\'none\'">&times;</span><!-- Modal Content (The Image) --><img class="modal-content" id="img01"><!-- Modal Caption (Image Text) --></div><p> CONCERT ARTIST </p></p> CONCERT YEAR </p></th><th><img src="images/concerts_images/allan_kingdom.jpeg" alt="grin_concerts_test" class="concerts_image"><p> Allan Kingdom </p><p> Spring 2017 </p></th><th><img src="images/concerts_images/gallant.jpg" alt="grin_concerts_test" class="concerts_image"><p> Gallant </p><p> Fall 2015 </p></th></tr>');  
});
