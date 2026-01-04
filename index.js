const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");
const refreshBtn = document.getElementById("refreshBtn");
const copyBtn = document.getElementById("copyBtn");
const checkbox = document.getElementsByClassName("checkbox");
const passText = document.getElementsByClassName("passText");

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "1234567890";
const Symbol = "~!@#$%^&*`~);'.€(*<>:{}+_=-/-+";

let pass = "";
let finalPass = "";

rangeValue.textContent =
  rangeValue.textContent = `Password Length ${range.value}`;

const sliderHanderler = () => {
  rangeValue.textContent = `Password Length ${range.value}`;

  if (pass.length < 1) {
    return;
  }

  for (let i = 1; i <= range.value; i++) {
    const index = Math.floor(Math.random() * pass.length);
    finalPass += pass[index];
  }
  passText[0].textContent = finalPass;
  finalPass = "";
};

const checkboxHandeler = () => {
  if (checkbox[0].checked) {
    const p = pass.replaceAll(UpperCase, "");
    pass = p;
    pass += UpperCase;
  } else {
    const p = pass.replaceAll(UpperCase, "");
    pass = p;
  }

  if (checkbox[2].checked) {
    const p = pass.replaceAll(LowerCase, "");
    pass = p;
    pass += LowerCase;
  } else {
    const p = pass.replaceAll(LowerCase, "");
    pass = p;
  }

  if (checkbox[4].checked) {
    const p = pass.replaceAll(Number, "");
    pass = p;
    pass += Number;
  } else {
    const p = pass.replaceAll(Number, "");
    pass = p;
  }

  if (checkbox[6].checked) {
    const p = pass.replaceAll(Symbol, "");
    pass = p;
    pass += Symbol;
  } else {
    const p = pass.replaceAll(Symbol, "");
    pass = p;
  }
};

checkboxHandeler();
sliderHanderler();

range.addEventListener("input", sliderHanderler);
checkbox[0].addEventListener("input", checkboxHandeler);
checkbox[2].addEventListener("input", checkboxHandeler);
checkbox[4].addEventListener("input", checkboxHandeler);
checkbox[6].addEventListener("input", checkboxHandeler);

refreshBtn.addEventListener("click", sliderHanderler);

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passText[0].textContent)
    .then(() => {
      alert("Copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy:", err);
    });
});
