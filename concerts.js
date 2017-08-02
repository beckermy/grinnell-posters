var clicked = false;

function hideshow(thing) {
  var image = document.getElementById(thing.id);
  var table = document.getElementById('tableID');
  if (clicked == false) { 
    image.style.width = 500;
    image.style.height = 500;
    clicked = true;
  } else {
    image.style.width = 300;
    image.style.height = 300;
    clicked = false;
  }
}

function showback(thing) {
  var image = document.getElementById(thing.id);
  image.style.display = 'table-cell';
}
