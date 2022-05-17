//start toggel icons navbar//
let closer = document.getElementById("closer");

let toggel = document.getElementById("toggel");

toggel.addEventListener("click", function () {
  closer.style.display = "block";
  toggel.style.display = "none";
});
closer.addEventListener("click", function () {
  closer.style.display = "none";
  toggel.style.display = "block";
});
//END toggel icons navbar//
//start ask us button//
$(window).ready(function () {
  let us = document.getElementById("us");
  let content = document.getElementById("content");
  let cut = document.getElementById("cut");

  us.onclick = function () {
    content.classList.add("active");
  };
  window.onscroll = function () {
    if (scrollY > 500) {
      $("#us").fadeIn(800);
    } else {
      $("#us").fadeOut(800);
    }
  };
  cut.addEventListener("click", function () {
    content.classList.remove("active");
  });
});
//End ask us button//
//start forms//
let name = document.getElementById("name");
let Email = document.getElementById("Email");
let Address = document.getElementById("Address");
let contact = document.getElementById("contact");
let City = document.getElementById("City");
let ID = document.getElementById("ID");
let send = document.getElementById("send");
var alerts = document.querySelector(".alert");

send.addEventListener("click", function () {
  if (name.value == "") {
    alerts.style.display = "block";
  } else {
    alerts.style.display = "none";
  }

  if (Email.value == "") {
    document.getElementById("alert.Email").style.display = "block";
  } else {
    document.getElementById("alert.Email").style.display = "none";
  }
  if (Address.value == "") {
    document.getElementById("alert.Address").style.display = "block";
  } else {
    document.getElementById("alert.Address").style.display = "none";
  }
  if (contact.value == "") {
    document.getElementById("alert.contact").style.display = "block";
  } else {
    document.getElementById("alert.contact").style.display = "none";
  }
  if (City.value == "") {
    document.getElementById("alert.city").style.display = "block";
  } else {
    document.getElementById("alert.city").style.display = "none";
  }
  if (ID.value == "") {
    document.getElementById("alert.ID").style.display = "block";
  } else {
    document.getElementById("alert.ID").style.display = "none";
  }
});
//End forms//
//start pluign//
new WOW().init();
//End pluign//
