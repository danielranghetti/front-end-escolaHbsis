escola.controller("boletimController", function ($scope, $http) {

    $scope.notaDTO = {aluno:'', format:''}

    $scope.extrairBoletim = function(){
        console.log('exporta Boletim')
        console.log($scope.notaDTO.aluno)
    $http({method:'GET', url:'http://localhost:8092/nota/report/'+ $scope.notaDTO.format + '/' + $scope.notaDTO.aluno})
    .then(function (response) {
        console.log(response.data);
    }, function (response) {
        console.log('Error ao Gerar o boletim');
        
    });
}

});
