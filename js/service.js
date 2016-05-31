angular.module('myApp').factory('ServiceRest', ['Restangular', function(Restangular){

    RestangularConfigurer.setBaseUrl('http://localhost:3000/');
    // this is service object with list of methods in it
    // this object will be used by controller
    var service = {
        getUser: getUser,
        getState: getState
    };

    // get examples from server by using Restangular
    function getUser(idUser){
        return Restangular.one('/users/'+idUser).get();
    }

    function getState(idState){
      return Restangular.one('/states/'+idState).get();
    }

    return service;

}]);
