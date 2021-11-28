var moduloFuncionario = angular.module('moduloFuncionario', []);

moduloFuncionario.controller("cadFuncionarioController", function ($scope, $http) {
    $http.get('http://localhost:8080/buscaFuncionarios').then(function(response){
        $scope.funcionarios = response.data;
    })

    $scope.gravarFuncionario = function () {
        //alert("Create");
        $http.post('http://localhost:8080/inseriFuncionario/', {
            "cracha": $scope.funcionario.cracha, 
            "nome": $scope.funcionario.nome, 
            "sobrenome": $scope.funcionario.sobrenome, 
            "telefone": $scope.funcionario.telefone, 
            "email": $scope.funcionario.email, 
            "status": $scope.funcionario.status, 
            "funcao": $scope.funcionario.funcao, 
            "senha": $scope.funcionario.senha, 
            "dataCadastro": $scope.funcionario.dataCadastro, 
            "cargo": $scope.funcionario.cargo
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };

    $scope.excluirFuncionario = function () {
        //alert($scope.funcionario.nome);  //Mostra valores vindo do HTML
        //alert("Delete");
        $http.delete('http://localhost:8080/deletaFuncionario/'+$scope.funcionario.id).then(function(response){})
        window.location.reload();
    };

    $scope.selecionaFuncionario = function (funcionarioSelecionado) {
        $scope.funcionario = funcionarioSelecionado;
    };

    $scope.atualizarFuncionario = function () {
        //alert("Update");
        $http.post('http://localhost:8080/inseriFuncionario/', {
            "id": $scope.funcionario.id, 
            "cracha": $scope.funcionario.cracha, 
            "nome": $scope.funcionario.nome, 
            "sobrenome": $scope.funcionario.sobrenome, 
            "telefone": $scope.funcionario.telefone, 
            "email": $scope.funcionario.email, 
            "status": $scope.funcionario.status, 
            "funcao": $scope.funcionario.funcao, 
            "senha": $scope.funcionario.senha, 
            "dataCadastro": $scope.funcionario.dataCadastro, 
            "cargo": $scope.funcionario.cargo
        }).then(function(response){});
        window.location.reload();
    };
});