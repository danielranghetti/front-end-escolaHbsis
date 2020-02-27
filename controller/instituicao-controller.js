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

    $scope.toInit = function () {

        $http({ method: 'GET', url: 'http://localhost:8092/instituicao/consulta' })
            .then(function (response) {
                $scope.instituicoes = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });                              
    };

    $scope.exibirinstituicao = function (i) {
        $scope.instituicoes = {codInstituicao: i.codInstituicao, nomeInstituicao: i.nomeInstituicao, 
            telefoneInstituicao: i.telefoneInstituicao, enderecoInstituicao: i.enderecoInstituicao }
    };
});
