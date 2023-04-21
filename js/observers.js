// NAV BAR

const Navbar = document.querySelector(".nav_content");
const sectionOne = document.querySelector(".nav_transformer");

const NavOptions = {
  rootMargin: "200px 0px 0px 0px"
};

const NavbarObserver = new IntersectionObserver(function(
  entries,
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      Navbar.classList.add("nav-scrolled");
    } else {
      Navbar.classList.remove("nav-scrolled");
    }
  });
},
NavOptions);

NavbarObserver.observe(sectionOne);

// NAV BAR ACTIVE CLASS

var btnContainer = document.querySelector(".nav-items");
var btns = btnContainer.getElementsByTagName("a");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

//FOOTER ACCORDIAN IN MOBILE VIEW

var acc = document.getElementsByClassName("footer_title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var footer_list = this.nextElementSibling;
    if (footer_list.style.maxHeight){
      footer_list.style.maxHeight = null;
      footer_list.classList.remove("active");
    } else {
      let active = document.querySelectorAll(".accordian .footer_title.active");
      for(let j = 0; j < active.length; j++){
        active[j].classList.remove("active");
        active[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active");
      footer_list.style.maxHeight = footer_list.scrollHeight + "px";
    }
  });
}
