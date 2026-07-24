"use strict";

function setCurrentYear() {
  const yearElement = document.getElementById("current-year");

  if (!yearElement) {
    return;
  }

  yearElement.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setCurrentYear);
} else {
  setCurrentYear();
}
