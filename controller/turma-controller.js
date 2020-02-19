escola.controller("turmaController", function ($scope, $http) {
    $scope.turmaDTO = { codTurma: '', periodoTurma: '', instituicao: '' };

    $scope.saveTurma = function () {
        console.log("SALVANDO TURMA")
        console.log($scope.turmaDTO);
        $http({ method: 'POST', url: 'http://localhost:8092/turma' , data: $scope.turmaDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status)
            });
    }

});
