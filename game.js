$(document).ready(init);

function init(){
  $('#playerBoard td').on('click', goClick);
}


function goClick(e){
  console.log($(this).data('id'));
}
