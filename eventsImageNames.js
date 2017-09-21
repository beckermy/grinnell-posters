var evImageNames = [
  ["1988_April_gaypride.jpg", "Lesbian & Gay Pride Week", "Spring 1988"],
  ["1986_spring_electronic.png", "Electronic Music Concert", "Spring 1986"],
  ["1987_fall_deviate.jpeg", "Deviate Wildly Garder", "Fall 1987"],
  ["1987_spring_disco.png", "Disco Gardner", "Spring 1987"],
  ["1987_spring_norrisParty.png", "Norris Hall Wild Rumpus", "Spring 1987"],
  ["Alice1_2017.jpg", "Alice", "Spring 2017"],
  ["Alice2_2017.jpg", "Alice", "Spring 2017"],
  ["Alice3_2017.jpg", "Alice", "Spring 2017"],
  ["Alice4_2017.jpg", "Alice", "Spring 2017"],
  ["Alice5_2017.jpg", "Alice", "Spring 2017"],
  ["Alice6_2017.jpg", "Alice", "Spring 2017"]
];

function numberOfImages(evImageNames) {
  return evImageNames.length;
}

//pictures is an array of pictures
var pictures = new Array();
var im = "";
for(var i=0; i < numberOfImages(evImageNames); i++) {
  im = "images/events_images/" + evImageNames[i];
  pictures.push(im);
}

var imageCounter = 0;
var iterCounter = Math.ceil(evImageNames.length / 3);

$(document).ready(function(){
   for(var i = 0; i< iterCounter; i++) {
     $("#testDiv").append('<tr><th> <a href="images/events_images/' + evImageNames[imageCounter][0] + '" data-lighter> <img src="images/events_images/' + evImageNames[imageCounter][0] +  '" alt="events image" class="events_image"> </a><p>' + evImageNames[imageCounter][1] + ' </p></p>' + evImageNames[imageCounter][2] + ' </p></th><th>  <a href="images/events_images/' + evImageNames[imageCounter + 1][0] + '" data-lighter> <img src="images/events_images/' + evImageNames[imageCounter + 1][0] + '" alt="events image" class="events_image"/> </a>  <p>' + evImageNames[imageCounter + 1][1] + ' </p> <p>' + evImageNames[imageCounter + 1][2] + '</p></th><th> <a href="images/events_images/' + evImageNames[imageCounter + 2][0] + '" data-lighter> <img src="images/events_images/' + evImageNames[imageCounter + 2][0] + '" alt="events image" class="events_image"> </a> <p>' + evImageNames[imageCounter + 2][1] + '</p> <p>' + evImageNames[imageCounter + 2][2] + '</p> </th> </tr>' );
    imageCounter = imageCounter + 3;
  }
});


