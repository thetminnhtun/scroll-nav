export default function scrollNav(options = {}) {
  const defaults = {
    navElements: "",
    activeClass: "current",
    inititalTop: 0,
  };

  let settings = { ...defaults, ...options };
  let navLinks;

  if (typeof settings.navElements !== "string") {
    console.error(
      `options.navElements "${options.navElements}" must be string.`
    );
    return;
  }

  try {
    navLinks = document
      .querySelector(settings.navElements)
      .querySelectorAll("a");
  } catch (e) {
    console.error(
      `options.navElements "${options.navElements}" must has child "A" Tag.`
    );
    return;
  }

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY + settings.inititalTop;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (section) {
        if (section.offsetTop <= fromTop) {
          navLinks.forEach((el) => {
            el.classList.remove(settings.activeClass);
          });
          link.classList.add(settings.activeClass);
        }
      } else {
        console.error(`The element with ID "${link.hash}" not found.`);
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - settings.inititalTop,
          behavior: "smooth",
        });
      }
    });
  });
}