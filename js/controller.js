

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
    _.contains = _.includes;

    $urlRouterProvider.otherwise('/start');
    $stateProvider
      .state('start', {
        url: '/start',
        template: '<div>Vos informations :<button ui-sref="game">Lancer le jeu</button><div ui-view></div></div>',
      })
      .state('game', {
        url: '/game',
        controller: 'appCtrl',
        template: ''
      })
      .state('state1', {
        url: '/state1',
        controller: 'appCtrl',
        template: ''
      })
      .state('state2', {
        url: '/state2',
        controller: 'appCtrl',
        template: ''
      })
      .state('state3', {
        url: '/state3',
        controller: 'appCtrl',
        template: ''
      })
      .state('end', {
        url: '/end',
        resolve: {
						message : function(ServiceRest) {
              return ServiceRest.getExample();
						 }
					},
        controller: 'endCtrl',
        template: ''
      });
  });

angular.module('myApp').controller('startCtrl', function ($scope){
});

angular.module('myApp').controller('gameCtrl', function ($scope){
});

angular.module('myApp').controller('stateCtrl', function ($scope){
});

angular.module('myApp').controller('endCtrl', function ($scope){
});
