let elLabel = document.querySelector(".number-label");
let elRange = document.querySelector("#number");

elRange.addEventListener("input", () => {
  let elNum = elRange.value;

  elLabel.innerText = elNum;
});


