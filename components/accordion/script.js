const acordion = document.getElementById("acordion");

acordion.addEventListener("click", (e) => {
  const label = e.target.parentElement;

  if (label.matches("label")) {
    const i = label.querySelector("i");
    if (i.classList.contains("rotate-0")) {
      i.classList.remove("rotate-0");
    } else {
      i.classList.add("rotate-0");
    }
  }
});
