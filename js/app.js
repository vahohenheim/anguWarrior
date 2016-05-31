angular.module('myApp', ['ui.router','restangular']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    _.contains = _.includes;

    RestangularProvider.setBaseUrl('http://localhost:3000/');

    $urlRouterProvider.otherwise('/start');

    $stateProvider
      .state('start', {
        url: '/start',
        template: '<div>Vos informations :<button ui-sref="game">Lancer le jeu</button><div ui-view></div></div>',
      })
      .state('game', {
        url: '/game',
        controller: 'gameCtrl',
        resolve: {
						message : function(ServiceRest) {
              return UsersService.getUser(1);
						 }
					},
        template: '{{msg}}'
      })
      .state('state1', {
        url: '/state1',
        controller: 'stateCtrl',
        template: ''
      })
      .state('state2', {
        url: '/state2',
        controller: 'stateCtrl',
        template: ''
      })
      .state('state3', {
        url: '/state3',
        controller: 'stateCtrl',
        template: ''
      })
      .state('end', {
        url: '/end',
        controller: 'endCtrl',
        template: ''
      });
  });
