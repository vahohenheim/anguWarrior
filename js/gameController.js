angular.module('myApp').controller('gameCtrl', function ($scope, message, user){
  $scope.msg = message.body;
  $scope.userName = user.name;
});

angular.module('myApp').controller('stateCtrl', function ($scope){
});

angular.module('myApp').controller('endCtrl', function ($scope){
});
