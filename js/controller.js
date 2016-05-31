angular.module('myApp', ['ui.router','restangular']);
angular.module('myApp').config(function($stateProvider, $urlRouterProvider, ServiceRest) {
    _.contains = _.includes;

    $urlRouterProvider.otherwise('/start');
    $stateProvider
      .state('start', {
        url: '/start',
        template: '<div>You are borned<br><button ui-sref="birth.childhood">childhood</button><div ui-view></div></div>',
      })
      .state('end', {
        url: '/end',
        controller: function($scope, message){
          $scope.msg = message;
        },
        resolve: {
						message : function(serviceRestAngular) {
              BingRestangular.one('users').getList()
						 }
					},
        template: '<div>{{msg}} <br> You are grown up<br><button ui-sref="birth.childhood.study">study</button><br><button ui-sref="birth.childhood.career">career</button><div ui-view></div></div>'
      });
  });
