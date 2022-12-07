const bodyNode = document.querySelector("body");

function updateDimensions() {
  let pW = document.querySelector("body").clientWidth;
  let pH = document.querySelector("body").clientHeight;

  document.querySelector("#pageWidth").textContent = `Body Width: ${pW}px`;
  document.querySelector("#pageHeight").textContent = `Body Height: ${pH}px`;
}

const resizeObserver = new ResizeObserver((entries) => {
  updateDimensions();
  console.log("Size changed");
});

resizeObserver.observe(bodyNode);

updateDimensions();
