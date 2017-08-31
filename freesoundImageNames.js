var fsImageNames = [
  ["acoustic_S12.jpg", "Acoustic Spring", "Spring 2012"],
  ["Cirque_du_Freesound_spring2013.jpg", "Cirque du Freesound", "Spring 2013"],
  ["familyWeekend_fall2012.jpg", "Family Weekend", "Fall 2012"],
  ["freesoundMarch2013.jpg", "Freesound Spring Show", "Spring 2013"],
  ["grinnellian_lineup_2017.jpg", "The Grinnellian", "Spring 2017"],
  ["predrag_2012.jpg", "Pre-Drag Show", "2012"],
  ["showcember_2.jpeg", "Showcember", ""],
  ["showcember_3.jpg", "Showcember", ""],
  ["showcember_0.jpg", "Showcember", ""],
  ["showvember_3.jpeg", "Showvember", ""],
  ["showvember_2008_1.jpg", "Showvember", "Fall 2008"],
  ["showvember_2008_2.jpg", "Showvember", "Fall 2008"],
  ["showvember_2011.jpg", "Showvember", "Fall 2011"],
  ["showvember_2013.jpg", "Showvember", "Fall 2013"],
  ["showvember_2014.jpg", "Showvember", "Fall 2014"],
  ["showvember_2016.jpg", "Showvember", "Fall 2016"],
  ["showvember_2016.jpg", "Showvember", "Fall 2016"],
  ["showvember_2016.jpg", "Showvember", "Fall 2016"]
];

function numberOfImages(fsImageNames) {
  return fsImageNames.length;
}

var pictures = new Array();
var im = "";
for(var i=0; i < numberOfImages(fsImageNames); i++) {
  im = "images/freesound_images/" + fsImageNames[i];
  pictures.push(im);
}

var imageCounter = 0;
var iterCounter = Math.ceil(fsImageNames.length / 3);

$(document).ready(function(){
   for(var i = 0; i< iterCounter; i++) {
     $("#testDiv").append('<tr><th> <a href="images/freesound_images/' + fsImageNames[imageCounter][0] + '" data-lighter> <img src="images/freesound_images/' + fsImageNames[imageCounter][0] +  '" alt="freesound image" class="freesound_image"> </a><p>' + fsImageNames[imageCounter][1] + ' </p></p>' + fsImageNames[imageCounter][2] + ' </p></th><th>  <a href="images/freesound_images/' + fsImageNames[imageCounter + 1][0] + '" data-lighter> <img src="images/freesound_images/' + fsImageNames[imageCounter + 1][0] + '" alt="freesound image" class="freesound_image"/> </a>  <p>' + fsImageNames[imageCounter + 1][1] + ' </p> <p>' + fsImageNames[imageCounter + 1][2] + '</p></th><th> <a href="images/freesound_images/' + fsImageNames[imageCounter + 2][0] + '" data-lighter> <img src="images/freesound_images/' + fsImageNames[imageCounter + 2][0] + '" alt="freesound image" class="freesound_image"> </a> <p>' + fsImageNames[imageCounter + 2][1] + '</p> <p>' + fsImageNames[imageCounter + 2][2] + '</p> </th> </tr>' );
    imageCounter = imageCounter + 3;
  }
});
