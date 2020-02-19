const escola = angular.module('escola', ['ngRoute']);

escola.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when("/nova-turma", { templateUrl: 'view/add-Turma.html', controller:'turmaController' })
        .when("/nova-instituicao", {templateUrl:'view/add-instituicao.html', controller:'instituicaoController'})
        .when("/boletim", {templateUrl:'view/extrair-boletim.html', controller:'boletimController'})
        .otherwise({ redirectTo: '/' });

   
}]);

escola.controller("mainController", function($scope, $location){
    $scope.$location = $location;
    
    });


