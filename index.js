function toggleMobileNav() {
  let mobileNav = document.querySelector("#mobile-nav");
  let state = window.getComputedStyle(mobileNav, null).display;

  if (state === "block") {
    mobileNav.style.display = "none";
  }
  if (state === "none") {
    mobileNav.style.display = "block";
  }
}

function fetchCarouselData() {
  let carouselJson = [];

  fetch("src/carousel-items.json").then(
    (response) => (carouselJson = response.json())
  );

  console.log(carouselJson);
}

function openFooterLinks(link) {
  let element;

  if (link === "popular") {
    element = document.querySelector("#footer-popular");
  } else if (link === "academics") {
    element = document.querySelector("#footer-academics");
  } else if (link === "govph") {
    element = document.querySelector("#footer-govph");
  } else if (link === "govlinks") {
    element = document.querySelector("#footer-govlinks");
  }

  let isVisible = window.getComputedStyle(element, null).display;

  if (isVisible === "flex") {
    element.style.display = "none";
  }
  if (isVisible === "none") {
    element.style.display = "flex";
  }
}
