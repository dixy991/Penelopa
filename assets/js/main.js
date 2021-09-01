window.onscroll = function () {
  if (window.innerWidth > 1200) zaglavlje();
  navigacija();
};
window.onload = function () {
  setTimeout(() => {
    typingUvod();
  }, 3000);
};
//fiksno zaglavlje
function zaglavlje() {
  var heder = document.getElementById("heder");

  if (window.pageYOffset > 150) heder.classList.add("fixedNav");
  else heder.classList.remove("fixedNav");
  //   console.log(navoffset);
  //   console.log(window.pageYOffset);
  // var navoffset = heder.scrollTop;
}
//navigacija se prilagodjava kontentu
function navigacija() {
  var sections = document.querySelectorAll("section");
  var navLi = document.querySelectorAll("#nav-control li");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3)
      current = section.getAttribute("id");
    // console.log(current);
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.childNodes[0].dataset.scroll.toLowerCase() == current.toLowerCase())
      li.classList.add("active");
    // console.log(li.childNodes[0].dataset.scroll);
    // console.log("---------");
    // console.log(current.toLowerCase());
  });
}
//navigacija u responsu
function navigacijaCollapse() {
  var navUl = document.querySelector("#navigacija nav ul");
  var navColl = document.querySelector("#navbar-collapse");
  console.log(window.innerWidth);
  if (window.innerWidth < 1200) navColl.appendChild(navUl);
  // else $("#navigacija").appendChild(navUl);
}
//progres barovi se sire
var skillsSection = document.getElementById("skills");
var skillsHeight = skillsSection.clientHeight;
var skillsOffsetTop = skillsSection.offsetTop;
var delay = 0;
$(window).on("scroll.bar span", function () {
  if ($(this).scrollTop() >= skillsOffsetTop - skillsHeight / 3) {
    $(".bar span").each(function () {
      $(this)
        .delay(delay)
        .animate(
          {
            width: $(this).data("width") + "%",
            opacity: 1,
          },
          1500
        );
      delay += 200;
    });
    $(window).off("scroll.bar span");
  }
});
//ispis uvodnog teksta
var start = 0;
var speed = 50;
var tekst = `I am not Violeta. UI / UX Developer. Living In New York City.`;
var typingEl = document.getElementById("typing");
function typingUvod() {
  if (start < tekst.length) {
    if (tekst.charAt(start - 1) == ".") typingEl.innerHTML += "<br/>";
    typingEl.innerHTML += tekst.charAt(start);
    start++;
    setTimeout(typingUvod, speed);
  }
}
//carousel plugin
$(document).ready(function () {
  navigacijaCollapse();

  $(".owl-carousel").owlCarousel();
  //on hover focus
  $(".row-timeline").each(function () {
    $(this).hover(
      function () {
        $(this).addClass("timeline-active");
        $(this)
          .siblings()
          .addClass("timeline-inactive")
          .removeClass("timeline-active");
      },
      function () {
        $(this)
          .siblings()
          .removeClass("timeline-inactive")
          .removeClass("timeline-active");
        $(this).removeClass("timeline-inactive").removeClass("timeline-active");
        $(".row-timeline").first().addClass("timeline-active");
      }
    );
  });
  //toggle collapse nav - navigacija u responsu
  $("#heder button").click(function () {
    $("#navbar-collapse").slideToggle(500);
  });
  $("#navbar-collapse").click(function () {
    $("#navbar-collapse").hide();
  });
  //preloader
  $("#preloader .animation")
    .css({
      transform: "translate3d(0%,0,0)",
    })
    .parent()
    .delay(500)
    .fadeOut("slow");
  //, function () {
  //$(this).remove();
  //}
});
//carousel plugin
$(".owl-carousel").owlCarousel({
  rtl: false,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
