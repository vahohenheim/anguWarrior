angular.module('myApp').factory('ServiceRest', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://localhost:3000/');
  });
});
