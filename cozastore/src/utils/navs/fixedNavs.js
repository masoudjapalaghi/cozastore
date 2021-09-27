import $ from "jquery";
$(window).scroll(function () {
  if ($(this).scrollTop() >= 43) {
    $(".container-menu-desktop").addClass("fix-menu-desktop");
  } else {
    $(".container-menu-desktop").removeClass("fix-menu-desktop");
  }
});
