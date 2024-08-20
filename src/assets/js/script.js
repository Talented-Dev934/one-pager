const flag = document.querySelector(".peer");
flag.addEventListener("input", function () {
  if (flag.checked) {
    document.documentElement.setAttribute("overflow-y", "hidden");
  } else {
    document.documentElement.setAttribute("overflow-y", "hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const headlineElements = document.querySelectorAll("#slide-in-left");
  const textElements = document.querySelectorAll("#slide-in-right");

  function changeClass(func, element, classNameList) {
    if (func === "add") {
      for (let className of classNameList) {
        element.classList.add(className);
      }
    } else if (func === "remove") {
      for (let className of classNameList) {
        element.classList.remove(className);
      }
    }
  }
  function checkSlide() {
    headlineElements.forEach((element) => {
      const slideInAt =
        document.body.scrollTop + window.innerHeight - element.clientHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast =
        document.body.scrollTop < element.offsetTop + element.clientHeight;

      if (isHalfShown && isNotScrolledPast) {
        changeClass("remove", element, ["opacity-0", "translate-x-left"]);
        changeClass("add", element, ["opacity-100", "translate-x-0"]);
      } else {
        changeClass("remove", element, ["opacity-100", "translate-x-0"]);
        changeClass("add", element, ["opacity-0", "translate-x-left"]);
      }
    });

    textElements.forEach((element) => {
      const slideInAt =
        document.body.scrollTop + window.innerHeight - element.clientHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast =
        document.body.scrollTop < element.offsetTop + element.clientHeight;

      if (isHalfShown && isNotScrolledPast) {
        changeClass("remove", element, ["opacity-0", "translate-x-full"]);
        changeClass("add", element, ["opacity-100", "translate-x-0"]);
      } else {
        changeClass("remove", element, ["opacity-100", "translate-x-0"]);
        changeClass("add", element, ["opacity-0", "translate-x-full"]);
      }
    });
  }
  document.body.addEventListener("scroll", checkSlide);
  checkSlide();
});
