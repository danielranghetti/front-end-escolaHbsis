escola.controller("turmaController", function ($scope, $http,$routeParams) {
    $scope.turmaDTO = { codTurma: '', periodoTurma: '', instituicao: '' };
    $scope.vizualizarTurma = {};

    $scope.saveTurma = function () {
        console.log("SALVANDO TURMA")
        console.log($scope.turmaDTO);
        $http({ method: 'POST', url: 'http://localhost:8092/turma', data: $scope.turmaDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });
    };

    $scope.pesquisaTurma = function () {

        $http({ method: 'GET', url: 'http://localhost:8092/turma/consulta' })
            .then(function (response) {
                $scope.turmas = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });

       
    };
    $scope.instituicaoTurma = function(){
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
    $scope.exibirTurma = function (t) {
        $scope.turmas = { codTurma: t.codTurma, periodoTurma: t.periodoTurma, instituicao: t.instituicao }
    };
    $scope.dadosTurma = function (id, codTurma,periodoTurma,instituicao) {
        $scope.turmaDados.id = id; 
        $scope.turmaDados.codTurma = codTurma;
        $scope.turmaDados.periodoTurma =periodoTurma;
        $scope.turmaDados.instituicao =instituicao;
    };


    $scope.exibirinstituicao = function (i) {
        $scope.instituicoes = { codInstituicao: i.codInstituicao }
    };


    $scope.saveInstiruicaoTurma = function (instituicao) {
        console.log($scope.turmaDTO);
        $scope.turmaDTO.instituicao = instituicao;
        console.log($scope.turmaDTO.instituicao);
        $scope.saveTurma();
    }

    $scope.delete = function(id){
        $http({method: 'DELETE', url: 'http://localhost:8092/turma/deleta/' + id})
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            $scope.pesquisaTurma();
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });
    }
    $http.get('http://localhost:8092/turma/altera/' +  $routeParams.id) 
            .then(function(response){
                $scope.vizualizarTurma = response.data;
            },function(response){
                console.log("error");
            });

    $scope.edita = function(id){
        console.log("atualizando")
        $scope.exibirTurma();
        $http({method: 'PUT', url: 'http://localhost:8092/turma/altera/' , data: $scope.vizualizarTurma})
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            $scope.pesquisaTurma();
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });

    };
});
