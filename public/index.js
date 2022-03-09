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
