escola.controller("disciplinaController", function ($scope, $http) {
    $scope.disciplina = {codDisciplina:'',nomeDisciplina:'',professor:''};


    $scope.salvarDisciplina = function(){
        console.log('salvando disciplina')
        console.log($scope.disciplina)
        $http({ method: 'POST', url: 'http://localhost:8092/disciplina/salva', data: $scope.disciplina})
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        },function(response){
            console.log(response.data);
            console.log(response.status);
        });
    };
});