$(document).ready(function () {
  $('input[type="button"]').click(function () {
    var location = $('input[name="location"]').val();
    var date = $('input[name="date"]').val();
    var people = $('input[name="people"]').val();

    var message = "Your information has been checked. We'll contact you soon.";
    $("#confirmation-message").text(message).show();

    $("#confirmation-message").addClass("show");

    setTimeout(function () {
      $("#confirmation-message").hide();
    }, 5000);
  });

  $("#registration-form").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    window.location.href = "index.html";
  });

  $("#answer-form").submit(function (e) {
    e.preventDefault();
    var answer = $("#answer").val();

    $("#answer").val("");

    $("#user-answers ul").append("<li>" + answer + "</li>");

    var hotelsList = $("#hotels-list");
    hotelsList.empty();

    $(
      "#hotels-section h2, #hotels-section p, #answer-form, #user-answers"
    ).show();
  });

  $(document).on("click", ".more-info", function () {
    var link = $(this).attr("href");
    window.open(link, "_blank");
  });
});
