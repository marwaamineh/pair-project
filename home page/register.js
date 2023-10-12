$(document).ready(function () {
  $("#registration-form").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "index.html";
  });
});
