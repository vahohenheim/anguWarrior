angular.module('myApp').factory('ServiceRest', ['Restangular', function(Restangular){

    RestangularConfigurer.setBaseUrl('http://localhost:3000/');
    // this is service object with list of methods in it
    // this object will be used by controller
    var service = {
        getExamples: getExamples,
        getExample: getExample
    };

    // get examples from server by using Restangular
    function getExamples(){
        return Restangular.one('posts').getList();
    }

    // get example with given id from server by using Restangular
    function getExample(exampleId){
        return Restangular.one('/posts/'+exampleId).get();
    }

    return service;

}]);
