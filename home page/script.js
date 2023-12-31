$(document).ready(function () {
  // This code targets all <input> elements with type="button" and attaches a click event handler to them.
  // When one of these buttons is clicked, the code within the function will execute
  // It creates a message
  $('input[type="button"]').click(function () {
    var message = "Your information has been checked. We'll contact you soon.";
    $("#confirmation-message").text(message).show();
    // This function sets a timer that hides the confirmation message after 5 seconds
    setTimeout(function () {
      $("#confirmation-message").hide();
    }, 5000);
  });

  // This code targets the form element with the ID "registration-form" and attaches a submit event handler to it.
  $("#registration-form").submit(function (e) {
    // It prevents the default form submission behavior (for example reloading the page)
    e.preventDefault();

    // Retrieve and store the username and password in local storage
    var username = $("#username").val();
    var password = $("#password").val();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the index.html page
    window.location.href = "index.html";
  });
  // When a ".more-info" link is clicked, open the link in a new tab
  $(document).on("click", ".more-info", function () {
    var link = $(this).attr("href");
    window.open(link, "_blank");
  });
});
