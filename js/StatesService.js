angular.module('myApp').factory('StatesService', ['Restangular', function(Restangular){

  RestangularConfigurer.setBaseUrl('http://localhost:3000/');

  let users = Restangular.all('states');

  return {
    getStates: function(){
      return states.getList();
    },
    getState: function(uid){
      return Restangular.one('states', uid).get();
    }

  }
}])
