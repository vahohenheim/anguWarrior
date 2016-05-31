angular.module('myApp').factory('StatesService', ['Restangular', function(Restangular){

  let states = Restangular.all('states');

  return {
    getStates: function(){
      return states.getList();
    },
    getState: function(uid){
      return Restangular.one('states', uid).get();
    }

  }
}])
