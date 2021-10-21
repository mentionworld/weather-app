updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let classExitforFormat = document.getElementById("text-output");
  if (classExitforFormat.classList.contains("underline")) {
    classExitforFormat.classList.remove("underline");
  } else {
    classExitforFormat.classList.add("underline");
  }
};

alignText = (elem, alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");

  for (let button of buttonList) {
    button.classList.remove("active");
  }
  elem.classList.add("active");
};
