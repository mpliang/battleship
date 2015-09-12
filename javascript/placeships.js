var fb = new Firebase("https://mikeandsammie.firebaseio.com/");
var player1 = new Firebase("https://mikeandsammie.firebaseio.com/player1");
var player2 = new Firebase("https://mikeandsammie.firebaseio.com/player2");

var players = 0;

$(document).ready(init);

function init(){

//abcdefghij
  var myShips1 = [
      {name: "Carrier", length: 5, sunk: false, location: ['D2','D3','D4','D5','D6'], hits: 0},
      {name: "Battleship", length: 4, sunk: false, location: ['G8','H8','I8','J8'], hits: 0},
      {name: "Cruiser", length: 3, sunk: false, location: ['A3','A4','A5'], hits: 0},
      {name: "Submarine", length: 3, sunk: false, location: ['F4','G4','H4'], hits: 0},
      {name: "Destroyer", length: 2, sunk: false, location: ['I10','J10'], hits: 0}
  ];
  var myShips2 = [
      {name: "Carrier", length: 5, sunk: false, location: ['D2','D3','D4','D5','D6'], hits: 0},
      {name: "Battleship", length: 4, sunk: false, location: ['G8','H8','I8','J8'], hits: 0},
      {name: "Cruiser", length: 3, sunk: false, location: ['A3','A4','A5'], hits: 0},
      {name: "Submarine", length: 3, sunk: false, location: ['F2','F3','F4'], hits: 0},
      {name: "Destroyer", length: 2, sunk: false, location: ['J9','J10'], hits: 0}
  ];

  var clicked = [];
  player1.set(myShips1);
  player2.set(myShips2);

  $('#join').on('click', start);

  //displays ships on players board
  for (var i=0; i< myShips1.length; i++){
    myShips1[i].location.forEach(function(val){
      // console.log(document.getElementById(val));
      var elem = document.getElementById(val);
      elem.className += " ship";
    });
  }

  //shoot at your opponents
  $('#oppBoard td').on('click', function(event){
    console.log(clicked);
    if (clicked.indexOf(event.target.id)<0){
      clicked.push(event.target.id);
      for (var i=0; i<myShips1.length; i++){
        myShips1[i].location.forEach(function(val){
          var element = document.getElementById(val);
          if (event.target.id === val){
            console.log('hit');
            element.className += " hit";
          } else {
            console.log('miss');
            element.className += " miss";
          }
        });
      }
    } else {
      clicked.push(event.target.id);
    }
  });


}


function start(){

  if (players === 1) {
    alert('Begin Battleship!')
  }
  console.log('start');


  fb.child('players').push({
    players: 'players'
  });

  fb.on("child_changed", function(snapshot) {
    var changedPost = snapshot.val();
    console.log(snapshot.val());
    // console.log("The updated post title is " + changedPost.title);
    players++;
    console.log(players);
  });

}











//   $('#playerBoard td').on('click', function(){
//     for (i=0; i<4; i++){
//       var shipLength = myShips[i].length;
//       console.log(myShips[i].name);
//       if (shipLength>0){
//         console.log('clicked');
//         $(this).addClass('ship');
//         shipLength--;
//       }
//     }
//   });
// }
  // myShips.forEach(function(val, index){
  //   buildShips(val);
  // });


  // $("td").on("click", buildShip);
  // $("#playerBoard td").on("click", function(){
  // });

//   }
//
// function buildShips() {
//   console.log(val.length);
//   var shipLengths = [5,4,3,3,2];
//
//   while (shipLengths.length){
//     shipLengths[0]
//   }
//   var i = 0;
//   if (i<val.length){
//     $('#playerBoard td').on('click', function(e){
//       console.log('clicked');
//       $(this).addClass('ship');
//       i++;
//     });
//   }
// }
//
// // function drawBoard() {
// // var boardContents = "";
// // var i;
// // var j;
// // for (i=0; i<9; i++) {
// //   for (j=0; j<9; j++) {
// //       boardContents = boardContents + game[i][j]+" "; // Append array contents
// //       for each board square
// //     }
// //     boardContents = boardContents + "<br>"; // Append a line break at the end of each
// //     horizontal line
// // }
// // return boardContents; // Return string representing board in HTML
// // }
