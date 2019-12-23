document.getElementById("button-for-modal").onclick = function() {
  document.getElementById("modal").classList.add("modal__active");
};

document.getElementById("close-modal").onclick = function() {
  document.getElementById("modal").classList.remove("modal__active");
};
