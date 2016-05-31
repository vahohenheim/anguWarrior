angular.module('myApp').factory('UsersService', ['Restangular', function(Restangular){

  RestangularConfigurer.setBaseUrl('http://localhost:3000/');

  let users = Restangular.all('users');

  return {
    getUsers: function(){
      return users.getList();
    },
    getUser: function(uid){
      return Restangular.one('users', uid).get();
    },
    newUser: function(userData){
      return users.post(userData);
    },
    updateUser: function(userData){
      return users.put(userData);
    }

  }
}])
