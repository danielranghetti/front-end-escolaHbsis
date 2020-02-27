const escola = angular.module('escola', ['ngRoute']);

escola.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when("/nova-turma", { templateUrl: 'view/add-Turma.html', controller:'turmaController'})
        .when("/consulta-turma", { templateUrl: 'view/consulta-turma.html', controller:'turmaController'})
        .when("/edita-turma", { templateUrl: 'view/edita-turma.html', controller:'turmaController'})

        .when("/nova-instituicao", {templateUrl:'view/add-instituicao.html', controller:'instituicaoController'})
        .when("/consulta-instituicao", {templateUrl:'view/consulta-instituicao.html', controller:'instituicaoController'})
        
        .when("/boletim", {templateUrl:'view/extrair-boletim.html', controller:'boletimController'})

        .when("/nova-nota", {templateUrl:'view/add-nota.html', controller:'notaController'})

        .when("/novo-aluno", {templateUrl:'view/add-aluno.html', controller:'alunoController'})
        .when("/consulta-aluno", {templateUrl:'view/consulta-aluno.html', controller:'alunoController'})

        
        
        
        .otherwise({ redirectTo: '/' });

   
}]);

escola.controller("mainController", function($scope, $location){
    $scope.$location = $location;
    
    });


