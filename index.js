const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// Making Schema Box
let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");
HTMLButton.onclick = function () {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLButton.innerText = "Codes Copied";
};
// Various Create Box
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSButton");
CSSButton.onclick = function () {
  CSSBox.select();
  document.execCommand("copy");
  CSSButton.innerText = "Codes Copied";
};
// Read Box
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSButton");
JSButton.onclick = function () {
  JSBox.select();
  document.execCommand("copy");
  JSButton.innerText = "Codes Copied";
};

// Update Box
let Box = document.getElementById("Box");
let Button = document.getElementById("Button");
Button.onclick = function () {
  Box.select();
  document.execCommand("copy");
  Button.innerText = "Codes Copied";
};

//Delete Box
let JSB = document.getElementById("JSB");
let JSBu = document.getElementById("JSBu");
JSBu.onclick = function () {
  JSB.select();
  document.execCommand("copy");
  JSBu.innerText = "Codes Copied";
};
