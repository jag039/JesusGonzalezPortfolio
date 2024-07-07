document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll("#toolBar > a");

  window.addEventListener('scroll', () => {
      let currentSection = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSection}`) {
              link.classList.add('active');
          }
      });
  });
  document.addEventListener("scroll", function() {
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;
    var sections = document.querySelectorAll("section");

    sections.forEach(function(section) {
      var sectionTop = section.getBoundingClientRect().top + window.scrollY;

      if (sectionTop < pageBottom) {
        section.classList.add("visible");
      }
      //  else {
      //   section.classList.remove("visible");
      // }
    });
  });
});