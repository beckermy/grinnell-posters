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
  ["allan_kingdom.jpeg", "Allan Kingdom", "Spring 2017"],
  ["allan_kingdom2.jpeg", "Allan Kingdom", "Spring 2017"],
  ["bambounou_spring2015.JPG", "Bambounou", "Spring 2015"],
  ["busdriverspring2017.jpg", "Bus Driver & Milo", "Spring 2017"],
  ["concerts_lineup_fall2016.jpg", "Concerts Lineup", "Fall 2016"],
  ["concerts_lineup_spring2017", "Concerts Lineup", "Spring 2017"],
  ["frankieCosmos.jpg", "Frankie Cosmos", "Spring 2017"],
  ["frankieteardrop_spring2015.JPG", "Frankie Teardrop", "Spring 2015"],
  ["gallant.jpg", "Gallant", "Fall 2015"],
  ["goldlink.jpg", "Goldlink", "Spring 2016"],
  ["goshpith_spring2016", "Gosh Pith", "Spring 2016"],
  ["Ishdarr.png", "Ishdarr", "Fall 2015"],
  ["japanese_bfast.jpg", "Japanese Breakfast", "Spring 2017"],
  ["mickJenkins.jpg", "Mick Jenkins", "Spring 2016"],
  ["NegativeScanner.png", "Negative Scanner", "Fall 2015"],
  ["noname.jpeg", "Noname", "Spring 2016"],
  ["radkey_spring2015.jpg", "Radkey", "Spring 2016"],
  ["saba_spring2015.JPG", "Saba", "Spring 2015"],
  ["showcember_fall2015.jpg", "Showcember", "Fall 2015"],
  ["SickoMobb.png", "Sicko Mobb", "Fall 2015"],
  ["SippinTeaMykki.png", "Mykki Blanko", "Fall 2015"],
  ["totalfreedom_spring2015.png", "Total Freedom", "Spring 2015"],
  ["trapo.jpg", "Trapo", "Fall 2017"],
  ["whitney_spring2017", "Whitney", "Spring 2017"],
  ["grin_concerts.jpg", "Grinnell Concerts", "Grinnell Concerts"],
  ["grin_concerts.jpg", "Grinnell Concerts", "Grinnell Concerts"],
  ["grin_concerts.jpg", "Grinnell Concerts", "Grinnell Concerts"]
];

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
     $("#testDiv").append('<tr><th> <a href="images/concerts_images/' + conImageNames[imageCounter][0] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter][0] +  '" alt="concerts image" class="concerts_image"> </a><p>' + conImageNames[imageCounter][1] + ' </p></p>' + conImageNames[imageCounter][2] + ' </p></th><th>  <a href="images/concerts_images/' + conImageNames[imageCounter + 1][0] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter + 1][0] + '" alt="concerts image" class="concerts_image"/> </a>  <p>' + conImageNames[imageCounter + 1][1] + ' </p> <p>' + conImageNames[imageCounter + 1][2] + '</p></th><th> <a href="images/concerts_images/' + conImageNames[imageCounter + 2][0] + '" data-lighter> <img src="images/concerts_images/' + conImageNames[imageCounter + 2][0] + '" alt="concerts image" class="concerts_image"> </a> <p>' + conImageNames[imageCounter + 2][1] + '</p> <p>' + conImageNames[imageCounter + 2][2] + '</p> </th> </tr>' );  
    imageCounter = imageCounter + 3;
  }
});
