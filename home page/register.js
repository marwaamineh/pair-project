// Wait for the document to be fully loaded
$(document).ready(function () {
  // Registration form submission
  $("#registration-form").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    // Store registration information in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the main page or login page
    window.location.href = "index.html"; // Change to the appropriate page
  });
});


<div class="moreInfo" id="moreInfo"> <!-- Add the id "moreInfo" here -->
  <p id="price">50DT</p>
  <p id="openingHours">10AM-11PM</p>
  <p id="description">It is the highest point in Seoul, offering 360-degree views of the entire city. It was also the very first general radio wave tower in South Korea and continues to broadcast signals for media outlets such as SBS, MBC, KBS, and FM. Construction on Namsan Tower began back in 1969 and the tower began broadcasting in 1971</p>
</div>

