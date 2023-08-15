"use strict";

const imageEl = document.getElementById("image-carousal");

document.addEventListener("DOMContentLoaded", function () {
  new Slide("#image-carousal").mount();
});
