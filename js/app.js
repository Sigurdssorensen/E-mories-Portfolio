const hamburger = document.getElementById('hamburger');
const expandedNav = document.getElementById('expanded-nav');
const navOverlay = document.getElementById('nav-overlay');
const navbar = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

// This code snippet was adapted from [1]
const observer = new IntersectionObserver(entries => {
  for(let entry of entries) {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('page-slide');
      console.log('added');
    } else {
      if(entry.target.classList.contains('page-slide')) {
        entry.target.classList.remove('page-slide');
      }
    }
  }
});

for(let page of pages) observer.observe(page);
// End of code snippet [1]

let navbarExpanded = false;

scrollToSection = (id) => {
  if(navbarExpanded) toggleNavbar();
  const offset = -70;
  const pos = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({top: pos, behavior: 'smooth'});
}

toggleNavbar = () => {
  navbarExpanded = !navbarExpanded;
  if (navbarExpanded) {
    expandedNav.style.transform = "translateX(0)";
    navOverlay.hidden = false;
    navOverlay.style.opacity = "1";

    for(let item of navItems) {
      item.classList.add('nav-li-init');
    }

  } else {
    expandedNav.style.transform = "translateX(-100%)";
    navOverlay.hidden = true;
    navOverlay.style.opacity = "0";

    for(let item of navItems) {
      item.classList.remove('nav-li-init');
    }

  }
  const icon = hamburger.innerHTML;
  (icon === 'menu') ? hamburger.innerHTML = 'clear'  : hamburger.innerHTML = 'menu';
}

navOverlay.addEventListener("click", toggleNavbar);

toggleNavBackground = () => {
  const viewportWidth = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
  if(viewportWidth > 1024) {
    this.scrollY > 290 ? navbar.classList.add('navbar-white-bg') : navbar.classList.remove('navbar-white-bg');
  } else {
    this.scrollY > 15 ? navbar.classList.add('navbar-white-bg') : navbar.classList.remove('navbar-white-bg');
  }
}

window.addEventListener("scroll", toggleNavBackground , false);