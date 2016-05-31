angular.module('myApp').factory('UsersService', ['Restangular', function(Restangular){

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
