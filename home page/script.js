$(document).ready(function () {
  // When the "Explore Now" button is clicked
  $('input[type="button"]').click(function () {
    // Get the values from the form inputs
    var location = $('input[name="location"]').val();
    var date = $('input[name="date"]').val();
    var people = $('input[name="people"]').val();

    // Here, you can use the values for further processing, e.g., for a search.

    // Display the confirmation message
    var message = "Your information has been checked. We'll contact you soon.";
    $("#confirmation-message").text(message).show();

    // Animate the message and show it
    $("#confirmation-message").addClass("show");

    // You can hide the message after a certain time (e.g., 5 seconds)
    setTimeout(function () {
      $("#confirmation-message").hide();
    }, 5000);
  });

  // Registration form submission
  $("#registration-form").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    // Store registration information in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the main page (index.html)
    window.location.href = "index.html"; // Change to the appropriate page
  });

  // Handle form submission
  $("#answer-form").submit(function (e) {
    e.preventDefault();
    var answer = $("#answer").val();

    // Clear the input field
    $("#answer").val("");

    // Display the user's answer
    $("#user-answers ul").append("<li>" + answer + "</li>");

    // Populate the hotels section with hotel information based on the answer
    var hotelsList = $("#hotels-list");
    hotelsList.empty(); // Clear existing content

    // You can replace this with actual data for each country
    // For now, let's add a sample hotel for "France" as an example
    if (answer.toLowerCase() === "tunisia") {
      hotelsList.append(
        '<div class="hotel">' +
          '<div class="hotel-info">' +
          "<h3>Movenpick Hotel Du Lac Tunis</h3>" +
          "<p>" +
          "Movenpick Hotel du Lac Tunis is situated near Tunis Lake in " +
          "the heart of Tunis's Les Berges du Lac district, close to many " +
          "embassies and multi-national companies. Our five-star hotel is " +
          "only 10 minutes from Tunis-Carthage International Airport (TUN) " +
          "and 15 minutes from downtown Tunis." +
          "</p>" +
          '<button class="more-info">More Info</button>' +
          '<button class="book-now">Book Now</button>' +
          "</div>" +
          '<div class="hotel-image">' +
          '<img src="images/movenpick-hotel-du-lac.jpg" alt="Hotel 1" />' +
          "</div>" +
          "</div>"
      );
    }
    // Add more 'if' statements for other countries and hotels

    // Show the hotels section
    $(
      "#hotels-section h2, #hotels-section p, #answer-form, #user-answers"
    ).show();
  });

  // Handle clicks on "more-info" buttons to open links
  $(document).on("click", ".more-info", function () {
    var link = $(this).attr("href");
    window.open(link, "_blank");
  });
});
