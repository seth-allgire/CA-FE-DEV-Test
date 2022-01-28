var imagePosition = 1;
showImage(imagePosition);

function progressSlides(n) {
  showImage((imagePosition += n));
}

function currentImage(n) {
  showImage((imagePosition = n));
}

function showImage(n) {
  var i;
  var images = document.getElementsByClassName("carousel-image");
  var carouselNavs = document.getElementsByClassName("carousel-nav");

  if (n > images.length) {
    imagePosition = 1;
  }
  if (n < 1) {
    imagePosition = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < carouselNavs.length; i++) {
    carouselNavs[i].className = carouselNavs[i].className.replace(
      " carousel-nav-selected",
      ""
    );
  }
  images[imagePosition - 1].style.display = "block";
  carouselNavs[imagePosition - 1].className += " carousel-nav-selected";
}
