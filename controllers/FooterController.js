moonwalker.controller('FooterCtrl', function FooterCtrl($scope, $location) {
    $scope.currentPath = $location.path();
});
