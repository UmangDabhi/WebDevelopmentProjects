const containerEl = document.querySelector(".container");

for (let i = 0; i < 50; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");

  const colorSpanEl = document.createElement("span");
  colorSpanEl.classList.add("color-code");

  const copyButtonEl = document.createElement("button");
  copyButtonEl.innerHTML = "Copy";

  const colorCode = "#" + randomColor();
  colorSpanEl.innerHTML = colorCode;
  colorContainerEl.style.background = colorCode;

  copyButtonEl.addEventListener("click", () => {
    copyColor(colorCode);
  });

  colorContainerEl.appendChild(colorSpanEl);
  colorContainerEl.appendChild(copyButtonEl);

  containerEl.appendChild(colorContainerEl);
}
function randomColor() {
  const char = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * char.length);
    colorCode += char.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

function copyColor(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to Clipboard " + text);
    })
    .catch((err) => {
      console.log("failed to copy the color" + err);
    });
}
