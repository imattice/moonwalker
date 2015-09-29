moonwalker.controller('HeaderCtrl', function HeaderCtrl($scope, $location, JumboFactory) {
    $scope.currentPath = $location.path();
    $scope.JumboFactory = JumboFactory;
    $scope.login = JumboFactory.login;
});
