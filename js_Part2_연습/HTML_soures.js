var textStatus = false;
var name = null;
var password = null;
alert("Hello?");
alert("Welcom to the SE group!");
function texter() {

  var text = "Hello, minjun!!";

  var Obj = document.getElementById('text1');
  if (textStatus) {
    Obj.textContent="";
    textStatus = false;
  }else {
    Obj.textContent=text;
    textStatus = true;
  }

}
setInterval("texter()",500);

function texterX() {
  $('#text2').on('click', function() {
    $('#text2').slideUp(700);
  })
}
texterX();
