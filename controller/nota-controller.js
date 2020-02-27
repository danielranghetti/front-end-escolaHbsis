escola.controller("notaController", function ($scope, $http) {
    $scope.nota = {codNota:'', notaPrimeira:'',notaSegunda:'', periodo:'', aluno:'',disciplina:''}
 
    $scope.salvarNota = function(){
        console.log('Salvando nota');
        console.log($scope.nota);
        $http({method: 'POST', url:'http://localhost:8092/nota/salva', data: $scope.nota})
        .then(function(response){
            console.log(response.data);
            console.log(response.status)
        },function(response){
            console.log(response.data);
            console.log(response.status);
        });
    }
});