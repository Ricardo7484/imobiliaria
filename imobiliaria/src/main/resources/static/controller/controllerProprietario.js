var moduloProprietario = angular.module('moduloProprietario', []);

moduloProprietario.controller("cadProprietarioController", function ($scope, $http) {
    $http.get('http://localhost:8080/buscaProprietarios').then(function(response){
        $scope.proprietarios = response.data;
    })

    $scope.gravarProprietario = function () {
        $http.post('http://localhost:8080/inseriProprietario/', {"nome": $scope.proprietario.nome, "sobrenome": $scope.proprietario.sobrenome, "telefone": $scope.proprietario.telefone, "dataCadastro": $scope.proprietario.dataCadastro, "email": +$scope.proprietario.email}).then(function(response){});
        window.location.reload();  //Limpa a tela
    };

    $scope.excluirProprietario = function () {
        //alert($scope.proprietario.nome);  //Mostra valores vindo do HTML
        $http.delete('http://localhost:8080/deletaProprietario/'+$scope.proprietario.id).then(function(response){})
        window.location.reload();  //Limpa a tela
    };

    $scope.selecionaProprietario = function (proprietarioSelecionado) {
        $scope.proprietario = proprietarioSelecionado;
    };

    $scope.atualizarProprietario = function () {
        $http.post('http://localhost:8080/inseriProprietario/', {"id": $scope.proprietario.id, "nome": $scope.proprietario.nome, "sobrenome": $scope.proprietario.sobrenome, "telefone": $scope.proprietario.telefone, "dataCadastro": $scope.proprietario.dataCadastro, "email": $scope.proprietario.email}).then(function(response){});
        window.location.reload();  //Limpa a tela
    };
});