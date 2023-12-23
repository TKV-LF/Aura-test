var themeToggleDarkIcon = $("#theme-toggle-dark-icon");
var themeToggleLightIcon = $("#theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.removeClass("hidden");
} else {
  themeToggleDarkIcon.removeClass("hidden");
}

var themeToggleBtn = $("#theme-toggle");

themeToggleBtn.on("click", function () {
  // Toggle icons inside button
  themeToggleDarkIcon.toggleClass("hidden");
  themeToggleLightIcon.toggleClass("hidden");

  // If set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      $("html").addClass("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      $("html").removeClass("dark");
      localStorage.setItem("color-theme", "light");
    }

    // If NOT set via local storage previously
  } else {
    if ($("html").hasClass("dark")) {
      $("html").removeClass("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      $("html").addClass("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// Dropdown
var dropdownToggleBtns = $("[data-dropdown-toggle]");

dropdownToggleBtns.each(function () {
  var dropdownToggleBtn = $(this);
  dropdownToggleBtn.on("click", function () {
    var dropdownId = dropdownToggleBtn.attr("data-dropdown-toggle");
    var dropdown = $("#" + dropdownId);

    dropdown.toggleClass("hidden");
    dropdown.toggleClass("block");
  });
});

// Carousel
var carousel = $("#default-carousel");
var carouselItems = carousel.find("[data-carousel-item]");
var carouselPrevBtn = carousel.find("[data-carousel-prev]");
var carouselNextBtn = carousel.find("[data-carousel-next]");
var carouselIndicators = carousel.find("[data-carousel-slide-to]");

carouselPrevBtn.on("click", function () {
  var currentItem = Array.from(carouselItems).findIndex(function (item) {
    return !item.classList.contains("hidden");
  });

  var prevItemIndex = currentItem - 1;
  if (prevItemIndex < 0) {
    prevItemIndex = carouselItems.length - 1;
  }

  carouselItems.eq(currentItem).addClass("hidden");
  carouselItems.eq(prevItemIndex).removeClass("hidden");

  carouselIndicators.eq(currentItem).attr("aria-current", "false");
  carouselIndicators.eq(prevItemIndex).attr("aria-current", "true");
});

carouselNextBtn.on("click", function () {
  var currentItem = Array.from(carouselItems).findIndex(function (item) {
    return !item.classList.contains("hidden");
  });

  var nextItemIndex = currentItem + 1;
  if (nextItemIndex >= carouselItems.length) {
    nextItemIndex = 0;
  }

  carouselItems.eq(currentItem).addClass("hidden");
  carouselItems.eq(nextItemIndex).removeClass("hidden");

  carouselIndicators.eq(currentItem).attr("aria-current", "false");
  carouselIndicators.eq(nextItemIndex).attr("aria-current", "true");
});

carouselIndicators.each(function (index) {
  var indicator = $(this);
  indicator.on("click", function () {
    carouselItems.each(function (itemIndex) {
      if (itemIndex === index) {
        $(this).removeClass("hidden");
        indicator.attr("aria-current", "true");
      } else {
        $(this).addClass("hidden");
        indicator.attr("aria-current", "false");
      }
    });
  });
});

//handle the form submission
// Handle the form submission
$("form").on("submit", function (event) {
  event.preventDefault();

  var directURL = "booking.html";
  var adult = $("#adult-input").val();
  var kids = $("#kids-input").val();

  var dateFrom  = $('input[name="date-from-input"]').val();
  var timeFrom  = $('#time-from-input').val();


  var url =
    directURL +
    "?adult=" +
    encodeURIComponent(adult) +
    "&kids=" +
    encodeURIComponent(kids) +
    "&dateFrom=" +
    encodeURIComponent(dateFrom) +
    "&timeFrom=" +
    encodeURIComponent(timeFrom);

  window.location.href = url;
});
