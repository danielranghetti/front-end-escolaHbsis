escola.controller("boletimController", function ($scope, $http) {

    $scope.notaDTO = {aluno:'', format:'', periodo: ''}
   
       $scope.extrairBoletim = function(){
        console.log('exporta Boletim')
        console.log($scope.notaDTO.aluno)
    $http({method:'GET', url:'http://localhost:8092/nota/report/'+ $scope.notaDTO.format + '/' + $scope.notaDTO.aluno + '/' + $scope.notaDTO.periodo})
    .then(function(response){
        Console.log(response.status)
        console.log('200');
    },function(response){

    });
}

});
