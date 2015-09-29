moonwalker.factory('JumboFactory', function JumboFactory() {
  var factory = {};
  factory.login = false;

  factory.showLogin = function () {
    console.log(factory.login);
  }

  return factory;
});
