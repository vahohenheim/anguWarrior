angular.module('myApp').controller('gameCtrl', function ($scope, message){
  $scope.msg = message.body;
});

angular.module('myApp').controller('stateCtrl', function ($scope){
});

angular.module('myApp').controller('endCtrl', function ($scope){
});
