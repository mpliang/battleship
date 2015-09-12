$(document).ready(init);

function init(){

  var fb = new Firebase("https://mikeandsammie.firebaseio.com/");

  var myShips = [
      {name: "Carrier", length: 5, sunk: false},
      {name: "Battleship", length: 4, sunk: false},
      {name: "Cruiser", length: 3, sunk: false},
      {name: "Submarine", length: 3, sunk: false},
      {name: "Destroyer", length: 2, sunk: false},
  ];

  fb.set(myShips);

  myShips.forEach(function(val, index){
    buildShip(val);
  });


  // $("td").on("click", buildShip);
  // $("#playerBoard td").on("click", function(){
  // });

  }


function buildShip(val) {
  console.log(val.length);
  console.log(val.name);
  var i = 0;
  while (i<val.length){
    $('#playerBoard td').on('click', function(e){
      $(this).addClass('ship');
      i++;
    });
  }
  return;
}
