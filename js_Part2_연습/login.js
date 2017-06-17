function login() {
  var userId = document.getElementById('userId').value;
  var userPw = document.getElementById('userPw').value;

  if (userId === "choeminjun" && userPw === "minjun5627") {
    location.href = 'HTML.html';
    return;
  }

  alert("You are not the master user!");
  var answer = prompt("Do you want to go to Demo page?");
  if (answer === 'y' || answer === 'yes') {
    location.href = 'demoPage.html';
  }else {
    location.href = 'HTML_MAIN_PAGE.html';
  }
}

function texterX() {
  $('#text2').on('click', function() {
    $('#text2').slideUp(700);
  })
}
texterX();
