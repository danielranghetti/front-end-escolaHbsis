escola.controller("instituicaoController", function ($scope, $http) {

    $scope.instituicaoDTO = {codInstituicao: '', nomeInstituicao: '', telefoneInstituicao: '', enderecoInstituicao:''}

    $scope.saveInstituicao = function () {
        console.log("SALVANDO Instituiçao")
        console.log($scope.instituicaoDTO);
        $http({ method: 'POST', url: 'http://localhost:8092/instituicao' , data: $scope.instituicaoDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status)
            });
    }
});
