moonwalker.directive("destinationHover", function() {
  return function (scope, element) {
    element.bind("mouseover", function() {
      element.children().css("visibility", "visible");
    });
    element.bind("mouseleave", function() {
      element.children().css("visibility", "hidden");
    });
  }
});

// can add mouseover and mouseleave to the same directive to achieve a hover effect.
moonwalker.directive('login', function() {
  return function (scope, element) {
    element.bind('mouseover', function() {
      element.addClass('active')
    });
    element.bind('mouseleave', function() {
      element.removeClass('active')
    });
  }
});
