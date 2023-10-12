//The function showMore, is designed to toggle the visibility of an HTML element when called
function showMore(button) {
  var moreInfo = button.nextElementSibling;

  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
}
