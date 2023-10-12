function showMore(button) {
  var moreInfo = button.nextElementSibling;

  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
}
