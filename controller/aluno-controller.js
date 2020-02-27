escola.controller("alunoController", function ($scope, $http) {
    $scope.alunoDTO = {
        codAluno: '', nomeAluno: '', sobrenomeAluno: '', responsavel: '',
        enderecoAluno: '', telefoneAluno: '', matricula: '', alunoTurmaDTOS: [{codTurma:''}]
    };
    $scope.salvarAluno = function(){
        console.log('salvando aluno')
        console.log($scope.alunoDTO)
        $http({ method: 'POST', url: 'http://localhost:8092/aluno', data: $scope.alunoDTO})
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        },function(response){
            console.log(response.data);
            console.log(response.status);
        });
    }
    $scope.pesquisaAluno = function () {

        $http({ method: 'GET', url: 'http://localhost:8092/aluno/todos' })
            .then(function (response) {
                $scope.alunos = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
                
            });

       
    };
    $scope.exibirAluno = function (a) {
        $scope.alunos = { codAluno: a.codAluno, nomeAluno: a.nomeAluno, sobrenomeAluno: a.sobrenomeAluno, responsavel: a.responsavel,
            enderecoAluno: a.enderecoAluno, telefoneAluno: a.telefoneAluno, matricula: a.matricula, alunoTurmaDTOS: a.alunoTurmaDTOS}
    };
    



});