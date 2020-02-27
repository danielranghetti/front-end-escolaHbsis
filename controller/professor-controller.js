escola.controller("professorController", function ($scope, $http) {
    $scope.professor = {codProfessor:'', nomeProfessor:'',sobrenomeProfessor:'', enderecoProfessor:'', telefoneProfessor:''}
 
    $scope.salvarProfessor = function(){
        console.log('Salvando professor');
        console.log($scope.professor);
        $http({method: 'POST', url:'http://localhost:8092/professor/salva', data: $scope.professor})
        .then(function(response){
            console.log(response.data);
            console.log(response.status)
        },function(response){
            console.log(response.data);
            console.log(response.status);
        });
    }
});