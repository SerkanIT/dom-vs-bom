// DOM => Document Object Model //
// BOM => Browser Object Model //

// console.log(window.document);

// let pText = window.document.getElementsByClassName("first");
// console.log(pText);
// let pText2 = window.document.getElementsByClassName("second");
// console.log(pText2);
// let pText3 = window.document.querySelectorAll(".serkan")[0];

// pText.innerHTML = "<i>Hello World</i>";
// pText.innerText = "<i>Hello Diyorik</i>";
// pText.innerContent = "<i>Hello Serkanik</i>";
// console.log(pText.innerText);

let about = window.document.getElementsByClassName("nameSurname");
let ism = window.document.getElementsByClassName("names");
let soyism = window.document.getElementsByClassName("surname");
let vesism = window.document.getElementsByClassName("fullName");
let course = window.document.getElementsByClassName("studing");
let image = window.document.getElementsByClassName("me");

for (let i = 0; i < about.length; i++) {
  about[i].style.fontFamily = "Roboto, sans-serif";
  about[i].style.textAlign = "center";
  about[i].style.fontSize = "64px";
  ism[i].style.fontFamily = "Roboto, sans-serif";
  ism[i].style.textAlign = "center";
  ism[i].style.fontSize = "40px";
  soyism[i].style.fontFamily = "Roboto, sans-serif";
  soyism[i].style.textAlign = "center";
  soyism[i].style.fontSize = "34px";
  vesism[i].style.fontFamily = "Roboto, sans-serif";
  vesism[i].style.textAlign = "center";
  vesism[i].style.fontSize = "20px";
  course[i].style.fontFamily = "Roboto, sans-serif";
  course[i].style.textAlign = "center";
  course[i].style.fontSize = "18px";
  image[i].style.marginLeft = "450px";
}

