moonwalker.directive("destinationEnter", function() {
  return function (scope, element) {
    element.bind("mouseover", function() {
      element.children().css("visibility", "visible");
    });
  }
});

moonwalker.directive("destinationLeave", function() {
  return function (scope, element) {
    element.bind("mouseleave", function() {
      element.children().css("visibility", "hidden");
    });
  }
});
